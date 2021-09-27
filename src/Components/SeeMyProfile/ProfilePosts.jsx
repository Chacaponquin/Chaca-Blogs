import React from "react";
import PostCard from "./PostCard";

const ProfilePosts = ({ postsInf, handleDeletePost }) => {
  return (
    <>
      <div id="profileEdit-cards">
        {postsInf.length === 0 ? (
          <h1 className="noPost-h1">No tienes publicaciones</h1>
        ) : (
          postsInf.map((el) => (
            <PostCard
              key={el._id}
              post={el}
              handleDeletePost={handleDeletePost}
            />
          ))
        )}
      </div>
    </>
  );
};

export default ProfilePosts;
