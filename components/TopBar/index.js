import React, { useContext } from 'react';
import styled from 'styled-components';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Auth } from 'aws-amplify';
import Router from "next/router";
import { color } from '../../shared/constant';
import FacetIconButton from '../../shared/components/FacetIconButton';
import AppContext from '../../context/AppContext';

const CoreDiv = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: end;
    width: 100%;
    text-align: end;
    height: 5rem;
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
    const { currRoute } = useContext(AppContext);

    const accountClick = (event) => {
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
    return <div>
        <CoreDiv>
            <div style={{
                justifySelf: 'start'
            }}>
                <h4>{currRoute.title}</h4>
            </div>
            <StyledDiv>
                <div>
                    <FacetIconButton
                        iconWidth="25"
                        iconHeight="25"
                        title="Notifications"
                        fill={color.white}
                        name="bell"
                        onClick={handleNotificationClick}
                    />
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
                    <FacetIconButton
                        iconWidth="25"
                        iconHeight="25"
                        title="Account"
                        fill={color.white}
                        name="person"
                        onClick={accountClick}
                    />
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
    </div>
}

export default TopBar;