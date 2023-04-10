import "./sidebar.scss";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2SharpIcon from '@mui/icons-material/Inventory2Sharp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'; 
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from "react-router-dom";
import { useContext } from "react";
import {DarkModeContext} from "../../context/darkModeContext"

const Sidebar = () => {
  const{dispatch}=useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">smpadmin</span>
        </Link>
      </div>
      <hr/>
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
          <Link to="/" style={{textDecoration:"none"}}>
          <li>
            <SpaceDashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
            <Link to="/users" style={{textDecoration:"none"}}>
          <li>
            <PersonIcon className="icon"/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/hotels" style={{textDecoration:"none"}}>
          <li>
            <StoreIcon className="icon"/>
            <span>Hotels</span>
          </li>
          </Link>
          <Link to="/rooms" style={{textDecoration:"none"}}>
          <li>
            <StoreIcon className="icon"/>
            <span>Rooms</span>
          </li>
          </Link>
          <li>
            <Inventory2SharpIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon"/>
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <ArticleIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
      </div>
    </div>
  );
};

export default Sidebar;
