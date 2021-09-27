import React from "react";

import CreatePublish from "./CreatePublish";

const LandingThird = ({ randomPosts }) => {
  return (
    <>
      <div id="landingThird">
        <h1>Some Works</h1>
        <div id="landingThird-images">
          {randomPosts &&
            randomPosts.map((el) => (
              <CreatePublish key={el._id} publish={el} />
            ))}
        </div>
        <div id="red-circle"></div>
        <div id="grey-circle"></div>
      </div>
    </>
  );
};

export default LandingThird;
