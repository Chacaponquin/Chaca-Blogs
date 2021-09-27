import React, { createContext, useState } from "react";

const SectionContext = createContext();

const SectionProvider = ({ children }) => {
  const [sectionOpen, setSectionOpen] = useState("Home");

  const data = { sectionOpen, setSectionOpen };

  return (
    <SectionContext.Provider value={data}>{children} </SectionContext.Provider>
  );
};

export { SectionProvider };
export default SectionContext;
