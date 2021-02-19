import { documentationIds } from "../../constant";
import FacetH1 from "../FacetH1";
import FacetParagraph from "../FacetParagraph";

const Preview = () => {
    return <>
        <FacetH1 id={documentationIds.preview}>Preview</FacetH1>
        <FacetParagraph color={"#5D5D5D"} >
            Select the <b>"Save and Preview"</b> to evaluate your configuration. The preview will open in a new tab. This feature allows you to review your configuration before integrating into production.
    </FacetParagraph>
    </>
}

export default Preview;