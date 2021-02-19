import styled from 'styled-components';
import { color } from '../constant';
import FacetLabel from './FacetLabel';

const MobileContainer = styled.div`
    display: grid;
    grid-template-columns: 85%;
    justify-content: center;
`;

const StyledFacetLabel = ({ text, fontSize = '36px', style = {}, isMobile = false }) =>
    isMobile ? <MobileContainer>
        <FacetLabel extraStyle={style} color={color.black} fontSize={fontSize} fontWeight={700} text={text} />
    </MobileContainer> :
        <FacetLabel extraStyle={style} color={color.black} fontSize={fontSize} fontWeight={700} text={text} />

export default StyledFacetLabel;