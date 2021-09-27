import { createContext, useState } from "react";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const API = "https://chaca-blog-server.herokuapp.com";
  //const API = "http://localhost:5000";

  const data = { loading, setLoading, API };

  return (
    <LoadingContext.Provider value={data}> {children} </LoadingContext.Provider>
  );
};

export { LoadingProvider };
export default LoadingContext;
