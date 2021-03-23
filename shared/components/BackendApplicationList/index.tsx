import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import Link from 'next/link'
import { color } from '../../constant';
import ApplicationCard from '../ApplicationCard';
import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 18rem 18rem;
    grid-gap: 1rem;
`;


const BackendApplicationList = () => {
    const { backendFacetNames } = useContext(AppContext);
    return <>
        <Grid>
            {backendFacetNames?.map(backendFacet => {
                return <>
                    <ApplicationCard name={backendFacet} href={`backend/${backendFacet}`} />
                </>
            })}
        </Grid>
    </>
}

export default BackendApplicationList;