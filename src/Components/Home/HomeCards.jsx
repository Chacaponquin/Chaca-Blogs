import React from "react";

const HomeCards = ({ handleRedirect }) => {
  return (
    <>
      <div id="home-cards-section">
        <div className="home-card">
          <div className="home-card-img">
            <img src="../img/Logos/undraw_Select_option_re_u4qn.png" alt="" />
          </div>
          <div className="home-card-container">
            <h3 style={{ fontSize: "14px" }}>¿Quieres ver mas categorias?</h3>
            <input type="button" value="Categories" onClick={handleRedirect} />
          </div>
        </div>
        <div className="home-card">
          <div className="home-card-img">
            <img src="../img/Logos/undraw_Profile_re_4a55.png" alt="" />
          </div>
          <div className="home-card-container">
            <h3 style={{ fontSize: "17px" }}>¿Ya has visto tu perfil?</h3>
            <input type="button" value="My Profile" onClick={handleRedirect} />
          </div>
        </div>
        <div className="home-card">
          <div className="home-card-img">
            <img src="../img/Logos/undraw_Reading_re_29f8.png" alt="" />
          </div>
          <div className="home-card-container">
            <h3 style={{ fontSize: "17px" }}>¿Alguna duda?</h3>
            <input type="button" value="Contactanos" onClick={handleRedirect} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
