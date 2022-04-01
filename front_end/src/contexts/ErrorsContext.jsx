import React, { createContext, useState } from "react";
export const ErrorsContext = createContext();
const ErrorsContextProvider = (props) => {
  const [errors, setErrors] = useState("error");
  return (
    <ErrorsContext.Provider
      value={{
        errors,
        setErrors,
      }}
    >
      {props.children}
    </ErrorsContext.Provider>
  );
};

export default ErrorsContextProvider;
