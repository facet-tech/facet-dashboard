import React from 'react'
import { authState as authStateConstant } from '../shared/constant';

export interface AppState {
    currAuthState: string;
    setCurrAuthState: undefined,
    isCurrentlyLoggedIn: false,
    setIsCurrentlyLoggedIn: undefined,
    authObject: any,
    setAuthObject: undefined,
    handleEnabledChange: undefined,
    backendFacetNames: [],
    setBackendFacetNames: undefined,
    domains: [],
    setDomains: undefined,
    currRoute: string,
    setCurrRoute: undefined,
    getAppResponse: {},
    setGetAppResponse: undefined,
    favoriteList: [],
    setFavoriteList: undefined,
    apiKey: string,
    setApiKey: undefined,
    openModal: false,
    setOpenModal: undefined,
    handleModalOpen: undefined,
    handleModalClose: undefined,
    appId: string,
    setAppId: undefined,
    workspaceId: string,
    setWorkspaceId: undefined
}

const AppContext = React.createContext({
    currAuthState: authStateConstant.notSignedIn,
    setCurrAuthState: undefined,
    isCurrentlyLoggedIn: false,
    setIsCurrentlyLoggedIn: undefined,
    authObject: undefined,
    setAuthObject: undefined,
    backendFacets: [],
    setBackendFacets: undefined,
    handleEnabledChange: undefined,
    backendFacetNames: [],
    setBackendFacetNames: undefined,
    domains: [],
    setDomains: undefined,
    currRoute: undefined,
    setCurrRoute: undefined,
    getAppResponse: undefined,
    setGetAppResponse: undefined,
    favoriteList: [],
    setFavoriteList: undefined,
    apiKey: '',
    setApiKey: undefined,
    openModal: false,
    setOpenModal: undefined,
    handleModalOpen: undefined,
    handleModalClose: undefined,
    appId: '',
    setAppId: undefined,
    workspaceId: '',
    setWorkspaceId: undefined
});

export default AppContext;
