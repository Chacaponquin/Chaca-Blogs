import axios from "axios";
import { useContext, useState, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import LoadingContext from "../context/LoadingContext";
import SectionContext from "../context/SectionContext";

export const useCategoryPosts = () => {
  let history = useHistory();
  const { categoryName } = useParams();
  const [categoryPosts, setCategoryPosts] = useState([]);
  const { setLoading, loading, API } = useContext(LoadingContext);
  const { setSectionOpen } = useContext(SectionContext);
  const isMount = useRef(true);

  const handleRedirect = async (e) => {
    axios
      .put(`${API}/updateVisit/${e.target.id}`)
      .then(({ data }) => history.push(`/view/${e.target.id}`));
  };

  return {
    API,
    isMount,
    loading,
    categoryName,
    categoryPosts,
    setLoading,
    setSectionOpen,
    setCategoryPosts,
    handleRedirect,
  };
};
