import React from "react";
import { useHistory } from "react-router-dom";

const CreatePublish = ({ publish }) => {
  let history = useHistory();

  const handleRedirect = () => {
    history.push(`/view/${publish._id}`);
  };

  return (
    <>
      <div
        className="random-publish-container"
        id={publish?._id}
        onClick={handleRedirect}
      >
        <div
          className="randomPublish-container"
          style={{ backgroundImage: `url(../${publish?.picture})` }}
        >
          <div className="publish-information">
            <h2>{publish.title}</h2>
            <p>{publish.resume}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePublish;
