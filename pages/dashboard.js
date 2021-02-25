import React, { useEffect, useState } from "react";
import Admin from "../layouts/Admin.js";
import { getUser } from '../services/facetApiService';
function Dashboard() {
  const [workspaceDomains, setWorkspaceDomains] = useState([]);

  useEffect(() => {
    (async () => {
      const userResponse = await getUser();
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
