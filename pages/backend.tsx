import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Admin from "../layouts/Admin.js";
import { getApp, getBackendFacets } from '../services/facetApiService.js';
import ParserBackendService from '../services/ParserBackendService';
import BackendFacetCarousel from '../shared/components/BackendFacetPanel/BackendFacetCarousel';

const Backend = () => {

    const { setBackendFacets } = useContext(AppContext);

    useEffect(() => {
        (async () => {
            const getAppResponseArray = await getApp();
            console.log('getAppResponse', getAppResponseArray);
            const getBackendFacetsResponse = await getBackendFacets(getAppResponseArray);
            console.log('getBackendFacetsResponse', getBackendFacetsResponse);
            const parsedBackendResponse = ParserBackendService.ParseBackendResponse(getBackendFacetsResponse);
            console.log('parsedBackendResponse', parsedBackendResponse)
            setBackendFacets(parsedBackendResponse);
        })();
    }, []);

    return <div>
        <h2>Backend Applications</h2>
        <BackendFacetCarousel />
    </div>
}

Backend.layout = Admin;
export default Backend;