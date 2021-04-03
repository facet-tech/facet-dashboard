import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import styled from 'styled-components';

const StyledImg = styled.img`
    cursor: -moz-zoom-in;
    cursor: -webkit-zoom-in;
    cursor: zoom-in;
`

const FacetLightboxImage = ({ width = '100%', src, captionText = undefined }) => {
    const [open, setOpen] = useState(false);

    return <>
        <figure>
            <StyledImg onClick={() => { setOpen(true) }} width={width} src={src} />
            {captionText ? <figcaption><i>{captionText}</i></figcaption> : null}
        </figure>
        {open ? <Lightbox
            mainSrc={src}
            onCloseRequest={() => setOpen(false)}
        /> : null}
    </>
}

export default FacetLightboxImage;