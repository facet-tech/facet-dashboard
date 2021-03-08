import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Admin from "../layouts/Admin.js";
import { getApp } from '../services/facetApiService.js';
import BackendApplicationList from '../shared/components/BackendApplicationList';
import styled from 'styled-components';
import { color } from '../shared/constant';

const Backend = () => {
    const { setBackendFacetNames } = useContext(AppContext);

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