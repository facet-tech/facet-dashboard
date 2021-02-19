import styled from "styled-components";

const MarginTop = styled.div`
    margin-top: ${(props) => props.value ? props.value : '1rem'};
`;

export default MarginTop;