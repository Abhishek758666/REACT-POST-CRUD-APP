import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";

const SecNav = ({ post }) => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const listRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setSearchList([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);

    const filteredPosts = post.filter((post) =>
      post.title.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setSearchList(filteredPosts);
  };

  const handleInputClick = () => {
    if (searchList.length === 0 && search !== "") {
      setSearchList(post);
    }
  };

  return (
    <nav className="sticky top-0 left-0 flex px-5 py-3 justify-center gap-4 items-center shadow-sm bg-white bg-opacity-60">
      <Link
        to="/create"
        className="text-5xl px-3 py-1  text-blue-500 rounded-lg"
      >
        <IoIosAddCircle />
      </Link>
      <form
        className="flex items-center relative"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={search}
          onChange={handleChange}
          onClick={handleInputClick}
          placeholder="Search Post..."
          className="border-2 w-[50vw] border-blue-200 px-5 py-1 rounded-lg"
        />
        <div
          ref={listRef}
          className={`w-[50vw] rounded-lg border-2 max-h-[90vh] overflow-y-auto bg-white searchList fixed h-max top-20 ${
            searchList.length > 0 ? "" : "hidden"
          }`}
        >
          <ul className="list-none p-3">
            {searchList.map((post) => (
              <Link key={post.id} to={`/fullpost/${post.id}`}>
                <li className="hover:bg-blue-200 cursor-pointer rounded-lg p-2">
                  {post.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </form>
    </nav>
  );
};

export default SecNav;
