import { Divider, makeStyles } from "@material-ui/core"
import { color as colorConst, dashboardColor } from "../constant";
import styled from 'styled-components';
import FacetDivider from "./FacetDivider";


const ParentContainer = styled.div`
    display: grid;
    grid-template-columns: 45% 10% 45%;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

const FacetLabeledDivider = ({ text = 'Or', ...props }) => {

    return <>
        <ParentContainer>
            <div>
                <FacetDivider color={colorConst.ice} />
            </div>
            <div>
                {text}
            </div>
            <div>
                <FacetDivider color={colorConst.ice} />
            </div>
        </ParentContainer>
    </>
}

export default FacetLabeledDivider;