import React from "react";

const CreateCategory = ({ category }) => {
  return (
    <>
      <h2 className="h-list">{category?.name}</h2>
      <p className="p-list">{category?.description}</p>
    </>
  );
};

export default CreateCategory;
