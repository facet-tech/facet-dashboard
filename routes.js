import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import WebIcon from '@material-ui/icons/Web';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: Person,
    layout: "/admin",
  },
  {
    path: "/projects",
    name: "Projects",
    icon: WebIcon,
    layout: "/admin",
  },
];

export default dashboardRoutes;
