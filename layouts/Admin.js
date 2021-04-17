import React from "react";
import { useRouter } from "next/router";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "../components/Navbars/Navbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import routes from "../routes.js";
import styles from "../assets/jss/nextjs-material-dashboard/layouts/adminStyle.js";
import logo from "../assets/img/facet_logo_combo.svg";
import AppProvider from "../context/AppProvider";
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: calc(100% - 260px) !important;
  overflow: auto;
  position: relative;
  float: right;
  maxHeight: 100%;
  width: 100%;
  overflowScrolling: touch;
  overflow-x: hidden;
`;

let ps;

export default function Admin({ children, ...rest }) {
  // used for checking current route
  const router = useRouter();
  // styles
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [color, setColor] = React.useState("white");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getRoute = () => {
    return router.pathname !== "/admin/maps";
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return (
    <AppProvider>
      <div className={classes.wrapper}>
        <Sidebar
          routes={routes}
          logo={logo}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color={color}
          {...rest}
        />
        <StyledDiv ref={mainPanel}>
          <Navbar
            routes={routes}
            handleDrawerToggle={handleDrawerToggle}
            {...rest}
          />

          <div style={{ marginTop: '7rem' }}>
            <div>{children}</div>
          </div>

        </StyledDiv>
      </div>
    </AppProvider>
  );
}
