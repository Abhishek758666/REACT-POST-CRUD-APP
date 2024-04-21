import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Create from "./screens/Create";
import Fullpost from "./screens/Fullpost";

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-gradient-to-r from-zinc-100  to-zinc-50">
      {pathname != "/" ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/fullpost/:id" element={<Fullpost />} />
      </Routes>
    </div>
  );
};

export default App;
