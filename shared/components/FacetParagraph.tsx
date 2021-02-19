import React from 'react';
import { color as colors, fontSize } from '../constant';

const FacetParagraph = ({ text = null, color = colors.black, fontSize = 'medium', children = null }) => {
    return <span
        style={{
            width: '100%',
            color,
            fontSize,
            fontFamily: 'Manrope',
            lineHeight: '168.1%'

        }}
    >
        {text}
        {children}
    </span>
}

export default FacetParagraph;