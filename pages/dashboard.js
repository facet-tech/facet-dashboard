import React, { useEffect, useState } from "react";
import Admin from "../layouts/Admin.js";
import { getUser, getDomains } from '../services/facetApiService';
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
