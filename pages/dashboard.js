import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Admin from "../layouts/Admin.js";
import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Dashboard() {
  const useStyles = makeStyles(styles);

  return (
    <div>
      <h2>API Usage per Workspace domains</h2>
    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
