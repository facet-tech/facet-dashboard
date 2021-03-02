import React from 'react';
import { color as colors } from "../constant";

const FacetLabel = ({ text, width, color = colors.grayB, fontSize = 'small', fontFamily = 'Helvetica', textDecoration = "none", fontWeight = 500, backgroundColor = "none",
    border = "none", borderRadius = "none", padding = "0", paddingTop = "0", paddingBottom = "0", extraStyle = {} }) => {
    return <span
        style={{
            color,
            fontSize,
            fontFamily,
            fontWeight,
            textDecoration,
            backgroundColor,
            border,
            borderRadius,
            padding,
            paddingTop,
            paddingBottom,
            display: 'block',
            width: width ? width : '300px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            ...extraStyle
        }}
    >{text}</span>
}

export default FacetLabel;