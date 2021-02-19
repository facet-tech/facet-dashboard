import { documentationIds } from "../../constant"
import FacetH1 from "../FacetH1"
import FacetParagraph from "../FacetParagraph"

const Introduction = () => {
    return <>
        <FacetH1 id={documentationIds.facetTitle}>Introduction</FacetH1>
        <FacetParagraph color={"#5D5D5D"}>
            Facet allows teams to rollout features without engaging engineering resources. In this guide, we describe how to install the facet extension, create facets, inject the facet CDN script, preview your configuration, and rollout/rollback desired features in production.
     </FacetParagraph>
    </>
}

export default Introduction;