import React from "react";
import about from '../assets/JSON/about.json'

import '../assets/css/Home.css'


export default function Home(){
    return(
        <div className="homeClass">
            <h2>Welcome</h2>
            <div className="article">
            {about.about}
            </div>
        </div>
    );
};