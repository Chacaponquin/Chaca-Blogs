import React from "react";
import NavBarLoged from "../NavBars/NavBarLoged";
import "../../css/styleMyProfile.css";
import { useEditProfile } from "../../hooks/useEditProfile";

const EditProfile = () => {
  const { editForm, handleChange, handleSubmit } = useEditProfile();

  return (
    <div id="editProfile-container">
      <div id="edit-background-color"></div>
      <img src="../img/Logos/4.jpg" alt="" id="edit-background-image" />
      <NavBarLoged color="white" />

      <form id="editProfile-form" action="" onSubmit={handleSubmit}>
        <h1 id="profile-setting-h">Profile Setting</h1>
        <div className="profile-setting-container">
          <div className="profile-setting-input">
            <label htmlFor="profile-firstName">First Name</label>
            <input
              name="username"
              id="profile-firstName"
              type="text"
              autoComplete="off"
              onChange={handleChange}
              defaultValue={editForm.username}
              required
            />
          </div>
          <div className="profile-setting-input">
            <label htmlFor="profile-lastName">Password</label>
            <input
              name="password"
              id="profile-password"
              type="text"
              autoComplete="off"
              onChange={handleChange}
              defaultValue={editForm.password}
              required
            />
          </div>
        </div>
        <div className="profile-setting-container">
          <div className="profile-setting-input">
            <label htmlFor="profile-nickname">Nickname</label>
            <input
              name="nickname"
              id="profile-nickname"
              type="text"
              autoComplete="off"
              defaultValue={editForm.nickname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="profile-setting-input">
            <label htmlFor="profile-email">Email</label>
            <input
              name="email"
              id="profile-email"
              type="email"
              autoComplete="off"
              defaultValue={editForm.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <textarea
          name="description"
          id="profile-description"
          spellCheck="false"
          defaultValue={editForm.description}
          onChange={handleChange}
        ></textarea>
        <div className="profile-setting-botons">
          <input type="submit" value="Update" />
          <input type="reset" value="Cancel" />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
