import React from 'react';
import { logout } from '../../store/AccessTokenStore';
import SidebarButton from './button/SidebarButton';
import './Sidebar.scss'

const Sidebar = () => {
  const handleLogOut = () => {logout()}

  return (
    <aside className="container">
      <h1>Lumio</h1>
      <div className="buttons">
        <ul className="dashboardButtons">
          <li><SidebarButton route={"/"}>Dashboard</SidebarButton></li>
          <li><SidebarButton route={"/contracts"}>Contracts</SidebarButton></li>
          <li><SidebarButton route={"/billing"}>Billing</SidebarButton></li>
          <li><SidebarButton route={"/market"}>Market</SidebarButton></li>
        </ul>
        <ul className="userButtons">
          <li><SidebarButton route={"/user"}>User</SidebarButton></li>
          <li><a href='null' onClick={handleLogOut}>Logout</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;