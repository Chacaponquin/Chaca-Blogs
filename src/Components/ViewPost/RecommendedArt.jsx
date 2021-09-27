import React from "react";

const RecommendedArt = ({ post, handleRedirect, handleRedirectCategory }) => {
  return (
    <>
      <div className="recommended-article">
        <img
          className="recommended-image"
          src={`../${post?.picture}`}
          alt=""
          id={post?._id}
          onClick={handleRedirect}
        />
        <div className="recommended-article-contain">
          <h1>{post.title}</h1>
          <p className="recommended-resumen">{post?.resume}</p>
          <div className="categoria-create">
            <p
              className="category"
              id={post?.category}
              onClick={handleRedirectCategory}
            >
              {post?.category}
            </p>
            <p className="recommended-create">By {post?.creator}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedArt;
