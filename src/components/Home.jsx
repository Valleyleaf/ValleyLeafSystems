import React from "react";
import about from '../assets/JSON/about.json'
import gridImg1 from '../assets/img/SJshot.jpg'
import '../assets/css/Home.css'


export default function Home(){
    return(
        <div className="homeClass">
            <div>
                <h2 className="articleTitle">Let's</h2>
                <h2 className="articleTitle2">Get</h2>
                <h2 className="articleTitle">Started</h2>
            </div>

            <div className="articleGrid">
                <div className="article">
                    <div>
                    <h2>{about.title}</h2>
                    </div>
                    <div>
                        {about.about}
                    </div>
                </div>

            <img className="gridImage" src={about.img} alt="logo" />

            <img className="gridImage" src={about.img1} alt="logo" />
                <div className="article">
                <h2>{about.title2}</h2>
                {about.about2}
                </div>

                <div className="article">
                <h2>{about.title3}</h2>
                {about.about3}
                </div>

                <img className="gridImage" src={about.img2} alt="logo" />
            </div>
        </div>
    );
};