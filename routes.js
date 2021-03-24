import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import PaymentIcon from '@material-ui/icons/Payment';
import DnsIcon from '@material-ui/icons/Dns';
import SettingsIcon from '@material-ui/icons/Settings';

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
  {
    path: "/applications/settings",
    name: "Settings",
    icon: SettingsIcon,
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
    title: 'Settings'
  },
  applications: {
    path: '/applications',
    title: 'Applications'
  }
}

const getByPath = (path) => {
  const val = Object.keys(pathRoutes)?.find(key => pathRoutes[key].path === path);
  return pathRoutes[val];
}

export { pathRoutes, getByPath };

export default dashboardRoutes;
