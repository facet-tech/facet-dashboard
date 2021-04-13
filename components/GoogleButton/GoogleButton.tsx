import { Button, Icon, Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { color } from '../../shared/constant';

const svgIcon = (
    <Icon>
        <img width="100" alt="Signin with Google" src='../images/Google-Logo.svg' />
    </Icon>
);

const ParentGrid = styled.div`
    display: grid;
    grid-template-columns: 300px;
    align-items: center;
    justify-content: center;
    align-content: center;
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 95px 200px;
    background: #3F4765;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: .5rem;
`;

const GoogleButton = () => {
    return <>
        <ParentGrid>
            <div>
                <StyledGrid>
                    <div>
                        {svgIcon}
                    </div>
                    <div style={{
                        justifySelf: 'start',
                        fontWeight: 'bold'
                    }}>
                        Sign in with Google
            </div>
                </StyledGrid>
            </div>
        </ParentGrid>
    </>
}

export default GoogleButton;