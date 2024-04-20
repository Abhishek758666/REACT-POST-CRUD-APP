import React, { useContext, useEffect, useState } from "react";
import { postContext } from "../utils/Context";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import instance from "../utils/Axios";
import Addcomment from "../components/Addcomment";
import Comment from "../components/Comment";

const Fullpost = () => {
  const { post, setPost, comments, setComments } = useContext(postContext);

  const [singlePost, setsinglePost] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (post && Array.isArray(post) && id) {
      const foundPost = post.find((p) => p.id == id);
      if (foundPost) {
        setsinglePost(foundPost);
      } else {
        console.error(`Post with id ${id} not found.`);
      }
    } else {
      console.error("Invalid post data or missing id.");
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

  console.log(comments);

  return singlePost ? (
    <div className="h-max max-w-[800px] flex flex-col gap-5 m-auto p-10 bg-zinc-100">
      <div className="image w-full h-[15rem] text-4xl font-bold flex items-center justify-center bg-red-300 text-white rounded-lg">
        POST
      </div>
      <div className="title text-2xl font-semibold text-blue-500">
        {singlePost.title}
      </div>
      <div className="body w-[80%] text-zinc-500">{singlePost.body}</div>
      <div className="btns flex gap-5">
        <Link
          to="/"
          className="border-2 px-3 py-1 border-blue-500 text-blue-500 rounded-lg"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDelete(singlePost.id)}
          className="border-2 px-3 py-1 border-red-500 text-red-500 rounded-lg"
        >
          Delete
        </button>
      </div>
      <div className="commentSection">
        <Addcomment postId={id} />

        {comments ? (
          comments
            .filter((comment) => comment.postId === id)
            .map((comment, index) => (
              <Comment key={index} id={comment.id} comment={comment} />
            ))
        ) : (
          <h2>No Comments</h2>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Fullpost;
