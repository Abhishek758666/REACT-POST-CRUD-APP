import React, { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import instance from "../utils/Axios";
import { postContext } from "../utils/Context";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addcomment = ({ postId }) => {
  const { comments, setComments } = useContext(postContext);
  const [comment, setComment] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    if (comment.trim() === "") {
      const notify = () => toast.error("Comment cannot be empty");
      notify();
    } else {
      try {
        const response = await instance.post(`/posts/${postId}/comments`, {
          postId: postId,
          id: uuidv4(),
          name: "Demo user",
          email: "example@ex.com",
          body: comment,
        });
        setComments((prev) => [...prev, response.data]);
        setComment("");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="w-full ">
      <ToastContainer />

      <form className="flex  gap-4" onSubmit={handleForm}>
        <input
          type="text"
          className="w-[70%] px-4 border-2 rounded-lg border-zinc-300 py-1"
          placeholder="comment.."
          value={comment}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="border-2 px-3 py-1 border-blue-500 text-blue-500 rounded-lg"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default Addcomment;
