import { color } from "../constant";
import FacetLabel from "./FacetLabel";
import StayUpdated from "./Subscribe";
import Link from 'next/link'
import styled from "styled-components";

const StyledImg = styled.img`
  cursor: pointer;
`

export default function Footer() {
  return (
    <div>
      <br />
      <StayUpdated />
      <div style={{ textAlign: 'center', backgroundColor: color.secondaryGray }}>
        <div>
          <Link href="/"><StyledImg src="/facet_typography_primary.svg" alt="Facet logo" height="30" /></Link>
        </div>
        <br />
        <div>
          <Link href="https://github.com/facets-io/">
            <StyledImg
              onAuxClick={() => { window.open("https://github.com/facets-io/", "_blank") }}
              src="/gitHub.svg" height="24.71" />
          </Link>
          <Link
            href="https://twitter.com/runFacet/">
            <StyledImg
              style={{ marginLeft: '.5rem' }}
              onAuxClick={() => { window.open("https://twitter.com/runFacet/", "_blank") }}
              src="/twitter.svg" height="24.71" />
          </Link>
        </div>
        <br />
        <div>
          <FacetLabel color={color.lightGray} fontFamily="Manrope" fontSize="16" text="Copyright © Facet Technologies, Inc. 2021" />
          <br />
          <FacetLabel color={color.lightGray} fontFamily="Manrope" fontSize="16" text="All rights reserved" />
        </div>
        <br />
      </div>
    </div>
  )
}
