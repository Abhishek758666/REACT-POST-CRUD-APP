import React, { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { postContext } from "../utils/Context";

const Comment = ({ id, comment }) => {
  const { comments, setComments } = useContext(postContext);

  const handleDelete = () => {
    // Filter out the comment with the specified id
    const filteredComments = comments.filter((value) => value.id !== id);
    // Update the comments state with the filtered array
    setComments(filteredComments);
  };

  return (
    <div className="p-4 bg-white rounded-lg mt-4 relative">
      <div className="flex gap-3 items-center">
        <span className="w-[20px] h-[20px] rounded-full bg-zinc-300 inline-block"></span>
        <p>{comment.name}</p>
      </div>
      <div className="email text-zinc-400">{comment.email}</div>
      <div className="body">{comment.body}</div>
      <button onClick={handleDelete}>
        <MdDeleteOutline className="border-2 p-1 border-red-500 text-red-500 text-[2rem] rounded-lg absolute top-3 right-3" />
      </button>
    </div>
  );
};

export default Comment;
