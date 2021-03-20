import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/icons/Menu";
// core components
import TopBar from '../../components/TopBar';
import styled from 'styled-components';
import { color } from "../../shared/constant.js";

const StyledAppBar = styled(AppBar)`
    box-shadow: none;
    border-bottom: 0;
    margin-bottom: 0;
    position: absolute;
    padding-top: 10px;
    z-index: 1029;
    border: 0;
    borderRadius: 3px;
    padding: 10px 0;
    transition: all 150ms ease 0s;
    minHeight: 50px;
    display: block;
`;

const StyledDiv = styled.div`
 flex: 1;
`;

export default function Header(props) {
  return (
    <StyledAppBar style={{ background: color.black, width: '86.5%' }}>
      <Toolbar>
        <StyledDiv>
          <TopBar />
        </StyledDiv>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </StyledAppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};