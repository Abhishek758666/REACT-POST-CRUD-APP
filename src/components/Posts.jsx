import React, { useContext } from "react";
import Post from "./Post";
import { postContext } from "../utils/Context";
import Loading from "../screens/Loading";

const Posts = () => {
  const { post } = useContext(postContext);

  if (!post || !Array.isArray(post)) {
    return <Loading />;
  }

  return (
    <div className="px-5 py-3 flex flex-wrap gap-4 justify-center mt-5">
      {post.map((value, index, array) => {
        return <Post key={index} id={index} post={value} />;
      })}
    </div>
  );
};

export default Posts;
