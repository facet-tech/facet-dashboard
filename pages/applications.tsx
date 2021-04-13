import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Admin from "../layouts/Admin.js";
import { getApp } from '../services/facetApiService.js';
import BackendApplicationList from '../shared/components/BackendApplicationList';
import ParserBackendService from '../services/ParserBackendService';
import { Auth } from 'aws-amplify'

const Backend = () => {
    const { setBackendFacetNames, setGetAppResponse, favoriteList, setFavoriteList } = useContext(AppContext);
    async function checkUser() {
        Auth.currentAuthenticatedUser()
            .then(user => console.log({ user }))
            .catch(err => console.log(err))
        const loggedIn = await Auth.currentUserInfo();
        const loggedInVal = Boolean(loggedIn);
        return loggedInVal;
    }

    useEffect(() => {
        (async () => {
            const getAppResponse = await getApp();
            setGetAppResponse(getAppResponse);
            const backendFacetNames = getAppResponse?.response?.map(e => e?.name);
            setBackendFacetNames(backendFacetNames);
            const favoriteList = ParserBackendService.getFavoriteApps(getAppResponse);
            setFavoriteList(favoriteList);
        })();
    }, []);
    return <div>
        <BackendApplicationList />
    </div>
}

Backend.layout = Admin;
export default Backend;