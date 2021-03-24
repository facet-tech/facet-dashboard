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
    path: "/applications",
    name: "Applications",
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
  frontend: {
    path: '/dashboard',
    title: 'Frontend Domains'
  },
  applications: {
    path: '/projects',
    title: 'Projects'
  },
  backendSettings: {
    path: '/applications/settings',
    title: 'Backend Settings'
  },
}

const getByPath = (path) => {
  const val = Object.keys(pathRoutes)?.find(key => pathRoutes[key].path === path);
  return pathRoutes[val];
}

export { pathRoutes, getByPath };

export default dashboardRoutes;
