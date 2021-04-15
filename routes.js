import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import PaymentIcon from '@material-ui/icons/Payment';
import DnsIcon from '@material-ui/icons/Dns';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuBookIcon from '@material-ui/icons/MenuBook';

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
    path: "/documentation",
    name: "Documentation",
    icon: MenuBookIcon,
    layout: "",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: SettingsIcon,
    layout: "",
  }
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
  documentation: {
    path: '/documentation',
    title: 'Documentation'
  },
  applications: {
    path: '/applications',
    title: 'Applications'
  },
  backendSettings: {
    path: '/settings',
    title: 'Settings'
  },
}

const getByPath = (path) => {
  const val = Object.keys(pathRoutes)?.find(key => pathRoutes[key].path === path);
  // default case
  if (!val || !pathRoutes[val]) {
    return pathRoutes.applications
  }
  return pathRoutes[val];
}

export { pathRoutes, getByPath };

export default dashboardRoutes;
