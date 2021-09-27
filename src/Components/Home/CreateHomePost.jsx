import React from "react";

const CreateHomePost = ({ post, handleSeePosts }) => {
  return (
    <>
      <div
        className="home-recommendPost"
        style={{
          backgroundImage: `url('../${post?.picture}')`,
        }}
      >
        <div className="home-post-information">
          <div>
            <h3 id={post._id} onClick={handleSeePosts}>
              {post?.title}
            </h3>
            <p id={post._id} onClick={handleSeePosts}>
              {post?.resume}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateHomePost;
