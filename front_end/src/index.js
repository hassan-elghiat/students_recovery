import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Add from "./pages/Add";
import Parents from "./pages/Parents";
import Students from "./pages/Students";
import reportWebVitals from "./reportWebVitals";
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index path="parent" element={<Parents />} />
      <Route path="student" element={<Students />} />
      <Route path="add" element={<Add />} />
      <Route
        path="*"
        element={
          <main className="flex h-screen w-screen items-center justify-center gap-4 bg-slate-700 p-4">
            <span className="text-8xl font-bold uppercase text-white">404</span>{" "}
            <p className="text-2xl uppercase text-white">
              There's nothing here!
            </p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
