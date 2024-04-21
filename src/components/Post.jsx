import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Link
      to={`/fullpost/${post.id}`}
      className="w-[17rem] border-2 bg-white min-h-[30vh] hover:shadow-lg duration-300 transition-all  p-3 rounded-lg flex gap-4 flex-col justify-between"
    >
      <div className="title text-blue-400 font-bold">{post.title}</div>
      <div className="body text-zinc-400 bg-zinc-50 border-2 p-2 rounded-lg">
        {post.body}
      </div>
    </Link>
  );
};

export default Post;
