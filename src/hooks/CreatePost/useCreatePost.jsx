import axios from "axios";
import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ProfileContext from "../../context/ProfileContext";
import { useCreateVar } from "./useCreateVar";

import { checkCreateForm } from "../../js/checkCreateForm";

export const useCreatePost = () => {
  let history = useHistory();
  const { activeProfile, setActiveProfile } = useContext(ProfileContext);
  const {
    loading,
    API,
    isMount,
    showCards,
    createForm,
    newCategory,
    categorys,
    playlists,
    setLoading,
    setSectionOpen,
    setShowCards,
    setCreateForm,
    setNewCategory,
    setCategorys,
    setPlaylists,
    showHideCards,
    moverForm,
  } = useCreateVar();

  const handleChange = (e) => {
    setCreateForm({
      ...createForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleNewCategory = (e) => {
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //FUNCION PARA VERIFICAR QUE EL FORM CUMPLA LOS REQUISITOS
    let error = checkCreateForm(createForm, newCategory) || "";

    if (error === "") {
      const newPost = await axios.post(`${API}/newPost`, {
        ...createForm,
        creator: activeProfile._id,
      });

      if (newCategory.category !== "" && newCategory.description !== "") {
        let res = await axios.post(`${API}/newCategory`, {
          ...newCategory,
          id: newPost.data._id,
        });
        console.log(res);
      }

      let { data } = await axios.get(
        `${API}/getUpdateProfile/${activeProfile._id}`
      );
      setActiveProfile(data);

      history.push(`/view/${newPost.data._id}`);
    } else if (error !== "") {
      window.alert(`${error}`);
    }
  };

  const handleSelect = (e) => {
    setCreateForm({ ...createForm, [e.target.name]: e.target.value });
  };

  return {
    API,
    isMount,
    loading,
    showCards,
    categorys,
    playlists,
    setLoading,
    setSectionOpen,
    setShowCards,
    setCategorys,
    setPlaylists,
    moverForm,
    showHideCards,
    handleChange,
    handleNewCategory,
    handleSubmit,
    handleSelect,
  };
};
