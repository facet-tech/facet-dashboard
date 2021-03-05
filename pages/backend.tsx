import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Admin from "../layouts/Admin.js";
import { getApp, getBackendFacet } from '../services/facetApiService.js';
import ParserBackendService from '../services/ParserBackendService';
import BackendFacetCarousel from '../shared/components/BackendFacetPanel/BackendFacetCarousel';
import { useRouter } from 'next/router';
import BackendApplicationList from '../shared/components/BackendApplicationList';
import styled from 'styled-components';
import { color } from '../shared/constant';

const Backend = () => {
    const router = useRouter();
    const { appId } = router.query;
    const { setBackendFacets, setBackendFacetNames } = useContext(AppContext);

    useEffect(() => {
        (async () => {
            const getAppResponseArray = await getApp();
            setBackendFacetNames(getAppResponseArray);
        })();
    }, []);

    const StyledH2 = styled.h2`
        color: ${color.white};
    `

    return <div>
        <StyledH2>Backend Applications</StyledH2>
        <BackendApplicationList />
    </div>
}

Backend.layout = Admin;
export default Backend;