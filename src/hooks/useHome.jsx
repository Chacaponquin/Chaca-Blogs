import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import LoadingContext from "../context/LoadingContext";
import SectionContext from "../context/SectionContext";

export const useHome = () => {
  let history = useHistory();
  const { setSectionOpen } = useContext(SectionContext);
  const { loading, setLoading, API } = useContext(LoadingContext);
  const [categoryPosts, setCategoryPosts] = useState([]);
  const [contador, setContador] = useState(0);
  const [sortPosts, setSortPosts] = useState([]);
  const [showPosts, setShowPosts] = useState([]);
  const [contShowPosts, setContShowPosts] = useState(12);
  const isMountRef = useRef(true);

  const handleRedirect = async (e) => {
    if (e.target.value === "Visit") {
      axios
        .put(`${API}/updateVisit/${e.target.id}`)
        .then(({ data }) => history.push(`/view/${e.target.id}`));
    }
    if (e.target.value === "Categories") {
      history.push(`/categories`);
    }
    if (e.target.value === "My Profile") {
      history.push(`/profileInf`);
    }
    if (e.target.value === "Contactanos") {
      history.push(`/contactUs`);
    }
  };

  const handleNextShowPosts = () => {
    setContShowPosts(contShowPosts + 12);
  };

  const handleBackShowPosts = () => {
    setContShowPosts(contShowPosts - 12);
  };

  const handleSeePosts = async (e) => {
    axios
      .put(`${API}/updateVisit/${e.target.id}`)
      .then(({ data }) => history.push(`/view/${e.target.id}`));
  };

  return {
    API,
    isMountRef,
    loading,
    categoryPosts,
    contador,
    sortPosts,
    showPosts,
    contShowPosts,
    setLoading,
    setSectionOpen,
    setShowPosts,
    setContShowPosts,
    setSortPosts,
    setContador,
    setCategoryPosts,
    handleRedirect,
    handleNextShowPosts,
    handleBackShowPosts,
    handleSeePosts,
  };
};
