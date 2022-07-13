import React from "react";

const BlogManagerCard = ({ blog, deleteBlog }) => {
  return (
    <div className="blogPost">
      <p>Id: {blog.id}</p>
      <h2>Title: {blog.title}</h2>
      <br />
      <h3>Author: {blog.author}</h3>
      <br />
      <h4>Category: {blog.category}</h4>
      <br />
      <div>Created At: {blog.createdAt}</div>
      <br />
      <div>Last Modified: {blog.lastModified}</div>
      <br />
      <button
        onClick={async () => {
          await deleteBlog(blog.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default BlogManagerCard;
