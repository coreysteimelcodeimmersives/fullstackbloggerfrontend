import React from "react";

const BlogsPage = ({
  blogs,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
  filterField,
  setFilterField,
  filterValue,
  setFilterValue,
  limit,
  setLimit,
  page,
  setPage,
}) => {
  return (
    <div className="blogs-page">
      <h1>Blogs Page</h1>
      <label>Sort Field</label>
      &nbsp;
      <select
        value={sortField}
        onChange={(e) => {
          const newSortField = e.target.value;
          setSortField(newSortField);
        }}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="createdAt">Created At</option>
        <option value="id">Id</option>
      </select>
      <br />
      <label>Sort Order</label>
      &nbsp;
      <select
        value={sortOrder}
        onChange={(e) => {
          const newSortOrder = e.target.value;
          setSortOrder(newSortOrder);
        }}
      >
        <option value="ASC">Asc</option>
        <option value="DESC">Desc</option>
      </select>
      <br />
      <label>Filter Field</label>
      &nbsp;
      <select
        value={filterField}
        onChange={(e) => {
          const newFilterField = e.target.value;
          setFilterField(newFilterField);
        }}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <br />
      <label>Filter Value</label>
      <br />
      <input
        placeholder="..."
        value={filterValue}
        onChange={(e) => {
          const newFilterValue = e.target.value;
          setFilterValue(newFilterValue);
        }}
      ></input>
      <br />
      <label>Limit</label>
      <br />
      <input
        placeholder="Limit"
        type="number"
        value={limit}
        min="1"
        onChange={(e) => {
          const newLimit = e.target.value;
          setLimit(newLimit);
        }}
      ></input>
      <br />
      <label>Page</label>
      <br />
      <input
        placeholder="Page"
        type="number"
        min="1"
        value={page}
        onChange={(e) => {
          const newPage = e.target.value;
          setPage(newPage);
        }}
      ></input>
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
      <br />
      <text>Id: {blog.id}</text>
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
