import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Admin from "../layouts/Admin.js";
import { getApp, getBackendFacets } from '../services/facetApiService.js';
import ParserBackendService from '../services/ParserBackendService';
import BackendFacetCarousel from '../shared/components/BackendFacetPanel/BackendFacetCarousel';

const Backend = () => {

    const { backendFacets, setBackendFacets } = useContext(AppContext);

    useEffect(() => {

        (async () => {
            const getAppResponse = await getApp();
            const getBackendFacetsResponse = await getBackendFacets(getAppResponse);
            console.log('getAppResponse', getBackendFacetsResponse);
            console.log('CHECK', ParserBackendService);
            const singleBackendResponse = ParserBackendService.ParseSingleBackendResponse(getBackendFacetsResponse);
            setBackendFacets(singleBackendResponse);
        })();

    }, []);


    return <div>
        <h2>Backend Applications</h2>
        <BackendFacetCarousel />
    </div>
}

Backend.layout = Admin;
export default Backend;