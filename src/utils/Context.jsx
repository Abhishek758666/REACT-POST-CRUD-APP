import React, { createContext, useEffect, useState } from "react";
import instance from "./Axios";
export const postContext = createContext();

const Context = ({ children }) => {
  const [post, setPost] = useState({});
  const [comment, setComment] = useState({});

  const getPost = async () => {
    let response1 = await instance.get("./posts");
    setPost(response1.data);
  };

  useEffect(() => {
    getPost();
  }, []);

  useEffect(() => {
    getPost();
  }, []);

  return (
    <postContext.Provider value={{ post, setPost, comment, setComment }}>
      {children}
    </postContext.Provider>
  );
};

export default Context;
