import { useContext, useRef, useState } from "react";
import LoadingContext from "../context/LoadingContext";

export const useLanding = () => {
  const [randomCategorys, setRandomCategorys] = useState([]);
  const [randomPosts, setRandomPosts] = useState([]);
  const { loading, setLoading, API } = useContext(LoadingContext);
  const isMount = useRef(true);

  return {
    API,
    isMount,
    randomCategorys,
    randomPosts,
    loading,
    setRandomPosts,
    setRandomCategorys,
    setLoading,
  };
};
