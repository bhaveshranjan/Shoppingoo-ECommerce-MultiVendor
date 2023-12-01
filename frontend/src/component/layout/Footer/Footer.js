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

        <p>Copyrights 2023 &copy; Chirag Kumar</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us On</h4>
        <a href="https://www.instagram.com/m.r_.bean/">Instagram</a>
        <a href="http://youtube.comr">Youtube</a>
        <a href="https://www.facebook.com/chirag.kumar.900388/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
