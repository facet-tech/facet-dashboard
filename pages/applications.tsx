import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Admin from "../layouts/Admin.js";
import { getApp } from '../services/facetApiService.js';
import BackendApplicationList from '../shared/components/BackendApplicationList';
import ParserBackendService from '../services/ParserBackendService';
import { Auth } from 'aws-amplify'

const Backend = () => {
    const { apiKey, setBackendFacetNames, setGetAppResponse, setFavoriteList, retreiveApiKey } = useContext(AppContext);

    useEffect(() => {
        (async () => {
            let key;
            if (!apiKey) {
                key = await retreiveApiKey();
            }
            const getAppResponse = await getApp(apiKey || key);
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