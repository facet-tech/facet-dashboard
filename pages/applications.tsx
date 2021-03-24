import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Admin from "../layouts/Admin.js";
import { getApp } from '../services/facetApiService.js';
import BackendApplicationList from '../shared/components/BackendApplicationList';
import styled from 'styled-components';
import { color } from '../shared/constant';
import ParserBackendService from '../services/ParserBackendService';

const Backend = () => {
    const { setBackendFacetNames, setGetAppResponse, favoriteList, setFavoriteList } = useContext(AppContext);

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
    console.log('KEEPO favoriteList', favoriteList);
    return <div>
        <BackendApplicationList />
    </div>
}

Backend.layout = Admin;
export default Backend;