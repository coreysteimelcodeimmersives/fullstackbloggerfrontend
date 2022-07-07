import * as React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import BlogsPage from "./Pages/Blogs";

const urlEndpoint = "http://localhost:4000";

const App = () => {
  const [serverJSON, setServerJSON] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await fetch(`${urlEndpoint}/blogs/all-blogs`);
      const apiJSON = await apiResponse.json();
      setServerJSON(apiJSON);
      return;
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Routes>
        {serverJSON && (
          <Route path="/blogs" element={<BlogsPage blogs={serverJSON} />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
