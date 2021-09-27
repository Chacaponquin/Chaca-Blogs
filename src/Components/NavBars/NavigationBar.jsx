import React, { useContext } from "react";
import SectionContext from "../../context/SectionContext";
import "../../css/styleNavigationBar.css";

const NavigationBar = ({
  openBar,
  setOpenBar,
  handleOpenBar,
  history,
  setActiveProfile,
}) => {
  const { sectionOpen, setSectionOpen } = useContext(SectionContext);

  const handleChangeSection = (section, direction) => {
    setSectionOpen(section);
    setOpenBar(false);
    history.push(`/${direction}`);
  };

  const handleSignOut = () => {
    let confirm = window.confirm("¿Quieres salir de esta cuenta?");
    if (confirm) {
      setActiveProfile(false);
    }
  };

  return (
    <>
      <div
        className={
          openBar ? "navigation-bar navigation-show" : "navigation-bar"
        }
      >
        <div id="profile-information">
          <div id="profile-picture">
            <img src="../img/Logos/3.jpg" alt="" />
          </div>
          <div id="sign-out">
            <div className="sign-out-icon">
              <img
                src="../img/Logos/log-out-regular-24.png"
                onClick={handleSignOut}
                alt=""
              />
            </div>
          </div>
        </div>
        <div id="navigation-bar-options">
          <div
            className={
              sectionOpen === "Home"
                ? "navigation-bar-option navigation-bar-option-select"
                : "navigation-bar-option"
            }
            onClick={() => handleChangeSection("Home", "home")}
          >
            <img
              src={
                sectionOpen === "Home"
                  ? "../img/Logos/home-alt-regular-24-white.png"
                  : "../img/Logos/home-alt-regular-24.png"
              }
              alt=""
            />
            <p>Home</p>
          </div>
          <div
            className={
              sectionOpen === "Profile"
                ? "navigation-bar-option navigation-bar-option-select"
                : "navigation-bar-option"
            }
            onClick={() => handleChangeSection("Profile", "profileInf")}
          >
            <img
              src={
                sectionOpen === "Profile"
                  ? "../img/Logos/user-solid-24-white.png"
                  : "../img/Logos/user-solid-24 (1).png"
              }
              alt=""
            />
            <p>Profile</p>
          </div>
          <div
            className={
              sectionOpen === "Categories"
                ? "navigation-bar-option navigation-bar-option-select"
                : "navigation-bar-option"
            }
            onClick={() => handleChangeSection("Categories", "categories")}
          >
            <img
              src={
                sectionOpen === "Categories"
                  ? "../img/Logos/category-solid-24-white.png"
                  : "../img/Logos/category-solid-24.png"
              }
              alt=""
            />
            <p>Categories</p>
          </div>
          <div
            className={
              sectionOpen === "About"
                ? "navigation-bar-option navigation-bar-option-select"
                : "navigation-bar-option"
            }
            onClick={() => handleChangeSection("About", "about")}
          >
            <img
              src={
                sectionOpen === "About"
                  ? "../img/Logos/info-circle-solid-24-white.png"
                  : "../img/Logos/info-circle-solid-24.png"
              }
              alt=""
            />
            <p>About</p>
          </div>
        </div>
        <div id="navigation-bar-icon">
          <div id="navigation-bar-logo-icon">
            <img
              id="navigation-bar-image"
              src="../img/Logos/20210704_140043.png"
              alt=""
            />
          </div>
          <div id="navigation-bar-close-icon">
            <img
              src="../img/Logos/log-out-circle-solid-24.png"
              alt=""
              onClick={handleOpenBar}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
