import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./containers/Home";

import { fetchUser } from "./utils/fetchUser";
import React, { useEffect } from "react";

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const user = fetchUser();

  //   if (!user) navigate("/login");
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
