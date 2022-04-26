import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import StudentsList from "../components/StudentsList";

const Students = () => {
  const [item, setItem] = useState();
  const [students, setStudents] = useState([]);

  const token = localStorage.getItem("token");
  const url = `http://localhost:8090/students/all`;
  useEffect(() => {
    console.log(token);
    const headers = {
      "Content-Type": "application/json",
      authorization: `${token}`,
    };
    (async () => {
      const res = await Axios.get(url, { headers });
      setStudents(res.data);
      console.log(res.data);
    })();
  }, []);
  return (
    <div className="flex h-screen w-screen flex-col  justify-between ">
      <div className="bg-primaryFG flex h-[6vh] w-screen items-center justify-start rounded-b-3xl px-4"></div>
      <main className="flex w-full flex-1 flex-col gap-8 pt-4">
        {/* search */}
        <Search target="parent" />
        <StudentsList list={students} />
      </main>
      {/* footer */}
      <div className="flex  w-full justify-between">
        <div className="flex flex-1 items-end  ">
          <span className="bg-primaryFG h-full rounded-tr-3xl px-4 py-2 capitalize text-white">
            List of Students
          </span>
        </div>
        <div className="flex gap-4 px-4 py-2">
          <Link to="/New">
            <span className="rounded-full bg-green-400 py-1 px-6 font-medium uppercase text-white">
              Add
            </span>
          </Link>

          {item && (
            <>
              <Link to="/">
                <span className="bg-dark rounded-full py-1 px-6 font-medium uppercase text-white">
                  Modify
                </span>
              </Link>
              <Link to="/">
                <span className="bg-dark rounded-full py-1 px-6 font-medium uppercase text-white">
                  Remove
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Students;
