import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import { color as colorConstant } from '../../shared/constant.js';

interface FacetLinkProps {
    text: string;
    fontSize: string;
    underline: 'none' | 'hover' | 'always';
    color: string;
    onClick: any
};

const FacetLink: React.FC<FacetLinkProps> = ({ text, fontSize = "small", underline = 'none', color = colorConstant.white, onClick }) => {
    return <Typography display="inline" style={{ fontSize }}>
        <Link underline={underline} style={{ color }} href="#" onClick={() => onClick ? onClick() : {}}>{text}</Link>
    </Typography>
}

export default FacetLink;