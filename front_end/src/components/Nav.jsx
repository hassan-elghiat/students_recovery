import { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn , setToken} = useContext(GlobalContext);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a
              className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="/home"
            >
              <div className="header flex justify-start items-center ">
                <img
                  src="https://www.logopik.com/wp-content/uploads/edd/2018/11/Education-School-Vector-Logo.png"
                  className="w-24"
                  alt="logo"
                />
              </div>
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul
              className={`flex flex-col lg:flex-row list-none ml-auto w-full ${
                !navbarOpen && " flow-root"
              }`}
            >
              <li className="nav-item  float-left">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-yellow-400 hover:underline"
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item  float-left">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-yellow-400 hover:underline"
                  href="/parent"
                >
                  Parents
                </a>
              </li>
              <li className="nav-item  float-left">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-yellow-400 hover:underline"
                  href="/student"
                >
                  Students
                </a>
              </li>
              <li className="nav-item  float-left">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-yellow-400 hover:underline"
                  href="/add-parent"
                >
                  Add Parent
                </a>
              </li>
              <li className="nav-item  float-left">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-yellow-400 hover:underline"
                  href="/add-student"
                >
                  Add Student
                </a>
              </li>
              <li
                className="nav-item  float-right"
                onClick={() => {
                  setIsLoggedIn(false);
                  setToken("");
                }}
              >
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-yellow-400 hover:underline"
                  href="/"
                >
                  {isLoggedIn ? "Logout" : "Login"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
