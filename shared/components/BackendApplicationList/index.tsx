import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import ApplicationCard from '../ApplicationCard';
import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 22rem 22rem;
    grid-gap: 1rem;
    overflow: hidden;
`;


const BackendApplicationList = () => {
    const { backendFacetNames } = useContext(AppContext);
    return <>
        <Grid>
            {backendFacetNames?.map(backendFacet => {
                return <>
                    <ApplicationCard name={backendFacet} href={`${backendFacet}`} />
                </>
            })}
        </Grid>
    </>
}

export default BackendApplicationList;