import React from "react";
import { Link, useLocation } from 'react-router-dom';
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
                <h2 className="title pushDown">ValleyLeaf</h2>
                <h2 className="title2">Systems</h2>
                <p className="flavorText">
                  <span>Supporting Small Business Development</span> 
                  <span>in Saint John, NB.</span>
                </p>
        </Link>
        </div>
    );
};