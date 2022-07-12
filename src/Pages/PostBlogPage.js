import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import validateBlog from "../Utils/Validation";

const PostBlogPage = ({ blogSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [resMssg, setResMssg] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <div>Post Blog Page</div>
      <br></br>
      <label>Title</label>
      <br></br>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          const newTitle = e.target.value;
          setTitle(newTitle);
        }}
      ></input>
      <br></br>
      <label>Author</label>
      <br></br>
      <input
        type="text"
        value={author}
        onChange={(e) => {
          const newAuthor = e.target.value;
          setAuthor(newAuthor);
        }}
      ></input>
      <br></br>
      <label>Category</label>
      <br></br>
      <input
        type="text"
        value={category}
        onChange={(e) => {
          const newCategory = e.target.value;
          setCategory(newCategory);
        }}
      ></input>
      <br></br>
      <label>Text</label>
      <br></br>
      <textarea
        type="text"
        value={text}
        onChange={(e) => {
          const newText = e.target.value;
          setText(newText);
        }}
      ></textarea>
      <br />
      <button
        onClick={async () => {
          const validateBlogObj = validateBlog({
            title: title,
            author: author,
            category: category,
            text: text,
          });
          if (validateBlogObj.isValid === false) {
            setResMssg(validateBlogObj.mssg);
          }
          if (validateBlogObj.isValid === true) {
            const { success, message } = await blogSubmit({
              title: title,
              author: author,
              category: category,
              text: text,
            });
            setResMssg(message);
            if (success === true) {
              navigate("/");
            }
          }
        }}
      >
        Submit
      </button>
      <div>{resMssg}</div>
    </div>
  );
};

export default PostBlogPage;
