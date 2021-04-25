import React from 'react';
import { color as colors, fontSize } from '../constant';

const FacetParagraph = ({ text = null, width = '100%', color = colors.white, fontSize = 'medium', userSelect = 'auto', children = null }) => {
    return <span
        style={{
            width,
            color,
            fontSize,
            fontFamily: 'Manrope',
            lineHeight: '168.1%',
            cursor: userSelect === 'all' ? 'pointer' : 'auto',
            // @ts-ignore
            userSelect,

        }}
    >
        {text}
        {children}
    </span>
}

export default FacetParagraph;