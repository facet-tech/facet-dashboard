import React from "react";
import Admin from "../layouts/Admin.js";
import PaginatedTable from '../components/PaginatedTable';
function Dashboard() {

  return (
    <div>
      <h2>Active Workspace domains</h2>
      <PaginatedTable />
    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
