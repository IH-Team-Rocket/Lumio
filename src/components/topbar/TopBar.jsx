import React from 'react';
import './TopBar.scss'
import { MdMenu, MdSettings, MdNotificationsNone, MdAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className='top-bar'>
      <div className='topbar-logo-container'><MdMenu  className='topbar-logo'/></div>
      <div className='utilities'>
        <div className='topbar-logo-container'><MdSettings  className='topbar-logo'/></div>
        <div className='topbar-logo-container notifications'><MdNotificationsNone  className='topbar-logo'/></div>
        <div className='topbar-logo-container'><Link to={"/user"}><MdAccountCircle className='topbar-logo'/></Link></div>
      </div>  
    </div>
  );
};

export default TopBar;