import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { SidebarContextProvider } from './contexts/SidebarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <AuthContextProvider>
    <SidebarContextProvider>
      <Router>
        <App />
      </Router>
    </SidebarContextProvider>
  </AuthContextProvider>
);

reportWebVitals();