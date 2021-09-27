import React from "react";

const TitleResume = ({ showCards, handleChange }) => {
  return (
    <>
      <input
        type="text"
        name="title"
        placeholder="Titulo..."
        autoComplete="off"
        spellCheck="false"
        id="post-title"
        onChange={handleChange}
        disabled={showCards === true ? true : false}
      />
      <textarea
        name="resume"
        id="post-resume"
        placeholder="Resumen..."
        spellCheck="false"
        onChange={handleChange}
        disabled={showCards === true ? true : false}
      ></textarea>
    </>
  );
};

export default TitleResume;
