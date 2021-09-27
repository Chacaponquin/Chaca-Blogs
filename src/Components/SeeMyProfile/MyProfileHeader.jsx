import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import SectionContext from "../../context/SectionContext";

const MyProfileHeader = ({ activeProfile, ChangeSection }) => {
  let history = useHistory();
  const { setSectionOpen } = useContext(SectionContext);

  const handleRedirect = () => {
    setSectionOpen("");
    history.push("/editProfile");
  };

  return (
    <>
      <div id="profileBasicInf">
        <div id="profile-peopleInf">
          <div className="profile-peopleInf">
            <h3>Followers</h3>
            <p>{activeProfile.followers.length}</p>
          </div>
          <div className="profile-peopleInf">
            <h3>Following</h3>
            <p>{activeProfile.followed.length}</p>
          </div>
        </div>
        <div id="profile-pictureInf">
          <img src="../img/Logos/19.jpg" alt="" />
        </div>
        <div id="profile-editInf">
          <input type="button" value="Edit" onClick={handleRedirect} />
        </div>
      </div>
      <div id="profileEdit-options">
        <div
          className="profileEdit-options"
          onClick={ChangeSection}
          id="profile-Playlists"
        >
          <h1>Playlists</h1>
        </div>
        <div
          id="profile-Posts"
          className="profileEdit-options optionSelect"
          onClick={ChangeSection}
        >
          <h1>Posts</h1>
        </div>
      </div>
    </>
  );
};

export default MyProfileHeader;
