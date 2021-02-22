import { useState, useEffect } from 'react';
import AppContext from './AppContext';
import { SnackbarProvider } from 'notistack';
import FacetSnackbar from '../shared/components/FacetSnackbar';
import { Auth } from 'aws-amplify';
import { authState as authStateConstant } from '../shared/constant';
import useIsMounted from '../shared/hooks/useIsMounted';
import { useRouter } from 'next/router';

const snackbarConfig = {
    autoHideDuration: 5000,
    vertical: 'top',
    horizontal: 'left'
}

export default function AppProvider({ children }) {
    const [currAuthState, setCurrAuthState] = useState(authStateConstant.signingIn);
    const [isCurrentlyLoggedIn, setIsCurrentlyLoggedIn] = useState(false);
    const router = useRouter();

    const isMounted = useIsMounted();
    useEffect(() => {
        if (isMounted.current) {
            (async () => {
                const loggedIn = await Auth.currentUserInfo();
                const loggedInVal = Boolean(loggedIn);
                if (!loggedInVal) {
                    router.push('/authentication')
                }
                setIsCurrentlyLoggedIn(loggedInVal);
            })()
        }
    }, []);

    return <AppContext.Provider value={{
        currAuthState, setCurrAuthState,
        isCurrentlyLoggedIn, setIsCurrentlyLoggedIn
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


