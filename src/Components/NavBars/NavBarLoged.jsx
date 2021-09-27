import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import ProfileContext from "../../context/ProfileContext";
import SectionContext from "../../context/SectionContext";
import "../../css/styleNavBarLoged.css";
import NavigationBar from "./NavigationBar";

const NavBarLoged = ({ background }) => {
  let history = useHistory();
  const { activeProfile, setActiveProfile } = useContext(ProfileContext);
  const { setSectionOpen } = useContext(SectionContext);
  const [openBar, setOpenBar] = useState(false);

  const handleRedirect = (e) => {
    if (e.target.value === "New") {
      setSectionOpen("");
      history.push("/createPost");
    }
  };

  const handleOpenBar = () => {
    if (openBar) {
      setOpenBar(false);
    } else {
      setOpenBar(true);
    }
  };

  return (
    <>
      <div id="navBar-container" style={{ background: background }}>
        <div id="navBar-image">
          <img
            src="../img/Logos/20210704_140043.png"
            alt=""
            id="chacaBlogs-logo"
            onClick={handleOpenBar}
          />
        </div>
        <div id="navBar-options">
          <h1 id="navBar-profileName">{activeProfile.nickname}</h1>
        </div>
        <div id="navBar-botons">
          <input
            type="button"
            value="New"
            className="navBar-button"
            onClick={handleRedirect}
          />
        </div>
      </div>
      <NavigationBar
        openBar={openBar}
        handleOpenBar={handleOpenBar}
        setOpenBar={setOpenBar}
        history={history}
        setActiveProfile={setActiveProfile}
      />
    </>
  );
};

export default NavBarLoged;
