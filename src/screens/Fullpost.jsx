/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { postContext } from "../utils/Context";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import instance from "../utils/Axios";
import Addcomment from "../components/Addcomment";
import Comment from "../components/Comment";
import { MdEditDocument } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Fullpost = () => {
  const { post, setPost, comments } = useContext(postContext);

  const [singlePost, setsinglePost] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (post && Array.isArray(post) && id) {
      const foundPost = post.find((p) => p.id == id);
      if (foundPost) {
        setsinglePost(foundPost);
      }
    }
  }, [id, post]);

  const handleDelete = async (id) => {
    try {
      await instance.delete(`/posts/${id}`);
      const filteredPost = post.filter((p) => p.id !== id);
      setPost(filteredPost);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return singlePost && comments ? (
    <div className="h-max max-w-[800px] flex flex-col gap-5 m-auto p-10 bg-white">
      <div className="image w-full h-[15rem] text-4xl font-bold flex items-center justify-center bg-blue-300 text-white rounded-lg">
        POST
      </div>
      <div className="title text-2xl font-semibold text-blue-500">
        {singlePost.title}
      </div>
      <div className="body w-[80%] text-zinc-500">{singlePost.body}</div>
      <div className="btns flex justify-between">
        <Link
          to={`/edit/${id}`}
          className=" py-1 text-3xl text-blue-500 rounded-lg"
        >
          <MdEditDocument />
        </Link>
        <button
          onClick={() => handleDelete(singlePost.id)}
          className=" text-3xl  py-1 text-red-500 rounded-lg"
        >
          <MdDelete />
        </button>
      </div>
      <div className="commentSection">
        <Addcomment postId={id} />

        {comments && !comments ? (
          <h2>No Comments</h2>
        ) : (
          comments
            .filter((comment) => comment.postId == id)
            .map((comment, index) => (
              <Comment
                key={index}
                postId={id}
                id={comment.id}
                comment={comment}
              />
            ))
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Fullpost;
