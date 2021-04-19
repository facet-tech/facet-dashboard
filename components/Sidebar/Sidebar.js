import React, { useContext } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import styles from "../../assets/jss/nextjs-material-dashboard/components/sidebarStyle.js";
import styled from 'styled-components';
import { color as colorConstant } from "../../shared/constant.js";
import AppContext from "../../context/AppContext";
import { getByPath } from "../../routes.js";

const StyledListItem = styled(ListItem)`
    color: ${colorConstant.white};
`;

const StyledList = styled(List)`
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
    height: 100%;
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
              const val = getByPath(prop.path);
              setCurrRoute(val);
            }}>
              <StyledListItem style={{
                paddingLeft: '4rem',
                paddingRight: '4rem',
                color: currRoute?.path === prop.path ? colorConstant.white : colorConstant.sidebarGray
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
        <img src="/images/facet_logo_combo.svg" alt="logo" className={classes.img} />
      </div>
      {logoText}
    </div>
  );

  return (
    <CoreDiv >
      <StyledDrawer
        variant="permanent"
        open
      >
        <div style={{
          width: '15rem'
        }}>
          {brand}
          <br />
          <div>{links}</div>
        </div>
      </StyledDrawer>
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
