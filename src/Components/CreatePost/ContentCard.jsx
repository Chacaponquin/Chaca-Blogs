import React from "react";

const ContentCard = ({ moverForm, handleChange, handleSubmit }) => {
  return (
    <>
      <div className="create-card">
        <h1>Create Post</h1>
        <textarea
          name="content"
          id="post-content"
          cols="30"
          rows="10"
          placeholder="Contenido..."
          spellCheck="false"
          onChange={handleChange}
          required
        ></textarea>
        <div className="post-passBack">
          <input type="button" value="Back" onClick={moverForm} />
          <input type="button" value="Publish" onClick={handleSubmit} />
        </div>
      </div>
    </>
  );
};

export default ContentCard;
