import React, { createContext, useEffect, useState } from "react";
import instance from "./Axios";
export const postContext = createContext();

const Context = ({ children }) => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState({});

  const getPost = async () => {
    let response1 = await instance.get("./posts");
    setPost(response1.data);
  };

  const getComments = async () => {
    let response1 = await instance.get("./comments");
    setComments(response1.data);
  };

  useEffect(() => {
    getPost();
    getComments();
  }, []);

  return (
    <postContext.Provider value={{ post, setPost, comments, setComments }}>
      {children}
    </postContext.Provider>
  );
};

export default Context;
