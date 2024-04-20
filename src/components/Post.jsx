import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Link
      to={`/fullpost/${post.id}`}
      className="w-[17rem] border-2 border-zinc-300 min-h-[30vh] hover:shadow-lg duration-300 transition-all bg-slate-100 p-3 rounded-lg flex flex-col justify-between"
    >
      <div className="title text-blue-400 font-bold">{post.title}</div>
      <div className="body text-zinc-400 bg-white p-2 rounded-lg">
        {post.body}
      </div>
    </Link>
  );
};

export default Post;
