import React from 'react'
import { authState as authStateConstant } from '../shared/constant';

export interface AppState {
    currAuthState: string;
    setCurrAuthState: undefined,
    isCurrentlyLoggedIn: false,
    setIsCurrentlyLoggedIn: undefined,
    authObject: any,
    setAuthObject: undefined,
}

const AppContext = React.createContext({
    currAuthState: authStateConstant.notSignedIn,
    setCurrAuthState: undefined,
    isCurrentlyLoggedIn: false,
    setIsCurrentlyLoggedIn: undefined,
    authObject: undefined,
    setAuthObject: undefined,
    backendFacets: [],
    setBackendFacets: undefined
});

export default AppContext;
