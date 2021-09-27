import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import ProfileContext from "../context/ProfileContext";
import LoadingContext from "../context/LoadingContext";

export const useEditProfile = () => {
  const { activeProfile, setActiveProfile } = useContext(ProfileContext);
  const { API } = useContext(LoadingContext);
  let history = useHistory();

  const [editForm, setEditForm] = useState({
    nickname: activeProfile.nickname,
    username: activeProfile.username,
    email: activeProfile.email,
    password: activeProfile.password,
    description: activeProfile.description,
  });

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let { data } = await axios.put(
      `${API}/updateProfile/${activeProfile._id}`,
      editForm
    );

    setActiveProfile(data);

    history.push("/createPost");
  };

  return { activeProfile, editForm, setEditForm, handleChange, handleSubmit };
};
