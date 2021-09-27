import axios from "axios";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ProfileContext from "../context/ProfileContext";
import { initialStates } from "../js/initialStates";
import { showError } from "../js/showError";
import LoadingContext from "../context/LoadingContext";

export const useSignIn = () => {
  let history = useHistory();
  const { setActiveProfile } = useContext(ProfileContext);
  const { API } = useContext(LoadingContext);
  const [signInForm, setSignInForm] = useState(initialStates.initialSignInForm);
  const [signInError, setSignInError] = useState(false);

  const handleChange = (e) => {
    setSignInForm({
      ...signInForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let { data } = await axios.get(
        `${API}/profile/${signInForm.nickname}/${signInForm.password}`
      );

      if (!data?.message) {
        setActiveProfile(data);
        history.push("/home");
      } else if (data?.message) {
        showError(data.message, setSignInError);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { handleChange, handleSubmit, signInError };
};
