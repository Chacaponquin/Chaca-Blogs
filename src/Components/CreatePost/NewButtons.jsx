import React from "react";

const NewButtons = ({ showHideCards, handleChange, handleNewCategory }) => {
  return (
    <>
      <div id="post-new">
        <div className="new-category-playlist">
          <div className="new-category-playlist-card hide">
            <input
              type="text"
              placeholder="Playlist name..."
              className="new-playlist-name"
              name="playlist"
              onChange={handleChange}
            />
          </div>

          <input
            type="button"
            value="New Playlist"
            className="new-button"
            onClick={showHideCards}
          />
        </div>
        <div className="new-category-playlist">
          <div className="new-category-playlist-card hide">
            <input
              type="text"
              placeholder="Category name..."
              className="new-playlist-name"
              name="category"
              onChange={(e) => {
                handleChange(e);
                handleNewCategory(e);
              }}
            />
            <textarea
              name="description"
              id="new-category-description"
              cols="20"
              rows="3"
              spellCheck="false"
              placeholder="Description..."
              onChange={handleNewCategory}
            ></textarea>
          </div>
          <input
            type="button"
            value="New Category"
            className="new-button"
            onClick={showHideCards}
          />
        </div>
      </div>
    </>
  );
};

export default NewButtons;
