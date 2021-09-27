import React from "react";

const PostContent = ({ postFound }) => {
  return (
    <>
      <div id="article-content">
        <h1>{postFound.title}</h1>
        <p>{postFound.content}</p>
      </div>
    </>
  );
};

export default PostContent;
