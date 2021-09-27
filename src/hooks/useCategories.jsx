import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import LoadingContext from "../context/LoadingContext";
import SectionContext from "../context/SectionContext";

export const useCategories = () => {
  let history = useHistory();
  const [categories, setCategories] = useState([]);
  const { loading, setLoading, API } = useContext(LoadingContext);
  const { setSectionOpen } = useContext(SectionContext);
  const isMount = useRef(true);

  const handleRedirect = (e) => {
    history.push(`/categories/${e.target.id}`);
  };

  return {
    isMount,
    categories,
    loading,
    setLoading,
    setCategories,
    setSectionOpen,
    handleRedirect,
    API,
  };
};
