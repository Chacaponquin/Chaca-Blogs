import React, { useEffect } from "react";
import { useCategories } from "../../hooks/useCategories";
import { getCategories } from "../../js/getCategories";
import "../../css/styleCategories.css";
import NavBarLoged from "../NavBars/NavBarLoged";
import CategoriesCard from "./CategoriesCard";
import Loading from "../Loading/Loading";

const Categories = () => {
  const {
    API,
    isMount,
    categories,
    loading,
    setLoading,
    setCategories,
    setSectionOpen,
    handleRedirect,
  } = useCategories();

  const getInformation = () => {
    setLoading(true);
    getCategories(API).then((cat) => {
      if (isMount.current === true) {
        setSectionOpen("Categories");
        setCategories(cat);
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
        <div id="categoriesContainer">
          <NavBarLoged />
          <div id="categories-card-container">
            {categories.map((el) => (
              <CategoriesCard
                key={el._id}
                category={el}
                handleRedirect={handleRedirect}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
