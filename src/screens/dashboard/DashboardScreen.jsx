import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from '../../components/sidebar/Sidebar';
import User from './sidescreen/user/User';

const DashboardScreen = () => {
  return (
    <div>
      <Sidebar/>
      <Routes>
        {/* <Route path="/dashboard" element={}/>
        <Route path="/billing" element={}/>
        <Route path="/market" element={}/> */}
        <Route path="/user" element={<User/>}/>
       {/*  <Route path="/*" element={<h1>Wrong URL</h1>}/> */}
      </Routes>
    </div>
  );
};

export default DashboardScreen;