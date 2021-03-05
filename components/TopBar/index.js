import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Auth } from 'aws-amplify';
import Router from "next/router";

const CoreDiv = styled.div`
    display: grid;
    grid-template-columns: 100%;
    justify-content: end;
    width: 100%;
    text-align: end;
`;

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 40% 40%;
    grid-gap: 3%;
    width: 8rem;
    margin-left: auto; 
    margin-right: 0;
`;

const TopBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [notificationAnchorEl, setNotificationAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNotificationClick = (event) => {
        setNotificationAnchorEl(event.currentTarget);
    };

    const handleNotificationClose = () => {
        setNotificationAnchorEl(null);
    };

    return <CoreDiv>
        <StyledDiv>
            <div>
                <IconButton
                    onClick={handleNotificationClick}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <NotificationsIcon />
                </IconButton>
                <Menu
                    id="notification-menu"
                    anchorEl={notificationAnchorEl}
                    keepMounted
                    open={Boolean(notificationAnchorEl)}
                    onClose={handleNotificationClose}
                >
                    <MenuItem>
                        No new notifications found.
                    </MenuItem>
                </Menu>
            </div>
            <div>
                <IconButton
                    onClick={handleClick}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <PersonIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={async () => {
                        await Auth.signOut();
                        Router.push("/authentication");
                    }}
                    >Logout</MenuItem>
                </Menu>
            </div>

        </StyledDiv>
    </CoreDiv>
}

export default TopBar;