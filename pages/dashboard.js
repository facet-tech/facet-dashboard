import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Admin from "../layouts/Admin.js";
import styles from "../assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";
import { getUser } from '../services/facetApiService';
function Dashboard() {
  const useStyles = makeStyles(styles);
  const [workspaceDomains, setWorkspaceDomains] = useState([]);

  useEffect(() => {
    (async () => {
      const userResponse = await getUser();
      console.log('CHECK', userResponse);
      const { whitelistedDomain } = userResponse?.response?.attribute || [];
      setWorkspaceDomains(whitelistedDomain);
    })()

  }, []);

  return (
    <div>
      <h2>Active Workspace domains</h2>
      {workspaceDomains?.map(domain => {
        return <li>
          {domain}
        </li>
      })}

    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
