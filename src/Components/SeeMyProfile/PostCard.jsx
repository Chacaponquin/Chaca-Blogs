import React from "react";

const PostCard = ({ post, handleDeletePost }) => {
  return (
    <>
      <div className="postsEdit-card">
        <div className="postEdit-picture">
          <img
            src={`../${post.picture}`}
            className="postEdit-picture-image"
            alt=""
          />
        </div>
        <div className="postEdit-title">
          <h2>{post.title}</h2>
        </div>
        <div className="postEdit-button">
          <input
            type="button"
            value="Delete"
            id={post._id}
            onClick={handleDeletePost}
          />
        </div>
      </div>
    </>
  );
};

export default PostCard;
