import * as React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import BlogsPage from "./Pages/Blogs";
import PostBlogPage from "./Pages/PostBlogPage";
import BlogManager from "./Pages/BlogManager";

const urlEndpoint = "http://localhost:4000";

const App = () => {
  const [serverJSON, setServerJSON] = useState({ message: [] });
  const [sortField, setSortField] = useState("id");
  const [sortOrder, setSortOrder] = useState("DESC");
  const [filterField, setFilterField] = useState("title");
  const [filterValue, setFilterValue] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [adminBlogList, setAdminBlogList] = useState({ message: [] });
  const [adminBlogsLoading, setAdminBlogsLoading] = useState(false);

  const blogSubmit = async (blog) => {
    setIsFetching(true);
    const url = `${urlEndpoint}/blogs/blog-submit`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    const responseJSON = await response.json();
    setIsFetching(false);
    return responseJSON;
  };

  const deleteBlog = async (blogId) => {
    setAdminBlogsLoading(true);
    const url = `${urlEndpoint}/admin/delete-blog/${blogId}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    const responseJSON = await response.json();
    setAdminBlogsLoading(false);
  };

  useEffect(() => {
    const fetchAdminBlogList = async () => {
      const apiResponse = await fetch(`${urlEndpoint}/admin/blog-list`);
      const json = await apiResponse.json();
      setAdminBlogList(json);
      return;
    };
    fetchAdminBlogList();
  }, [adminBlogsLoading]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${urlEndpoint}/blogs/all-blogs?sortField=${sortField}&sortOrder=${sortOrder}&filterField=${filterField}&filterValue=${filterValue}&limit=${limit}&page=${page}`;
      const apiResponse = await fetch(url);
      const apiJSON = await apiResponse.json();
      setServerJSON(apiJSON);
      return;
    };
    fetchData();
  }, [sortField, sortOrder, filterField, filterValue, limit, page, isFetching]);
  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <BlogsPage
              blogs={serverJSON.message}
              sortField={sortField}
              setSortField={setSortField}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              filterField={filterField}
              setFilterField={setFilterField}
              filterValue={filterValue}
              setFilterValue={setFilterValue}
              limit={limit}
              setLimit={setLimit}
              page={page}
              setPage={setPage}
            />
          }
        ></Route>
        <Route
          path="/post-blog"
          element={<PostBlogPage blogSubmit={blogSubmit} />}
        />
        <Route
          path="/blog-manager"
          element={
            <BlogManager
              adminBlogList={adminBlogList.message}
              deleteBlog={deleteBlog}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
