import React, { useState, useContext } from "react";
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";

import { postContext } from "../utils/Context";
import instance from "../utils/Axios";

const Comment = ({ postId, id, comment }) => {
  const { comments, setComments } = useContext(postContext);
  const [editing, setEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.body);

  const handleDelete = async () => {
    try {
      await instance.delete(`/comments/${id}`);
      const filteredComments = comments.filter((value) => value.id !== id);
      setComments(filteredComments);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = async () => {
    try {
      await instance.patch(`/comments/${id}`, {
        postId: postId,
        name: "Demo user",
        email: "example@ex.com",
        body: editedComment,
      });
      console.log("edit comment");
      const updatedComments = comments.map((c) =>
        c.id === id ? { ...c, body: editedComment } : c
      );
      setComments(updatedComments);
      setEditing(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleInputChange = (e) => {
    setEditedComment(e.target.value);
  };

  return (
    <div className="p-4 bg-zinc-50 border-2 rounded-lg mt-4 relative">
      <div className="flex gap-3 items-center">
        <span className="w-[40px] h-[40px] rounded-full bg-zinc-300 inline-block"></span>
        <p>{comment.name}</p>
      </div>
      <div className="email text-zinc-400">{comment.email}</div>
      {editing ? (
        <textarea
          type="text"
          className="w-[100%] px-4 border-2 rounded-lg border-zinc-300 py-1"
          value={editedComment}
          onChange={handleInputChange}
        />
      ) : (
        <div className="body">{comment.body}</div>
      )}
      <button onClick={handleDelete}>
        <MdDelete className=" text-red-500 text-[1.5rem] rounded-lg absolute top-3 right-3" />
      </button>
      {editing ? (
        <button
          onClick={handleEdit}
          className="border-2 px-3 py-1 border-blue-500 text-blue-500 rounded-lg"
        >
          Save
        </button>
      ) : (
        <button onClick={() => setEditing(true)}>
          <MdEditDocument className=" text-blue-500 text-[1.5rem] rounded-lg absolute top-3 right-12" />
        </button>
      )}
    </div>
  );
};

export default Comment;
