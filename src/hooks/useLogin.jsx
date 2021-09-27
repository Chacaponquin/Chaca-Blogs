import { useState, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import ProfileContext from "../context/ProfileContext";
import { initialStates } from "../js/initialStates";
import LoadingContext from "../context/LoadingContext";

export const useLogin = () => {
  let history = useHistory();
  const { setActiveProfile } = useContext(ProfileContext);
  const { API } = useContext(LoadingContext);
  const [loginForm, setloginForm] = useState(initialStates.initialLoginForm);

  const handleChange = (e) => {
    setloginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post(`${API}/newProfile`, loginForm).then(({ data }) => {
      setActiveProfile(data);
      history.push("/home");
    });
  };

  return { handleChange, handleSubmit };
};
