import { useState, useEffect } from 'react';
import AppContext from './AppContext';
import { SnackbarProvider } from 'notistack';
import FacetSnackbar from '../shared/components/FacetSnackbar';
import { Auth } from 'aws-amplify';
import { authState as authStateConstant } from '../shared/constant';
import useIsMounted from '../shared/hooks/useIsMounted';
import { useRouter } from 'next/router';
import { postBackendFacets, getUser, getDomains, getOrCreateWorkspace } from '../services/facetApiService';
import { getByPath } from '../routes';
import Router from "next/router";

const snackbarConfig = {
    autoHideDuration: 5000,
    vertical: 'top',
    horizontal: 'left'
}

export default function AppProvider({ children }) {
    const router = useRouter();
    const [currAuthState, setCurrAuthState] = useState(authStateConstant.signingIn);
    const [openModal, setOpenModal] = useState(false);
    const [isCurrentlyLoggedIn, setIsCurrentlyLoggedIn] = useState(false);
    const [authObject, setAuthObject] = useState({ email: '', password: '' });
    const [backendFacets, setBackendFacets] = useState([]);
    const [backendFacetNames, setBackendFacetNames] = useState([]);
    const [getAppResponse, setGetAppResponse] = useState({});
    const [currRoute, setCurrRoute] = useState(''); // TODO BE SET FROM useEffect
    const [favoriteList, setFavoriteList] = useState([]);
    const [apiKey, setApiKey] = useState('');
    const isMounted = useIsMounted();
    const [domains, setDomains] = useState([]);
    const [appId, setAppId] = useState('');
    const [workspaceId, setWorkspaceId] = useState('');

    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    const retreiveApiKey = async () => {
        if (apiKey) {
            return apiKey;
        }
        let userResponse = await getUser();
        const key = userResponse?.response?.apiKey;
        setApiKey(key);
        return key;
    }


    useEffect(() => {
        (async () => {
            let userResponse = await getUser();
            if (userResponse?.status >= 400 && userResponse?.status <= 500) {
                const currentUserInfo = await Auth.currentUserInfo();
                const email = currentUserInfo?.attributes?.email;
                await getOrCreateWorkspace(email);
                userResponse = await getUser();
            }
            const workspaceId = userResponse?.response?.workspaceId;
            const apiKey = userResponse?.response?.apiKey;
            setWorkspaceId(workspaceId);
            setApiKey(apiKey);
            const getDomainsResponse = await getDomains(workspaceId);
            setDomains(getDomainsResponse?.response);
            const val = getByPath(window.location.pathname.slice(0, -1));
            setCurrRoute(val);

            if (isMounted.current) {
                (async () => {
                    const loggedIn = await Auth.currentUserInfo();
                    const loggedInVal = Boolean(loggedIn);
                    if (!loggedInVal && window.location.pathname !== '/authentication/') {
                        router.push('/authentication/');
                    }
                    if (loggedIn && (window.location.pathname === '/authentication/' || window.location.pathname === '/' || window.location.pathname === '')) {
                        router.push('/applications/');
                    }
                    setIsCurrentlyLoggedIn(loggedInVal);

                })()
            }
        })();
    }, []);

    async function checkUser() {
        return Auth.currentAuthenticatedUser()
            .then(user => {
                return true;
            })
            .catch(err => {
                return false;
            })
    }

    const handleEnabledChange = (sig, element) => {
        sig.enabled = !sig.enabled;
        setBackendFacets([...backendFacets]);
        postBackendFacets(element, apiKey)
    };

    return <AppContext.Provider value={{
        currAuthState, setCurrAuthState,
        isCurrentlyLoggedIn, setIsCurrentlyLoggedIn, handleEnabledChange,
        authObject, setAuthObject, backendFacets, setBackendFacets,
        backendFacetNames, setBackendFacetNames, domains, setDomains,
        currRoute, setCurrRoute, getAppResponse, setGetAppResponse,
        favoriteList, setFavoriteList, apiKey, setApiKey,
        openModal, setOpenModal, handleModalOpen, handleModalClose,
        appId, setAppId, workspaceId, setWorkspaceId, retreiveApiKey
    }}>
        {/* @ts-ignore */}
        <SnackbarProvider
            style={{ height: '100%' }}
            maxSnack={4}
            disableWindowBlurListener
            autoHideDuration={snackbarConfig.autoHideDuration}
            iconVariant={{
                error: '✖️',
                warning: '⚠️',
            }}
            anchorOrigin={{
                vertical: snackbarConfig.vertical,
                horizontal: snackbarConfig.horizontal,
            }}
            content={(key, message) => (
                //@ts-ignore
                <FacetSnackbar id={key} {...message} />
            )}>
            {children}
        </SnackbarProvider>
    </AppContext.Provider >
}
