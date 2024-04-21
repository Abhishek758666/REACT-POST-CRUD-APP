import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { postContext } from "../utils/Context";
import instance from "../utils/Axios";

const Comment = ({ postId, id, comment }) => {
  const { comments, setComments } = useContext(postContext);

  const handleDelete = async () => {
    try {
      await instance.delete(`/comments/${id}`);
      const filteredComments = comments.filter((value) => value.id !== id);
      setComments(filteredComments);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="p-4 bg-zinc-50 border-2 rounded-lg mt-4 relative">
      <div className="flex gap-3 items-center">
        <span className="w-[40px] h-[40px] rounded-full bg-zinc-300 inline-block"></span>
        <p>{comment.name}</p>
      </div>
      <div className="email text-zinc-400">{comment.email}</div>
      <div className="body">{comment.body}</div>
      <button onClick={handleDelete}>
        <MdDelete className=" text-red-500 text-[1.5rem] rounded-lg absolute top-3 right-3" />
      </button>
    </div>
  );
};

export default Comment;
