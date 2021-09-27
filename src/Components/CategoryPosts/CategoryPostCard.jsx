import React from "react";

const CategoryPostCard = ({ post, handleRedirect }) => {
  return (
    <>
      <div className="post-category-card">
        <img
          className="recommended-image"
          src={`../${post?.picture}`}
          onClick={handleRedirect}
          id={post?._id}
          alt=""
        />
        <div className="category-post-information">
          <h1>{post?.title}</h1>
          <p className="category-description-section">{post?.resume}</p>
          <div className="postCategory-create-information">
            <p className="recommended-create">{post?.creator}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPostCard;
