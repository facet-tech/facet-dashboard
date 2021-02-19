import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import { color, fontSize } from "../constant";

const MainDiv = styled.div`
    background-color: ${color.black};
    width: 100%;
    text-align: left;
`;

const InnerDiv = styled.div`
    display: grid;
    grid-gap: 5%;
    grid-template-columns: 40% 40%;
    text-align: initial;
    justify-content: center;
`;

export default function SimpleSafeFast() {
    return (
        <MainDiv>
            <InnerDiv>
                <div>
                    <FacetLabel color={color.white} fontSize={fontSize.xxLarge} text="Simple, Safe, and fast feature rollout with facets" />
                    <br />  <br />
                    <FacetLabel text="Use facets to streamline feature delivery with a singe line of code" />
                    <br /> <br /> <br /> <br /> <br /> <br />
                    <img src="./mock_site.svg"/>
                </div>
                <div>
                    <h1>facet</h1><br />
                    <FacetLabel text="Single-line of code" /><br />
                    <FacetLabel text="No engineering time" /><br />
                    <FacetLabel text="Unblocked teams" /><br />
                    <FacetLabel text="Built for engineering, used by anyone" />
                </div>
            </InnerDiv>
        </MainDiv>
    );
}