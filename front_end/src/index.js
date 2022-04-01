import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import AddParent from "./pages/AddParent";
import AddStudent from "./pages/AddStudent";
import Login from "./pages/Login";
import Parents from "./pages/Parents";
import Students from "./pages/Students";
import reportWebVitals from "./reportWebVitals";

import ErrorsContextProvider from "./contexts/ErrorsContext";
import GlobalContextProvider from "./contexts/GlobalContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
render(
  <BrowserRouter>
    <>
      <GlobalContextProvider>
        <ErrorsContextProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<App />} />
            <Route index path="parent" element={<Parents />} />
            <Route path="student" element={<Students />} />
            <Route path="/add-parent" element={<AddParent />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route
              path="*"
              element={
                <main className="flex h-screen w-screen items-center justify-center gap-4 bg-slate-700 p-4">
                  <span className="text-8xl font-bold uppercase text-white">
                    404
                  </span>{" "}
                  <p className="text-2xl uppercase text-white">
                    There's nothing here!
                  </p>
                </main>
              }
            />
          </Routes>
          <Footer />
        </ErrorsContextProvider>
      </GlobalContextProvider>
    </>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
