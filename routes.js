import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import WebIcon from '@material-ui/icons/Web';
import PaymentIcon from '@material-ui/icons/Payment';

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
    path: "/payment",
    name: "Payment",
    icon: PaymentIcon,
    layout: "/admin",
  },
];

export default dashboardRoutes;
