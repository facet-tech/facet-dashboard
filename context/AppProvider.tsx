import { useState, useEffect } from 'react';
import AppContext from './AppContext';
import { SnackbarProvider } from 'notistack';
import FacetSnackbar from '../shared/components/FacetSnackbar';
import { Auth } from 'aws-amplify';
import { authState as authStateConstant } from '../shared/constant';
import useIsMounted from '../shared/hooks/useIsMounted';
import { useRouter } from 'next/router';
import { postBackendFacets, getUser, getDomains } from '../services/facetApiService';
import { getByPath } from '../routes';

const snackbarConfig = {
    autoHideDuration: 5000,
    vertical: 'top',
    horizontal: 'left'
}

export default function AppProvider({ children }) {
    const [currAuthState, setCurrAuthState] = useState(authStateConstant.signingIn);
    const [isCurrentlyLoggedIn, setIsCurrentlyLoggedIn] = useState(false);
    const [authObject, setAuthObject] = useState({ email: '', password: '' });
    const [backendFacets, setBackendFacets] = useState([]);
    const [backendFacetNames, setBackendFacetNames] = useState([]);
    const [getAppResponse, setGetAppResponse] = useState({});
    const [currRoute, setCurrRoute] = useState(''); // TODO BE SET FROM useEffect
    const [favoriteList, setFavoriteList] = useState([]);

    const router = useRouter();
    const isMounted = useIsMounted();
    const [domains, setDomains] = useState([]);

    useEffect(() => {
        (async () => {
            const userResponse = await getUser();
            const workspaceId = userResponse?.response?.workspaceId;
            const getDomainsResponse = await getDomains(workspaceId);
            setDomains(getDomainsResponse?.response);
            const val = getByPath(window.location.pathname.slice(0, -1));
            setCurrRoute(val);
        })();

        if (isMounted.current) {
            (async () => {
                const loggedIn = await Auth.currentUserInfo();
                const loggedInVal = Boolean(loggedIn);
                if (!loggedInVal && window.location.pathname !== '/authentication/') {
                    router.push('/authentication/')
                }
                setIsCurrentlyLoggedIn(loggedInVal);
            })()
        }
    }, []);

    const handleEnabledChange = (sig, element) => {
        sig.enabled = !sig.enabled;
        setBackendFacets([...backendFacets]);
        postBackendFacets(element)
    };
    return <AppContext.Provider value={{
        currAuthState, setCurrAuthState,
        isCurrentlyLoggedIn, setIsCurrentlyLoggedIn, handleEnabledChange,
        authObject, setAuthObject, backendFacets, setBackendFacets,
        backendFacetNames, setBackendFacetNames, domains, setDomains,
        currRoute, setCurrRoute, getAppResponse, setGetAppResponse,
        favoriteList, setFavoriteList
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


