import React from 'react';
import styled from 'styled-components';
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from '@material-ui/icons/Notifications';

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
    return <CoreDiv>
        <StyledDiv>
            <div>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                >
                    <PersonIcon />
                </IconButton>
            </div>
            <div>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                >
                    <NotificationsIcon />
                </IconButton>
            </div>

        </StyledDiv>
    </CoreDiv>
}

export default TopBar;