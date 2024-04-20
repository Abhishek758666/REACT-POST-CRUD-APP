import React, { useContext, useState, useEffect } from "react";
import instance from "../utils/Axios";
import { postContext } from "../utils/Context";

const Addcomment = ({ postId }) => {
  const { setComments } = useContext(postContext);
  const [comment, setComment] = useState("");
  const [nextId, setNextId] = useState(501);

  useEffect(() => {
    setNextId(501);
  }, [postId]);
  const handleForm = async (e) => {
    e.preventDefault();
    if (comment.trim() === "") {
      alert("Please enter a comment.");
    } else {
      try {
        const response = await instance.post(`/posts/${postId}/comments`, {
          postId: postId,
          id: nextId,
          name: "Demo user",
          email: "example@ex.com",
          body: comment,
        });
        setComments((prev) => [...prev, response.data]);
        setComment("");
        setNextId((prevId) => prevId + 1);
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
