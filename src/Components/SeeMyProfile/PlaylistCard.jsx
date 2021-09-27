import React from "react";
import PlaylistPostCard from "./PlaylistPostCard";

const PlaylistCard = ({
  playlist,
  handleShowPlaylist,
  showPlaylist,
  handleDeletePost,
  handleDeletePostFromPlay,
  handleDeleteAll,
  handleDeletePlaylist,
}) => {
  return (
    <>
      <div className="playlistEdit-card">
        <div className="playlistEdit-picture">
          <img src="../img/Random/7.jpg" alt="" />
        </div>
        <div className="playlistEdit-name">
          <h2>{playlist?.playlistName}</h2>
        </div>
        <div className="playlistEdit-sectionOpen">
          {playlist.posts.length !== 0 && (
            <img
              src="../img/Logos/down-arrow-solid-24.png"
              className=""
              alt=""
              onClick={handleShowPlaylist}
              id={playlist._id}
            />
          )}
        </div>
        <div className="playlistEdit-buttons">
          <input
            type="button"
            value="Delete"
            id={playlist._id}
            onClick={handleDeletePlaylist}
          />
          <input
            type="button"
            value="Delete Posts"
            id={playlist._id}
            onClick={handleDeleteAll}
          />
        </div>
      </div>
      {showPlaylist.includes(playlist._id) &&
        playlist.posts.map((el) => (
          <PlaylistPostCard
            key={el._id}
            post={el}
            handleDeletePost={handleDeletePost}
            handleDeletePostFromPlay={handleDeletePostFromPlay}
          />
        ))}
    </>
  );
};

export default PlaylistCard;
