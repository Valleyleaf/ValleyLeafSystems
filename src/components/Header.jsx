import React from "react";
import { Link, useLocation } from 'react-router-dom';
import about from '../assets/JSON/about.json'
import logo from '../assets/img/logo.svg'
import '../assets/css/Header.css'

export default function Header(){
    const currentPage = useLocation().pathname;
    
    const handleLinkClick = (event) => {
      document.querySelectorAll('nav').forEach(link => {
        link.className.remove('nav-active');
      });
      event.target.className.add('nav-active');
    };
    return(
        <div className="flex-container-row headerClass">
        <Link
          to="/"
          className="logo"
          onClick={handleLinkClick}
        >
                <img src={logo} alt="Logo" />
                <div className="logoText">
                  <h2 className="title pushDown">ValleyLeaf</h2>
                  <h2 className="title2">IT_Consulting</h2>
                  <p className="flavorText">
                    <span>Supporting Local Businesses in Saint John, NB.</span> 
                  </p>
                </div>
        </Link>
        <div className="headerContact">
          <p id="phonenumber">(506)608-8782</p>
          <p id="email">ValleyLeafSystems@gmail.com</p>

            <div className="flex-container-row center-content">
            <p>Proudly Canadian</p>
            <img className="Canlogo" src={about.Canlogo} alt="Canadian Flag Image" />
            </div>
        </div>
        </div>
        
    );
};