/*eslint-disable*/
import React from "react";
import classNames from "classnames";
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
import FacetDivider from '../../shared/components/FacetDivider';
import styled from 'styled-components';
import { color } from "../../shared/constant.js";

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
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    display: block;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center center;
    
    &:after: {
      position: absolute;
      z-index: 3;
      width: 100%;
      height: 100%;
      content: "";
      display: block;
      background: ${color.sidebarGray};
      opacity: .8;
    }
`;

export default function Sidebar(props) {
  // used for checking current route
  const router = useRouter();
  // creates styles for this component
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return router.route.indexOf(routeName) > -1 ? true : false;
  }
  const { color, logoText, routes } = props;
  var links = (
    <StyledList>
      {routes.map((prop, key) => {
        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({

          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path),
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]:
            activeRoute(prop.layout + prop.path) ||
            prop.path === "/upgrade-to-pro",
        });
        return (
          <Link href={prop.layout + prop.path} key={key}>
            <a>
              <ListItem style={{
                paddingLeft: '4rem',
                paddingRight: '4rem',
              }}>
                {typeof prop.icon === "string" ? (
                  <Icon>
                    {prop.icon}
                  </Icon>
                ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: props.rtlActive,
                    })}
                  />
                )}
                <ListItemText
                  primary={props.rtlActive ? prop.rtlName : prop.name}
                  className={classNames(classes.itemText, whiteFontClasses, {
                    [classes.itemTextRTL]: props.rtlActive,
                  })}
                  disableTypography={true}
                />
              </ListItem>
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
    <div >
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
          <FacetDivider />
          <div>{links}</div>
        </StyledDrawer>
      </Hidden>
    </div>
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
