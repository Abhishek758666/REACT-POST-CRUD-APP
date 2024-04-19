import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 px-5 py-3 shadow-sm bg-white">
      <Link to="/" className="text-red-500 text-xl">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
