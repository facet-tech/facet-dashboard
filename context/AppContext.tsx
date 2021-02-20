import React from 'react'
import { authState as authStateConstant, color, snackbar } from '../shared/constant';

export interface AppState {
    currAuthState: string;
    setCurrAuthState: undefined,
    isUserLoggedIn: false,
    setIsUserLoggedIn: undefined,
}

const AppContext = React.createContext({
    currAuthState: authStateConstant.notSignedIn,
    setCurrAuthState: undefined,
    isUserLoggedIn: false,
    setIsUserLoggedIn: undefined,
});

export default AppContext;
