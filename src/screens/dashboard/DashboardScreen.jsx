import React from 'react';
import { Route, Routes } from "react-router-dom";
import Sidebar from '../../components/sidebar/Sidebar';

const DashboardScreen = () => {
  return (
    <div>
      <Sidebar/>
      {/* <Routes>
        <Route path="/dashboard" element={}/>
        <Route path="/billing" element={}/>
        <Route path="/market" element={}/>
        <Route path="/user" element={}/>
      </Routes> */}
    </div>
  );
};

export default DashboardScreen;