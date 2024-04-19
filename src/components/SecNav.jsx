import React from "react";
import { Link } from "react-router-dom";

const SecNav = () => {
  return (
    <nav className="sticky top-0 left-0 flex px-5 py-3 justify-between gap-4 items-center shadow-sm bg-white bg-opacity-60">
      <Link
        to="/create"
        className="border-2 px-3 py-1 border-blue-500 text-blue-500 rounded-lg"
      >
        New Post
      </Link>
      <form className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border-2 border-blue-200 px-5 py-1 rounded-lg"
        />
      </form>
    </nav>
  );
};

export default SecNav;
