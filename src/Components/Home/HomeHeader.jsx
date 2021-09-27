import React, { useEffect } from "react";
import NavBarLoged from "../NavBars/NavBarLoged";

const HomeHeader = ({
  isMountRef,
  contador,
  categoryPosts,
  setContador,
  handleRedirect,
}) => {
  useEffect(() => {
    if (isMountRef.current === true) {
      setTimeout(() => {
        if (isMountRef.current === true) {
          setContador(contador + 1 === categoryPosts.length ? 0 : contador + 1);
        }
      }, 7000);
    }
  });

  return (
    <>
      <div id="home-header-nav">
        <div
          id="header-background"
          style={{
            backgroundImage: `url(../${categoryPosts[contador]?.picture})`,
          }}
        ></div>
        <NavBarLoged background={"rgba(0, 0, 0, 0.6)"} />
        <div id="home-header">
          <div id="home-category-information">
            <h1>{categoryPosts[contador]?.category}</h1>
          </div>
          <div id="publish-header-information">
            <div id="publish-header-div1">
              <div>
                <h1>{categoryPosts[contador]?.title}</h1>
                <p>{categoryPosts[contador]?.resume}</p>
                <input
                  type="button"
                  value="Visit"
                  id={categoryPosts[contador]?._id}
                  onClick={handleRedirect}
                />
              </div>
            </div>

            <div id="publish-header-div2">
              <img src={`../${categoryPosts[contador]?.picture}`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
