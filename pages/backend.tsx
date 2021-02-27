import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Admin from "../layouts/Admin.js";
import { getApp, getBackendFacets } from '../services/facetApiService.js';
import ParserBackendService from '../services/ParserBackendService';
import BackendFacetCarousel from '../shared/components/BackendFacetPanel/BackendFacetCarousel';
import FacetButton from '../shared/components/FacetButton';
import styled from 'styled-components';

const StyledMarginDiv = styled.div`
    margin-top: 1rem;
`

const Backend = () => {

    const { setBackendFacets } = useContext(AppContext);

    useEffect(() => {
        (async () => {
            const getAppResponse = await getApp();
            const getBackendFacetsResponse = await getBackendFacets(getAppResponse);
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