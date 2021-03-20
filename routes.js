import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import PaymentIcon from '@material-ui/icons/Payment';
import DnsIcon from '@material-ui/icons/Dns';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Frontend",
    icon: Dashboard,
    layout: "",
  },
  {
    path: "/backend",
    name: "Backend",
    icon: DnsIcon,
    layout: "",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: Person,
    layout: "",
  },
  {
    path: "/payment",
    name: "Payment",
    icon: PaymentIcon,
    layout: "",
  },
];

const pathRoutes = {
  dashboard: 'dashboard',
  backend: 'backend',
}

export { pathRoutes };

export default dashboardRoutes;
