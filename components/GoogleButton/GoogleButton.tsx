import { Icon } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';

const StyledIconContainer = styled.div`
    display: grid;
    align-content: center;
    justify-content: center;
`

const svgIcon = (
    <StyledIconContainer>
        <img height="30" width="100" src='../images/google.svg' />
    </StyledIconContainer>
);

const ParentGrid = styled.div`
    display: grid;
    grid-template-columns: 300px;
    align-items: center;
    justify-content: center;
    align-content: center;
    padding: 2rem;
    display: grid;
    align-content: center;
    justify-content: center;
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 95px 200px;
    background: #323B40;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: .5rem;
    height: 4rem;
    cursor: pointer;
`;

const GoogleButton = () => {
    return <>
        <ParentGrid onClick={() => Auth.federatedSignIn({ provider: 'Google' })}>
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