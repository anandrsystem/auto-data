import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-nav">
          <ul>
            <li> <a href="#"> View Disclamer </a> </li>
            <li> <a href="#"> View privacy policy </a> </li>
            <li> <a href="#"> view Analytics Policy </a> </li>
          </ul>
        </div>
        <div className="provided">
          <div> Provided By </div>
          <div className="marginT15 f-logo">
            <img src="../src/assets/images/logo_white.svg" />
          </div>
        </div>
      </footer>
    </div>
  )
}
    
export default Footer;
