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
`;

const BorderDiv = styled.div`
  border: 2px solid ${color.ice};
  padding: 1rem;
  width: 60%;
  max-width: 50rem;
`;

const useStyles = makeStyles(() => ({
    center: {
        textAlign: 'center',
    },
}));

export default ({ children }) => {
    const classes = useStyles();

    return <>
        <StyledDiv>
            <MarginTop value="2rem" />
            <div style={{ textAlign: 'center' }}>
                <FacetImage title="facet" fill={color.ice} src='../images/facet_ice_logo.svg' />
            </div>
            <br />
            <BorderDiv>
                {children}
            </BorderDiv>
            <br />
            <div className={classes.center}>
                <FacetImage title="facet" src='../images/facet_ice_logo.svg' />
            </div>
            <MarginTop value="2rem" />
        </StyledDiv>
    </>;
}

