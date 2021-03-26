import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import ApplicationCard from '../ApplicationCard';
import styled from 'styled-components';
import FacetParagraph from '../FacetParagraph';
import { color, dashboardColor } from '../../constant';
import FacetIcon from '../Icon';
import FacetIconButton from '../FacetIconButton';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 22rem 22rem;
    grid-gap: 1rem;
    overflow: hidden;
    margin-top: 2rem;
`;


const StyledGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 30rem;
`

const BackendApplicationList = () => {
    const { backendFacetNames } = useContext(AppContext);
    return <>
        <StyledGrid>
            <FacetParagraph width='unset' color={color.grayB}>
                Check our <a href='https://facet.run/documentation' target='_blank'>documentation</a> on how to create a new project.
                </FacetParagraph>

            <FacetIconButton onClick={() => {
                window.open('https://facet.run/documentation', '_blank');
            }} fill={dashboardColor.cyan} name='external-link-outline' />
        </StyledGrid>
        <Grid>
            {backendFacetNames?.map(backendFacet => {
                return <>
                    <ApplicationCard name={backendFacet} href={`applications/${backendFacet}/`} />
                </>
            })}
        </Grid>
    </>
}

export default BackendApplicationList;