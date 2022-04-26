import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [parents, setParents] = useState([]);
  const url = `http://localhost:8090/parents/all`;
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      "authorization": `${token}`,
    };
    (async () => {
      const res = await Axios.get(url, { headers });
      setParents(res.data);
    })();
  }, []);

  return <Main Parents={parents} />;
};

export default App;
