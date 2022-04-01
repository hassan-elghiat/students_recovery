import React, { createContext, useState } from "react";
export const GlobalContext = createContext();
const GlobalContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        token,
        setToken,
        username, setUsername,password, setPassword,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
