import { useEffect, useState, useCallback, useContext} from "react";

import { GlobalContext } from "../contexts/GlobalContext";
import { ErrorsContext } from "../contexts/ErrorsContext";
import { useNavigate } from "react-router-dom";

import Axios from "axios";

const Login = ({}) => {

  const navigate = useNavigate()
  const { token, setToken, username, setUsername,password, setPassword,isLoggedIn, setIsLoggedIn } =
    useContext(GlobalContext);
  const { errors, setErrors } = useContext(ErrorsContext);
  const [loading, setLoading] = useState(false);
  

  const fetchResults = useCallback((data) => {
    const url = "http://localhost:8090/login";
    const login = async () => {
      try {
        const res = await Axios.post(url, data);
        if (res.status !== 200) {
          throw Error("Error during athentificating");
        }
        setToken(`Bearer ${res.headers.authorization}`);
        localStorage.setItem('token', `Bearer ${res.headers.authorization}`);
        setIsLoggedIn(true);
        navigate('/home');
      } catch (err) {
        const error =
          err.message === "Network Error"
            ? "Network Error, Please Check Your Internet Connection"
            : err.message;
        setErrors(error);
      }
    };

    login();
  }, [setToken, setErrors]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { username, password };
    setLoading(true);
    setErrors("");
    fetchResults(data);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e) }>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col md:w-10/12 lg:w-5/12 mx-auto my-8">
        <div className="mb-4 ">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="******************"
            onChange={(event) => setPassword(event.target.value)}
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded">
            Submit
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </form>
  );
};

export default Login;
