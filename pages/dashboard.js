import React from "react";
import Admin from "../layouts/Admin.js";
import PaginatedTable from '../components/PaginatedTable';
import styled from 'styled-components';
import { color } from "../shared/constant.js";

const StyledH2 = styled.h2`
  color: ${color.white};
`
function Dashboard() {

  return (
    <div>
      <StyledH2>Active Workspace domains</StyledH2>
      <PaginatedTable />
    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
