import {React, useState} from "react";
import {Link, useLocation} from 'react-router-dom'
import '../assets/css/Navbar.css'

export default function Navbar(){
    const currentPage = useLocation().pathname;
    const [isOpen, setIsOpen] = useState(true);
    const handleLinkClick = (event) => {
      document.querySelectorAll('nav').forEach(link => {
        link.className.remove('nav-active');
      });
      event.target.className.add('nav-active');
    };
    return(

      <div className="flex-container-row">
            <div className={`NavClass ${isOpen ? "Open" : "closed"}`}>
                <Link
                to="/"
                className="navButton"
                >
                Services
                </Link>

                <Link
                to="/Contact"
                className="navButton"
                >
                Contact
                </Link>

                <Link
                to="/"
                className="navButton"
                >
                Our Promise
                </Link>
        </div>
                <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? "✖" : "☰"}
                </button>
      </div>
    );
};