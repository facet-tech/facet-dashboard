import React, { useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import Admin from "../../layouts/Admin.js";
import { getApp, getBackendFacet } from '../../services/facetApiService.js';
import ParserBackendService from '../../services/ParserBackendService';
import BackendFacetCarousel from '../../shared/components/BackendFacetPanel/BackendFacetCarousel';
import { useRouter } from 'next/router';
import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import BackendApplicationList from '../../shared/components/BackendApplicationList';
import Link from 'next/link'

const Backend = () => {

    const { setBackendFacets } = useContext(AppContext);
    const router = useRouter();
    const { appId } = router.query

    useEffect(() => {
        (async () => {

            const getBackendFacetsResponse = await getBackendFacet(appId);
            const parsedBackendResponse = ParserBackendService.ParseBackendResponse(getBackendFacetsResponse);
            setBackendFacets(parsedBackendResponse);
        })();
    }, []);

    return <div>
        <Link href={`/backend`}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
            >
                <KeyboardBackspaceIcon />
            </IconButton>
        </Link>

        <h2>Backend Applications</h2>
        <BackendFacetCarousel />
    </div>
}

Backend.layout = Admin;
export default Backend;