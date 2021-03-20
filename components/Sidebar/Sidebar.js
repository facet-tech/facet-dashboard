import React, { useContext } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import AdminNavbarLinks from "../../components/Navbars/AdminNavbarLinks.js";
import RTLNavbarLinks from "../../components/Navbars/RTLNavbarLinks.js";
import styles from "../../assets/jss/nextjs-material-dashboard/components/sidebarStyle.js";
import { Divider } from "@material-ui/core";
import styled from 'styled-components';
import { color as colorConstant } from "../../shared/constant.js";
import AppContext from "../../context/AppContext";

const StyledListItem = styled(ListItem)`
    color: ${colorConstant.white};
`;

const StyledList = styled(List)`
    margin-top: 20px;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 0;
    list-style: none;
    position: unset;
`;

const StyledDrawer = styled(Drawer)`
    box-shadow: none;
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    display: block;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center center;
    color: ${colorConstant.white};
    
    & > div {
      background-color: ${colorConstant.blackDashboard};
      ${'' /* color: ${color.white}; */}
    }
    
    &:after: {
      position: absolute;
      z-index: 3;
      width: 100%;
      height: 100%;
      content: "";
      display: block;
      background: ${colorConstant.sidebarGray};
      opacity: .8;
    }
`;

const CoreDiv = styled.div`
  background-color: ${colorConstant.black};
`;

export default function Sidebar(props) {
  const { currRoute, setCurrRoute } = useContext(AppContext);
  // used for checking current route
  const router = useRouter();
  // creates styles for this component
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  // verifies if routeName is the one active (in browser input)
  const { logoText, routes } = props;
  var links = (
    <StyledList>
      {routes.map((prop, key) => {
        return (
          <Link href={prop.path} key={key} >
            <a onClick={() => {
              setCurrRoute(prop.path);
            }}>
              <StyledListItem style={{
                paddingLeft: '4rem',
                paddingRight: '4rem',
                color: currRoute === prop.path ? colorConstant.white : colorConstant.sidebarGray
              }}>
                {typeof prop.icon === "string" ? (
                  <Icon>
                    {prop.icon}
                  </Icon>
                ) : (
                  <prop.icon
                  />
                )}
                <ListItemText
                  primary={prop.name}
                  disableTypography={true}
                  style={{ marginLeft: '.5rem' }}
                />
              </StyledListItem>
            </a>
          </Link>
        );
      })}
    </StyledList>
  );
  var brand = (
    <div className={classes.logo}>
      <div className={classes.logoImage}>
        <img src='../images/facet_logo_combo.svg' alt="logo" className={classes.img} />
      </div>
      {logoText}
    </div>
  );

  return (
    <CoreDiv >
      <Hidden mdUp implementation="css">
        <StyledDrawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <br />
          <Divider />
          <div className={classes.sidebarWrapper}>
            {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
            {links}
          </div>
        </StyledDrawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <StyledDrawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
        >
          {brand}
          <br />
          <div>{links}</div>
        </StyledDrawer>
      </Hidden>
    </CoreDiv>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf([
    "white",
    "purple",
    "blue",
    "green",
    "orange",
    "red",
  ]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};
