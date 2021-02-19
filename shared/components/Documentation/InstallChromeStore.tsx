import FacetH1 from "../FacetH1"
import FacetParagraph from "../FacetParagraph"
import { documentationIds } from "../../constant"

const InstallChromeStore = () => {
    return <>
        <FacetH1 id={documentationIds.install}>Install the facet extension from the Chrome Store</FacetH1>
        <FacetParagraph color={"#5D5D5D"}>
            Download and install the latest version of the facet extension through the <a href='https://chrome.google.com/webstore/detail/facet/hpkpjkdhgldjhcopdkmljdgceeojoglh?hl=en' target='_blank'>Google Chrome Web store</a>. After the installation is complete, create and authenticate your user account so that you can start using the facet extension.
        </FacetParagraph>
    </>
}

export default InstallChromeStore;