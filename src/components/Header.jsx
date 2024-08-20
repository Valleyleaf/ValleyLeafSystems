import React from "react";
import { Link, useLocation } from 'react-router-dom';
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
        <div className="flex-container-column headerClass">
        <Link
          to="/"
          className="logo"
          onClick={handleLinkClick}
        >
                <img src={logo} alt="Logo" />
                <div className="logoText">
                  <h2 className="title pushDown">ValleyLeaf</h2>
                  <h2 className="title2">Systems</h2>
                  <p className="flavorText">
                    <span>Supporting Small Business in Saint John, NB.</span> 
                  </p>
                </div>

        </Link>
        </div>
    );
};