import React from 'react';
import './TopBar.scss'
import { MdMenu } from 'react-icons/md';
import { IconContext } from "react-icons";

const TopBar = () => {
  return (
    <div className='top-bar'>
      <button className='menu-toggle'><MdMenu /></button>
      <div className='utilities'>
        <button className='settings'>boton</button>
        <button className='notifications'>boton</button>
        <button className='user'>boton</button>
      </div>  
    </div>
  );
};

export default TopBar;