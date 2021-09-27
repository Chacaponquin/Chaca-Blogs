import React from "react";

const CategorySelect = ({ showCards, categorys, handleSelect }) => {
  return (
    <>
      <div className="post-select-container">
        <label htmlFor="select-category">Category:</label>
        {showCards === true ? (
          <select name="category" id="" className="post-select" disabled>
            <option value=""></option>
            {categorys.map((el) => (
              <option key={el._id} value={el.name}>
                {el.name}
              </option>
            ))}
          </select>
        ) : (
          <select
            name="category"
            className="post-select"
            onChange={handleSelect}
            required
          >
            <option value=""></option>
            {categorys &&
              categorys.map((el) => (
                <option key={el._id} value={el.name}>
                  {el.name}
                </option>
              ))}
          </select>
        )}
      </div>
    </>
  );
};

export default CategorySelect;
