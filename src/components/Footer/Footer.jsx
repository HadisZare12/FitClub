import React from 'react'
import './footer.css'
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="footer-container">
         <hr />
         <div className="footer">
            <div className="social-links">
              <img src={Github} alt="Github" />
              <img src={Instagram} alt="Instagram" />
              <img src={Linkedin} alt="Linkedin" />
            </div>
            <div className="logo-footer">
            <img src={Logo} alt="logo" />
         </div>
         </div>
         <div className="blur foot-blur-1"></div>
         <div className="blur foot-blur-2"></div>
    </div>
  )
}

export default Footer