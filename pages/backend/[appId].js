import React, { useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import Admin from "../../layouts/Admin.js";
import { getApp, getBackendFacet } from '../../services/facetApiService.js';
import ParserBackendService from '../../services/ParserBackendService';
import BackendFacetCarousel from '../../shared/components/BackendFacetPanel/BackendFacetCarousel';
import { useRouter } from 'next/router';
import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Link from 'next/link'
import StyledH2 from '../../components/StyledH2';
import FacetIconButton from '../../shared/components/FacetIconButton';
import { color } from '../../shared/constant';
import styled from 'styled-components';

const StyledDiv = styled.div`
    padding: 1rem;
`

const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 3% 90%;
    gap: 2%;
    align-items: center;
`;

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

    return <StyledDiv>
        <GridDiv>
            <div>
                <Link href={`/backend`}>
                    <FacetIconButton
                        iconWidth="25"
                        iconHeight="25"
                        title="Notifications"
                        fill={color.white}
                        name="arrow-back"
                    />
                </Link>
            </div>
            <div>
                <StyledH2>{appId}</StyledH2>
            </div>
        </GridDiv>
        <BackendFacetCarousel />
    </StyledDiv>
}

Backend.layout = Admin;
export default Backend;