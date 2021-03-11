import { Icon } from '@material-ui/core'
import React, { useEffect } from 'react'
import * as eva from "eva-icons"
import { color } from '../constant'
import styled from 'styled-components'

const StyledI = styled.i`
    display: grid,
    fill: ${props => props.isSelected ? color.electricB : ''},
    "&:hover": {
        fill:  color.white
    }
`

const FacetIcon = ({ name, size = "small", fill = color.lightGray,
    isSelected = true, iconWidth, iconHeight, children = null, ...other }) => {

    useEffect(() => {
        eva.replace();
    }, [name]);

    return <Icon
        {...other}>
        <StyledI
            // @ts-ignore
            fill={fill}
            data-eva={name}
            data-eva-hover="true"
            data-eva-height={iconHeight ? iconHeight : '24'}
            data-eva-width={iconWidth ? iconWidth : '24'}
        />
        {children}
    </Icon>
}

export default FacetIcon;