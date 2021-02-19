import styled from 'styled-components';
import { color as colorConstant } from '../constant';

const InnerDiv = styled.div`
    background-color: ${props => props.color};
    padding: ${props => props.padding};
    padding-top: ${props => props.paddingTop};
    padding-bottom: ${props => props.paddingBottom};
    width: 100%;
    max-width: 100rem;
    margin: auto;
`;

const OuterDiv = styled.div`
    background-color: ${props => props.color};
    width: 100%;
    backdrop-filter: saturate(180%) blur(5px);
    opacity: 90%;
`;

const navBarStyle = {
    position: "fixed",
    top: ".275rem",
    width: "100%",
    zIndex: 500
}

export default function ContentContainer({ color = colorConstant.white, padding = "0", paddingTop = "0", paddingBottom = "0", isNavBar = false, children }) {
    const style = isNavBar ? navBarStyle : {};
    return (
        <OuterDiv style={style} color={color}>
            <InnerDiv padding={padding} paddingTop={paddingTop} paddingBottom={paddingBottom}>
                {children}
            </InnerDiv>
        </OuterDiv>
    )
}
