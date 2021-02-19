import styled from 'styled-components';
import { color } from '../constant';

const TopBorder = styled.div`
    background-color: ${color.primary};
    position:fixed;
    top:0px;
    width:100%;
    height: .275rem;
    z-index: 500;
`;

export default TopBorder;