import React, { useContext } from "react";
import SecNav from "../components/SecNav";
import Posts from "../components/Posts";
import { postContext } from "../utils/Context";

const Home = () => {
  const { post } = useContext(postContext);

  return (
    <div>
      <SecNav post={post} />
      <Posts />
    </div>
  );
};

export default Home;
