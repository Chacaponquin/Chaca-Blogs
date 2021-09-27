import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import LoadingContext from "../../context/LoadingContext";

const CategoriesCard = ({ category, handleRedirect }) => {
  const { API } = useContext(LoadingContext);
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios.get(`${API}/images/${category.name}`).then(({ data }) => {
      setImage(data);
    });
  }, []);

  return (
    <>
      <div className="category-card">
        <div className="category-card-img">
          <img src={`../${image}`} alt="" />
        </div>
        <div className="category-card-container">
          <h3>{category?.name}</h3>
          <p>{category?.description}</p>
          <input
            type="button"
            value="Visit"
            id={category.name}
            onClick={handleRedirect}
          />
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
