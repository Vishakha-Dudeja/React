import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import logo from '../../logo.svg';
import { Menubar } from 'primereact/menubar';


export default function Navbar(props) {
    const start = <img src={logo} className="Navbar-logo" alt="logo"></img>;
    return (
        <div>
            <Menubar model={props.navList} start={start}/>
        </div>
    )
}

Navbar.propTypes = {
    navList: PropTypes.array
}

Navbar.defaultProps = {
    navList: [],
}