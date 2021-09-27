import React, { useEffect, useState } from "react";
import NavBarLoged from "../NavBars/NavBarLoged";

const ViewPostHeader = ({ postFound, handleLike, activeProfile }) => {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (postFound.liked) {
      setLiked(postFound.liked.includes(activeProfile._id));
    }
  }, [activeProfile, postFound]);

  return (
    <>
      <div id="article-navAndTitle">
        <div id="navAndTitle-background"></div>
        <img
          id="article-navAndTitle-image"
          src={`../${postFound.picture}`}
          alt=""
        />
        <NavBarLoged />
        <div id="article-title">
          <h1>{postFound?.title}</h1>
          <p id="title-content">{postFound?.resume}</p>
          <div id="article-content-information">
            <div id="information-left">
              <p>Written by: {postFound?.creator}</p>
            </div>
            <div id="information-like-button">
              <input
                type="button"
                value="Like"
                onClick={handleLike}
                className={liked === true ? "likedOption" : "dislikedOption"}
              />
              <h3>{postFound?.liked?.length}</h3>
            </div>
            <div id="information-visits">
              <h3>Visits: {postFound?.visits}</h3>
            </div>
            <div id="information-right">
              <p>Published in: {postFound.date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPostHeader;
