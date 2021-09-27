import { useContext, useRef, useState } from "react";
import SectionContext from "../../context/SectionContext";
import { initialStates } from "../../js/initialStates";
import { useCreateActions } from "./useCreateActions";
import LoadingContext from "../../context/LoadingContext";

export const useCreateVar = () => {
  const { showHideCards, setShowCards, showCards, moverForm } =
    useCreateActions();
  const { initialCreateForm, newCategoryForm } = initialStates;
  let { setSectionOpen } = useContext(SectionContext);
  const { loading, setLoading, API } = useContext(LoadingContext);

  const [createForm, setCreateForm] = useState(initialCreateForm);
  const [newCategory, setNewCategory] = useState(newCategoryForm);
  const [categorys, setCategorys] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const isMount = useRef(true);

  return {
    API,
    loading,
    isMount,
    showCards,
    createForm,
    newCategory,
    categorys,
    playlists,
    setLoading,
    setSectionOpen,
    setCreateForm,
    setNewCategory,
    setCategorys,
    setPlaylists,
    setShowCards,
    showHideCards,
    moverForm,
  };
};
