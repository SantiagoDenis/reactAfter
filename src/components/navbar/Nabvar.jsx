import React from 'react';
import './navbar.scss'
import { Icon } from '@iconify/react';

const Navbar = () => {
    return (
        <div className="navbar">
            <Icon className="navbar__icon" icon="logos:react" />
            <h1 className="navbar__title">Clase 7</h1>
            <Icon className="navbar__icon" icon="material-symbols:accessibility-new" color="#61dbfb" />
        </div>
    )
}

export default Navbar