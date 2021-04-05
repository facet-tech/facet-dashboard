import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Admin from "../layouts/Admin.js";
import { getApp } from '../services/facetApiService.js';
import BackendApplicationList from '../shared/components/BackendApplicationList';
import ParserBackendService from '../services/ParserBackendService';

const Backend = () => {
    const { setBackendFacetNames, setGetAppResponse, setFavoriteList, apiKey } = useContext(AppContext);

    useEffect(() => {
        (async () => {
            const getAppResponse = await getApp(apiKey);
            console.log('@getAppResponse', getAppResponse);
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