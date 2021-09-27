import React from "react";

const PlaylistPostCard = ({
  post,
  handleDeletePost,
  handleDeletePostFromPlay,
}) => {
  return (
    <>
      <div className="playlistEdit-post-card">
        <div className="playlistEdit-post-picture">
          <img
            src={`../${post.picture}`}
            className="playlistEdit-post-image"
            alt=""
          />
        </div>
        <div className="playlistEdit-post-title">
          <h2>{post.title}</h2>
        </div>
        <div className="playlistEdit-post-button">
          <input
            type="button"
            value="Delete From"
            id={post._id}
            onClick={handleDeletePostFromPlay}
          />
          <input
            type="button"
            value="Delete Post"
            id={post._id}
            onClick={handleDeletePost}
          />
        </div>
      </div>
    </>
  );
};

export default PlaylistPostCard;
