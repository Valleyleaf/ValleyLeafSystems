import React from "react";
import {Link, useLocation} from 'react-router-dom'
import '../assets/css/Navbar.css'

export default function Navbar(){
    const currentPage = useLocation().pathname;

    const handleLinkClick = (event) => {
      document.querySelectorAll('nav').forEach(link => {
        link.className.remove('nav-active');
      });
      event.target.className.add('nav-active');
    };
    return(
        <div className="NavClass">
                <Link
                to="/"
                className="navButton"
                >
                Our Work
                </Link>

                <Link
                to="/Contact"
                className="navButton"
                >
                Contact
                </Link>

                <Link
                to="/Contact"
                className="navButton"
                >
                Services
                </Link>
        </div>
    );
};