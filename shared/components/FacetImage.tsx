import React from 'react';

const FacetImage = (props) => {
    const aElement = props.href ? <a href={props.href} > <img {...props} />
    </a> :
        <>
            <img {...props} />
        </>;
    return aElement
}

export default FacetImage;