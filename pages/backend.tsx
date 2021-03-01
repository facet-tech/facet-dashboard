import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Admin from "../layouts/Admin.js";
import { getApp, getBackendFacet } from '../services/facetApiService.js';
import ParserBackendService from '../services/ParserBackendService';
import BackendFacetCarousel from '../shared/components/BackendFacetPanel/BackendFacetCarousel';
import { useRouter } from 'next/router';
import BackendApplicationList from '../shared/components/BackendApplicationList';

const Backend = () => {
    const router = useRouter();
    const { appId } = router.query;
    const { setBackendFacets, setBackendFacetNames } = useContext(AppContext);

    useEffect(() => {
        (async () => {
            const getAppResponseArray = await getApp();
            // const getBackendFacetsResponse = await getBackendFacet(getAppResponseArray);
            // const parsedBackendResponse = ParserBackendService.ParseBackendResponse(getBackendFacetsResponse);
            setBackendFacetNames(getAppResponseArray);
        })();
    }, []);

    return <div>
        <h2>Backend Applications</h2>
        <BackendApplicationList />
    </div>
}

Backend.layout = Admin;
export default Backend;