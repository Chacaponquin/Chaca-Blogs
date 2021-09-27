import React from "react";
import "../../css/styleLanNav.css";
import { useHistory } from "react-router-dom";

const LandingNavBar = () => {
  const history = useHistory();

  return (
    <>
      <div id="landingNavBar-container">
        <div id="landingNavBar-image">
          <img src="../img/Logos/20210704_140043.png" alt="" />
        </div>
        <div id="landingNavBar-botons">
          <input
            type="button"
            value="Login"
            className="landingNavBar-button"
            onClick={() => history.push("/signIn")}
          />
          <input
            type="button"
            value="Sign In"
            className="landingNavBar-button"
            onClick={() => history.push("/login")}
          />
        </div>
      </div>
    </>
  );
};

export default LandingNavBar;
