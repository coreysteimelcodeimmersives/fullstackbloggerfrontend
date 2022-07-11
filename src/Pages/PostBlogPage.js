import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostBlogPage = ({ blogSubmit, setIsFetching }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
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
          if (!title || !author || !category || !text) {
            const missingTitle = title ? (
              ""
            ) : (
              <div>
                <br /> - Title
              </div>
            );
            const missingAuthor = author ? (
              ""
            ) : (
              <div>
                <br /> - Author
              </div>
            );
            const missingCategory = category ? (
              ""
            ) : (
              <div>
                <br /> - Category
              </div>
            );
            const missingText = text ? (
              ""
            ) : (
              <div>
                <br /> - Text
              </div>
            );
            const newMissingMessage = (
              <div>
                To submit a blog please include:
                {missingTitle}
                {missingAuthor}
                {missingCategory}
                {missingText}
              </div>
            );
            setMessage(newMissingMessage);
          } else {
            setIsFetching(true);
            const { success, message } = await blogSubmit({
              title: title,
              author: author,
              category: category,
              text: text,
            });
            setIsFetching(false);
            setMessage(message);
            if (success === true) {
              navigate("/");
            }
          }
        }}
      >
        Submit
      </button>
      <div>{message}</div>
    </div>
  );
};

export default PostBlogPage;
