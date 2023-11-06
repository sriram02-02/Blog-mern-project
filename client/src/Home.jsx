import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import NoPost from "./components/NoPost";
import Navbar from "./components/navbar";

function Home() {
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/");
      navigate(0);
    }
  }, []);

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:3001/post/").then((res) => {
      setPosts(res.data.reverse());
      setLoading(false);
    });
  }, []);

  if (loading) {
    return "loading ...";
  }

  return (
    <div>
      <Navbar />
      {posts.length > 0 ? <Card const data= {posts} posts={posts} /> : <NoPost />}
    </div>
  );
}

export default Home;
