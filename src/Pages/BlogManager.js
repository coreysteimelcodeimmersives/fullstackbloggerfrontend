import React from "react";
import { useState } from "react";
import BlogManagerCard from "../components/BlogManagerCard";
import Modal from "../components/Modal";

const BlogManager = ({
  adminBlogList,
  deleteBlog,
  fetchSingleBlog,
  urlEndpoint,
  setAdminBlogsLoading,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [editBlogId, setEditBlogId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editText, setEditText] = useState("");
  const [editCategory, setEditCategory] = useState("");

  const putUpdatedBlog = async () => {
    setAdminBlogsLoading(true);
    const url = `${urlEndpoint}/admin/edit-blog`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: editBlogId,
        title: editTitle,
        author: editAuthor,
        category: editCategory,
        text: editText,
      }),
    });
    const responseJSON = await response.json();
    setAdminBlogsLoading(false);
    return responseJSON;
  };
  return (
    <div>
      <h1>Blog Manager</h1>
      <Modal
        title={editTitle}
        onClose={() => setShowModal(false)}
        show={showModal}
        putUpdatedBlog={putUpdatedBlog}
      >
        <label>Title</label>
        <input
          type="text"
          value={editTitle}
          onChange={(e) => {
            setEditTitle(e.target.value);
          }}
        ></input>
        <br />
        <label>Category</label>
        <input
          type="text"
          value={editCategory}
          onChange={(e) => {
            setEditCategory(e.target.value);
          }}
        ></input>
        <br />
        <label>Author</label>
        <input
          type="text"
          value={editAuthor}
          onChange={(e) => {
            setEditAuthor(e.target.value);
          }}
        ></input>
        <br />
        <label>Text</label>
        <textarea
          type="text"
          value={editText}
          onChange={(e) => {
            setEditText(e.target.value);
          }}
        ></textarea>
        <br />
      </Modal>
      {adminBlogList.map((blog) => {
        const fetchBlogAndShow = async () => {
          const blogPost = await fetchSingleBlog(blog.id);
          setEditTitle(blogPost.title);
          setEditCategory(blogPost.category);
          setEditAuthor(blogPost.author);
          setEditText(blogPost.text);
          setEditBlogId(blog.id);
          setShowModal(true);
        };
        return (
          <BlogManagerCard
            blog={blog}
            deleteBlog={deleteBlog}
            key={blog.id}
            fetchBlogAndShow={fetchBlogAndShow}
          />
        );
      })}
    </div>
  );
};

export default BlogManager;
