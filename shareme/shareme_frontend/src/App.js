import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./containers/Home";

function App() {
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
