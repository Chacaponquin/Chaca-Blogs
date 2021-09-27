import React, { useEffect } from "react";
import NavBarLoged from "../NavBars/NavBarLoged";
import "../../css/styleCategoriesPosts.css";
import { useCategoryPosts } from "../../hooks/useCategoryPosts";
import { getCategoryPosts } from "../../js/getCategoryPosts";
import Loading from "../Loading/Loading";
import CategoryPostCard from "./CategoryPostCard";

const CategoryPosts = () => {
  const {
    API,
    isMount,
    loading,
    categoryPosts,
    setCategoryPosts,
    setSectionOpen,
    setLoading,
    categoryName,
    handleRedirect,
  } = useCategoryPosts();

  const getInformation = () => {
    setLoading(true);
    getCategoryPosts(API, categoryName).then((posts) => {
      if (isMount.current === true) {
        setSectionOpen("Categories");
        setCategoryPosts(posts);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    getInformation();

    return () => (isMount.current = false);
  }, []);

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div id="categoriesPosts-container">
          <NavBarLoged />
          <div id="categories-postCards-container">
            {categoryPosts.map((el) => (
              <CategoryPostCard
                key={el._id}
                post={el}
                handleRedirect={handleRedirect}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPosts;
