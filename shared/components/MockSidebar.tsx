import { useContext } from 'react';
import { color, allFacets } from "../constant";
import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import FacetIconButton from "./FacetIconButton";
import AppContext from './AppContext';

const StyledDiv = styled.div`
    text-align: normal;
    background-color: ${color.darkestGray};
    height: 100%;
`;

const InitialAlignDiv = styled.div`
    text-align: initial;
    padding: .5rem;
    margin-left: .8rem;
    display: grid;
    cursor: pointer;
    grid-template-columns: 80% 20%;
`;

export default function MockSidebar() {

    // @ts-ignore
    const { hiddenFacets, setHiddenFacets } = useContext(AppContext);

    return (
        <>
            <StyledDiv>
                <InitialAlignDiv>
                    <div>
                        <FacetLabel color={color.grayB} text={allFacets.facet1} />
                    </div>
                    {hiddenFacets.includes(allFacets.facet1) ?
                        // @ts-ignore
                        <FacetIconButton key={allFacets.facet1 + "true"} isSelected={true} onClick={() => { setHiddenFacets(hiddenFacets.filter(e => e !== allFacets.facet1)) }} name="eye-outline" component="span" />
                        // @ts-ignore
                        : <FacetIconButton key={allFacets.facet1 + "false"} isSelected={false} onClick={() => { setHiddenFacets([...hiddenFacets, allFacets.facet1]) }} name="eye-off-outline" component="span" />}
                </InitialAlignDiv>
                <InitialAlignDiv>
                    <div>
                        <FacetLabel color={color.grayB} text={allFacets.facet2} />
                    </div>
                    {hiddenFacets.includes(allFacets.facet2) ?
                        // @ts-ignore
                        <FacetIconButton key={allFacets.facet2 + "true"} isSelected={true} onClick={() => { setHiddenFacets(hiddenFacets.filter(e => e !== allFacets.facet2)) }} name="eye-outline" component="span" />
                        // @ts-ignore
                        : <FacetIconButton key={allFacets.facet2 + "false"} isSelected={false} onClick={() => { setHiddenFacets([...hiddenFacets, allFacets.facet2]) }} name="eye-off-outline" component="span" />}
                </InitialAlignDiv>
                <InitialAlignDiv>
                    <div>
                        <FacetLabel color={color.grayB} text={allFacets.facet3} />
                    </div>
                    {hiddenFacets?.includes(allFacets.facet3) ?
                        // @ts-ignore
                        <FacetIconButton key={allFacets.facet3 + "true"} isSelected={true} onClick={() => { setHiddenFacets(hiddenFacets.filter(e => e !== allFacets.facet3)) }} name="eye-outline" component="span" />
                        // @ts-ignore
                        : <FacetIconButton key={allFacets.facet3 + "false"} isSelected={false} onClick={() => { setHiddenFacets([...hiddenFacets, allFacets.facet3]) }} name="eye-off-outline" component="span" />}
                </InitialAlignDiv>
                <InitialAlignDiv>
                    <div>
                        <FacetLabel color={color.grayB} text={allFacets.facet4} />
                    </div>
                    {hiddenFacets?.includes(allFacets.facet4) ?
                        // @ts-ignore
                        <FacetIconButton key={allFacets.facet4 + "true"} isSelected={true} onClick={() => { setHiddenFacets(hiddenFacets.filter(e => e !== allFacets.facet4)) }} name="eye-outline" component="span" />
                        // @ts-ignore
                        : <FacetIconButton key={allFacets.facet4 + "false"} isSelected={false} onClick={() => { setHiddenFacets([...hiddenFacets, allFacets.facet4]) }} name="eye-off-outline" component="span" />}
                </InitialAlignDiv>
                <InitialAlignDiv>
                    <div>
                        <FacetLabel color={color.grayB} text={allFacets.facet5} />
                    </div>
                    {hiddenFacets?.includes(allFacets.facet5) ?
                        // @ts-ignore
                        <FacetIconButton key={allFacets.facet5 + "true"} isSelected={true} onClick={() => { setHiddenFacets(hiddenFacets.filter(e => e !== allFacets.facet5)) }} name="eye-outline" component="span" />
                        // @ts-ignore
                        : <FacetIconButton key={allFacets.facet5 + "false"} isSelected={false} onClick={() => { setHiddenFacets([...hiddenFacets, allFacets.facet5]) }} name="eye-off-outline" component="span" />}
                </InitialAlignDiv>
            </StyledDiv>
        </>
    );
}