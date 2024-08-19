import React from 'react';
import linkedinButton from '../assets/icons/linkedin-fill-svgrepo-com.svg'
import twitterButton from '../assets/icons/twitter-fill-svgrepo-com.svg'
import gitHubButton from '../assets/icons/github-fill-svgrepo-com.svg'
import instagramButton from '../assets/icons/instagram-fill-svgrepo-com.svg'
import '../assets/css/Footer.css'

export default function Footer(){
    return (
      <div>
          <div className='footerClass footerBG'>
            <div className='footerRow'>
            <a href="https://www.linkedin.com/in/aston-andersson-dahllof-b4310ab5/" target="_blank">
            <img className='small-img' src={linkedinButton} alt="link to linkedin" />
            </a>

            <a href="https://github.com/Valleyleaf" target="_blank">
            <img className='small-img' src={gitHubButton} alt="link to github" />
            </a>

            <a href="https://twitter.com/ValleyleafSys" target="_blank">
            <img className='small-img' src={twitterButton} alt="link to Twitter" />
            </a>

            <a href="https://www.instagram.com/kingirat/" target="_blank">
            <img className='small-img' src={instagramButton} alt="link to Instagram" />
            </a>
            </div>
          <h4>Aston Andersson Dahllof 2024 &#169;</h4>
          </div>
      </div>
    );
  }