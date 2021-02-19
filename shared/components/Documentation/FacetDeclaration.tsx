import { color, documentationIds } from "../../constant"
import FacetH1 from "../FacetH1"
import Icon from "../Icon"
import FacetParagraph from "../FacetParagraph"


const facetDeclaration = () => {
    return <>
        <FacetH1 id={documentationIds.facetDeclaration}>Declare facets</FacetH1>
        <FacetParagraph color={"#5D5D5D"}>
            A facet is a group of elements that make up a feature. For instance, a login form can be a facet with the elements being “username” and “password”.
    <br />
            <br />
    Use the facet extension to Create/Read/Update/Delete (CRUDing) facets. The user interface of the facet extension is a sidebar that loads on the left. Start creating facets by selecting on the edit button (
    <Icon
                iconWidth="20"
                iconHeight="15"
                fill={color.grayA}
                name="edit"
                title="Settings" />
    ) on the top navigation bar of the extension. To declare a facet, hover your mouse over the webpage and select elements of interest by selecting on them. By selecting on the display/hide button
    (<Icon
                iconWidth="20"
                iconHeight="15"
                fill={color.grayA}
                name="eye-outline"
                title="Settings" />)
        next to each facet, you can toggle it.
        You can rename and delete a facet by selecting on the menu button (
    <Icon
                iconWidth="20"
                iconHeight="15"
                fill={color.grayA}
                name="more-vertical-outline"
                title="Settings" />).

    To create a new facet, select the add button (
    <Icon
                iconWidth="20"
                iconHeight="15"
                fill={color.grayA}
                name="plus-circle-outline"
                title="Settings" />)
    button at the bottom right corner of the extension.  To save your configuration, select the save button (
    <Icon
                iconWidth="20"
                iconHeight="15"
                fill={color.grayA}
                name="save-outline"
                title="Settings" />) on the top navigation bar of the extension.
    <br />
            <br />
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>
                <figure>
                    <img width='100%' src='../../images/declare_facet_docs.png' />
                    <figcaption><i>Using the facet extension</i></figcaption>
                </figure>
            </div>
        </FacetParagraph>
    </>
}

export default facetDeclaration;