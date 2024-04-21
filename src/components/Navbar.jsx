import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 px-10 py-3 z-50 shadow-sm font-bold bg-white">
      <Link to="/" className="text-blue-500 text-3xl">
        <AiFillHome />
      </Link>
    </nav>
  );
};

export default Navbar;
