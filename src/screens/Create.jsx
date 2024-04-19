import React, { useContext, useState } from "react";
import axios from "../utils/Axios";
import { postContext } from "../utils/Context";
import Creating from "./Creating";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { post, setPost } = useContext(postContext);
  const navigate = useNavigate();
  const [npost, setNPost] = useState({
    userId: 3,
    id: nanoid(),
    title: "",
    body: "",
  });

  const [isPending, setIsPending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNPost((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      if (npost.title.trim() !== "" && npost.body.trim() !== "") {
        const response = await axios.post("/posts", {
          title: npost.title,
          body: npost.body,
          id: post.length,
          userId: npost.userId,
        });
        setPost((prev) => [...prev, response.data]);
        navigate("/");
      } else {
        alert("Enter all the Field");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setIsPending(false);
    setNPost({ title: "", body: "", userId: "" });
  };

  return (
    <>
      {isPending ? (
        <Creating />
      ) : (
        <div className="w-full px-5">
          <h1 className="text-red-500 text-2xl text-center mt-[12vh] font-bold">
            Add New Post
          </h1>
          <form
            className="mx-auto  max-w-[500px] bg-slate-100 flex flex-col mt-3 p-8 gap-3 rounded-lg"
            onSubmit={handleForm}
          >
            <input
              type="text"
              placeholder="Title"
              className="px-3 rounded-lg py-1"
              name="title"
              value={npost.title}
              onChange={handleChange}
            />
            <textarea
              type="text"
              placeholder="Body"
              name="body"
              className="px-3 py-1 rounded-lg min-h-[20vh]"
              value={npost.body}
              onChange={handleChange}
            />
            <button className="border-2 px-3 py-1 border-blue-500 text-blue-500 rounded-lg w-max">
              Add Post
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Create;
