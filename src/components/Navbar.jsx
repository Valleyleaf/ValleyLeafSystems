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
            <div>
                <Link
                to="/"
                className="navButton"
                >
                Our Work
                </Link>
            </div>

            <div>
                <Link
                to="/Contact"
                className="navButton"
                >
                Contact
                </Link>
            </div>
        </div>
    );
};