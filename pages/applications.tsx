import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Admin from "../layouts/Admin.js";
import { getApp, getUser } from '../services/facetApiService.js';
import BackendApplicationList from '../shared/components/BackendApplicationList';
import ParserBackendService from '../services/ParserBackendService';

const Backend = () => {
    const { setBackendFacetNames, setGetAppResponse, setFavoriteList } = useContext(AppContext);

    useEffect(() => {
        (async () => {
            const userResponse = await getUser();
            const apiKey = userResponse?.response?.apiKey;
            const getAppResponse = await getApp(apiKey);
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