import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Link
      to={`/fullpost/${post.id}`}
      className="w-[17rem] min-h-[30vh] bg-slate-100 p-3 rounded-lg flex flex-col justify-between"
    >
      <div className="title text-emerald-500 font-bold">{post.title}</div>
      <div className="body text-zinc-400 bg-white p-2 rounded-lg">
        {post.body}
      </div>
    </Link>
  );
};

export default Post;
