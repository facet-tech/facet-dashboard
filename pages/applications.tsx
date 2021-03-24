import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Admin from "../layouts/Admin.js";
import { getApp } from '../services/facetApiService.js';
import BackendApplicationList from '../shared/components/BackendApplicationList';
import styled from 'styled-components';
import { color } from '../shared/constant';

const Backend = () => {
    const { setBackendFacetNames, setGetAppResponse } = useContext(AppContext);

    useEffect(() => {
        (async () => {
            const getAppResponse = await getApp();
            setGetAppResponse(getAppResponse);
            const backendFacetNames = getAppResponse?.response?.map(e => e?.name)
            setBackendFacetNames(backendFacetNames);
        })();
    }, []);

    return <div>
        <BackendApplicationList />
    </div>
}

Backend.layout = Admin;
export default Backend;