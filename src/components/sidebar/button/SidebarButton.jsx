import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarButton.scss'

const SidebardButton = ({route, children}) => {
    return (
        <Link to={route}>
            {children}
        </Link>
    );
};

export default SidebardButton;