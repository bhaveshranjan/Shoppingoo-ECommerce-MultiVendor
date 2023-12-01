import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
       
        
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>SHOPINGOOO.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; Bhavesh Ranjan</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us On</h4>
        <a href="https://www.linkedin.com/in/bhaveshranjan/">LinkedIn</a>
        <a href="https://github.com/bhaveshranjan">GitHub</a>
        <a href="https://bhaveshranjan.github.io/Bhavesh-s-Portfolio/">Portfolio</a>
      </div>
    </footer>
  );
};

export default Footer;
