import { createContext, useState } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const dollerSign = "$";
  const serverURL = "http://localhost:5000";

  const value = {
    doctors,
    serverURL,
    dollerSign,
    setToken,
    token,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
