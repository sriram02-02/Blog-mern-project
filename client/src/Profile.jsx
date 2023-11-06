import { React, useState, useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import NoPost from "./components/NoPost";
import Navbar from "./components/navbar";

function Profile() {
  const decode = jwtDecode(Cookies.get("token"));
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:3001/post/" + decode.username).then((res) => {
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
      <h1>{posts.username}</h1>
      {posts.length > 0 ? <Card posts={posts}></Card> : <NoPost />}
    </div>
  );
}

export default Profile;
