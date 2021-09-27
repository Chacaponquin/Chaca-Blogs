import React from "react";
import "../../css/styleFooter.css";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <p>© 2021 Chaca-Blogs. All rights reserved</p>
        <div id="footer-image">
          <img src="../img/Logos/20210704_140043.png" alt="" />
        </div>
        <div id="footer-redes">
          <div className="redes-footer">
            <img src="../img/Logos/facebook-circle-logo-24.png" alt="" />
          </div>
          <div className="redes-footer">
            <img src="../img/Logos/instagram-alt-logo-24.png" alt="" />
          </div>
          <div className="redes-footer">
            <img src="../img/Logos/twitter-logo-24.png" alt="" />
          </div>
          <div className="redes-footer">
            <img src="../img/Logos/youtube-logo-24.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
