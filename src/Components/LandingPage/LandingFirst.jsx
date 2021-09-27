import React from "react";
import { useHistory } from "react-router-dom";
import LandingNavBar from "../NavBars/LandingNavBar";

const LandingFirst = () => {
  const history = useHistory();

  return (
    <>
      <div id="landingFirst">
        <LandingNavBar />
        <div id="content-hero">
          <div id="landing-left-part">
            <div id="content-hero-text">
              <h1>¿Listo para escribir?</h1>
              <p>
                Si tienes alguna idea que puedas plasmar en palabras este es tu
                sitio
              </p>
              <input
                type="button"
                value="Get Started"
                onClick={() => history.push("/login")}
              ></input>
            </div>
          </div>
          <div id="landing-right-part">
            <img src="../img/Logos/2.jpg" alt="" />
          </div>
          <div id="purple-circle"></div>
          <div id="orange-circle"></div>
          <div id="turquoise-circle"></div>
        </div>
      </div>
    </>
  );
};

export default LandingFirst;
