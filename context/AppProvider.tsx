import { useState, useEffect } from 'react';
import AppContext from './AppContext';
import { SnackbarProvider } from 'notistack';
import FacetSnackbar from '../shared/components/FacetSnackbar';
import { Auth } from 'aws-amplify';
import { authState as authStateConstant } from '../shared/constant';

const snackbarConfig = {
    autoHideDuration: 5000,
    vertical: 'top',
    horizontal: 'left'
}

export default function AppProvider({ children }) {
    const [currAuthState, setCurrAuthState] = useState(authStateConstant.signingIn);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        async function loadInitialState() {
            const loggedIn = await Auth.currentUserInfo();
            setIsUserLoggedIn(Boolean(loggedIn))
        }
        loadInitialState();
    }, [])

    return <AppContext.Provider value={{
        isUserLoggedIn, setIsUserLoggedIn, currAuthState, setCurrAuthState
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


