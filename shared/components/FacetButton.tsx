import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { color } from '../constant';
import styled from 'styled-components';

const useStyles = makeStyles(() => ({ root: {} }));

const defaultColorBtnStyle = {
    color: color.black,
    backgroundColor: color.white,
    hoverBgColor: color.electricB,
    border: 'none'
};

export const primaryBtnColor = {
    color: color.white,
    backgroundColor: color.primary,
    hoverBgColor: color.primary,
    border: `${defaultColorBtnStyle.border}`
};

export const secondaryBtnColor = {
    color: color.primary,
    backgroundColor: color.secondaryGray,
    hoverBgColor: color.secondaryGray,
    border: `1px solid ${color.primary}`
}

export const primaryGrayBtnColor = {
    color: color.white,
    backgroundColor: color.primaryGray,
    hoverBgColor: color.primaryGray,
    border: `${defaultColorBtnStyle.border}`
};

export const electricBtnColor = {
    color: color.white,
    backgroundColor: color.electricA,
    hoverBgColor: color.electricB,
    border: `${defaultColorBtnStyle.border}`
};

// @deprecated
export const greenBtnColor = {
    color: color.black,
    backgroundColor: color.green,
    hoverBgColor: color.darkerGreen,
    border: `${defaultColorBtnStyle.border}`
}

export const whiteBtnColor = {
    color: color.black,
    backgroundColor: color.white,
    hoverBgColor: color.white,
    border: `${defaultColorBtnStyle.border}`
}

const StyledButton = styled(Button)`
    color: ${props => props.colorButtonStyle?.color}!important;
    background-color: ${props => props.colorButtonStyle?.backgroundColor}!important;
    width: ${props => props.width ? props.width : '100%'};
`;

const FacetButton = ({ onClick = () => { }, text, maxWidth = "100%", disabled = false, colorButtonStyle = defaultColorBtnStyle, minWidth = '7rem', ...props }) => {

    const classes = useStyles();
    return <div className={classes.root}>
        <StyledButton
            colorButtonStyle={colorButtonStyle}
            style={{
                width: props.width ? props.width : '100%', height: '2.5rem', borderRadius: 0,
                minWidth, maxWidth, border: colorButtonStyle.border, textTransform: 'none'
            }}
            variant="contained"
            disabled={disabled}
            onClick={() => { if (onClick) { onClick() } }}
            size="small"
            {...props}>
            {text}
        </StyledButton>
    </div >
}

export default FacetButton;