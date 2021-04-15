import React from 'react';
import styled from 'styled-components';
import FacetImage from './FacetImage';
import { makeStyles } from '@material-ui/core';
import { color } from '../constant';
import MarginTop from './MarginTop';

const StyledDiv = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    background-color: #181D26;
    height: 100%;
    color: white;
    grid-template-columns: 100%;
`;

const BorderDiv = styled.div`
  border: 2px solid ${color.ice};
  padding: 1rem;
  width: 60%;
  max-width: 40rem;
`;

const CenterContainer = styled.div`
    text-align: center;
`

export default ({ children }) => {

    return <>
        <StyledDiv>
            <MarginTop value="2rem" />
            <div style={{ textAlign: 'center' }}>
                <FacetImage title="facet" fill={color.ice} src='../images/facet_white.svg' />
            </div>
            <br />
            <BorderDiv>
                {children}
            </BorderDiv>
            <br />
            <CenterContainer>
                <FacetImage title="facet" src='../images/facet_typography_white.svg' />
            </CenterContainer>
            <MarginTop value="2rem" />
        </StyledDiv>
    </>;
}

