import React from 'react';
import styled from 'styled-components';
import { color } from '../constant';

const StyledH1 = styled.h1`
    font-size: 27px;
    font-weight: 600;
    color: ${color.white}
`;

export default ({ children, ...props }) => {
    return <StyledH1 {...props}>
        {children}
    </StyledH1 >
}