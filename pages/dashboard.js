import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Admin from "../layouts/Admin.js";
import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Dashboard() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
      <h2>API Usage per Workspace domains</h2>
      <h2></h2>
      <ul>
        <li> <a href='https://facet.run'>https://facet.run</a> : 1242 Requests</li>
      </ul>
    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
