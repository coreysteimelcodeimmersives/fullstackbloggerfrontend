import React from "react";

const BlogsPage = ({ blogs }) => {
  return (
    <div className="blogs-page">
      <h1>Blogs Page</h1>
      <div>
        {blogs.map((blog) => {
          return <BlogPost blog={blog} key={blog.id} />;
        })}
      </div>
    </div>
  );
};

const BlogPost = ({ blog }) => {
  return (
    <div className="blogPost">
      <h2>Title: {blog.title}</h2>
      <br />
      <h3>Author: {blog.author}</h3>
      <br />
      <h4>Category: {blog.category}</h4>
      <br />
      <div>{blog.text}</div>
      <br />
      <div>Created At: {blog.createdAt}</div>
      <br />
      <div>Last Modified: {blog.lastModified}</div>
    </div>
  );
};

export default BlogsPage;
