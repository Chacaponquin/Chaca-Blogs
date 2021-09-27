import { createContext, useState } from "react";

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [activeProfile, setActiveProfile] = useState(false);

  const data = { activeProfile, setActiveProfile };

  return (
    <ProfileContext.Provider value={data}> {children} </ProfileContext.Provider>
  );
};

export { ProfileProvider };
export default ProfileContext;
