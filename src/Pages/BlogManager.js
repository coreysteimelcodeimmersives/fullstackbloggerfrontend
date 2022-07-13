import React from "react";
import BlogManagerCard from "../components/BlogManagerCard";

const BlogManager = ({ adminBlogList, deleteBlog }) => {
  return (
    <div>
      <h1>Blog Manager</h1>
      {adminBlogList.map((blog) => {
        return (
          <BlogManagerCard blog={blog} deleteBlog={deleteBlog} key={blog.id} />
        );
      })}
    </div>
  );
};

export default BlogManager;
