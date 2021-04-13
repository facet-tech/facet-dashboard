import React, { useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import Admin from "../../layouts/Admin.js";
import { getBackendFacet } from '../../services/facetApiService.js';
import ParserBackendService from '../../services/ParserBackendService';
import BackendFacetCarousel from '../../shared/components/BackendFacetPanel/BackendFacetCarousel';
import { useRouter } from 'next/router';
import Link from 'next/link'
import StyledH2 from '../../components/StyledH2';
import FacetIconButton from '../../shared/components/FacetIconButton';
import { color } from '../../shared/constant';
import styled from 'styled-components';
import AppIdTopPanel from '../../shared/components/AppIdTopPanel';
import FacetDropdown from '../../shared/components/FacetDropdown';

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

    const { setBackendFacets, apiKey, setAppId } = useContext(AppContext);
    const router = useRouter();
    const { appId } = router.query

    useEffect(() => {
        (async () => {
            setAppId(appId);
            const getBackendFacetsResponse = await getBackendFacet(appId, apiKey);
            const parsedBackendResponse = ParserBackendService.ParseBackendResponse(getBackendFacetsResponse);
            setBackendFacets(parsedBackendResponse);
        })();
    }, []);

    const options = [
        { value: 'development', label: 'Development' },
        { value: 'production', label: 'Production' },
    ];

    return <StyledDiv>
        <AppIdTopPanel />
        <br />
        <br />
        <FacetDropdown options={options} />
        <GridDiv>
            <div>
                <Link href={`/applications`}>
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