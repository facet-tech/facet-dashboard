import React, { useContext, useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppContext from '../../context/AppContext';
import { withStyles } from '@material-ui/core';
import { color } from '../constant';

const StyledMenu = withStyles({
    paper: {
        backgroundColor: color.lightGray,
        marginLeft: '2rem',
        padding: 0,
    }
})((props) => (
    <Menu
        MenuListProps={{ disablePadding: true }}
        getContentAnchorEl={null}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        border: '1px solid ' + color.menuDivider,
        '&:focus': {
            backgroundColor: color.lightGray,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: color.ice,
            },
        },
    },
}))(MenuItem);

export default function FacetMenu({ anchor }) {
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);

    const handleCloseMenuEl = () => {
        setMenuAnchorEl(null);

    }

    return (
        <div>
            <StyledMenu
            >
                <StyledMenuItem >dwdad </StyledMenuItem>
                <StyledMenuItem >Rename</StyledMenuItem>
                <StyledMenuItem >Delete</StyledMenuItem>
            </StyledMenu>
        </div>
    );
}