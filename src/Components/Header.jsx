import React from 'react';
import logo from '../img/logo.png';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="logo-div">
                <img src={logo} alt="logo of Calculator" className="logo"/>
                <h1>Temperature <br/>Calculator</h1>
            </div>
            <p className="explanation">This tool helps anyone who wants to transform temperatures from Celsius to Fahrenheit 
                and vice versa quickly. Especially useful in these times of COVID-19.</p>
        </header>
    )
}

export default Header
