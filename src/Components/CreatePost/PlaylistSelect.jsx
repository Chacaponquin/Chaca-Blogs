import React from "react";

const PlaylistSelect = ({ showCards, playlists, handleSelect }) => {
  return (
    <>
      <div className="post-select-container">
        <label htmlFor="select-playlist">Playlist:</label>
        {showCards === true ? (
          <select name="playlist" id="" className="post-select" disabled>
            <option value=""></option>
            {playlists.map((el) => (
              <option key={el._id} value={el.playlistName}>
                {el.playlistName}
              </option>
            ))}
          </select>
        ) : (
          <select
            name="playlist"
            className="post-select"
            onChange={handleSelect}
            required
            defaultValue=""
          >
            <option value=""></option>
            {playlists &&
              playlists.map((el) => (
                <option key={el._id} value={el.playlistName}>
                  {el.playlistName}
                </option>
              ))}
          </select>
        )}
      </div>
    </>
  );
};

export default PlaylistSelect;
