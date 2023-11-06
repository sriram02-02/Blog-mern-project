import { React, useState , useEffect} from "react";
import Card from "./components/Card";
import logo from "../src/components/logo.png";
import axios from "axios";
import NoPost from "./components/NoPost";

function LandingPage() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:3001/post/").then((res) => {
      setPosts(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return "loading ...";
  }
  return (
    <div className="pt-5">
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
        <div class="container d-flex">
          <a class="navbar-brand" href="#">
            <img className="logo" src={logo}></img>
          </a>
          <form action="/login" method="get">
            <button class="btn btn-outline-dark  home-login-btn" type="submit">
              Log In
            </button>
          </form>
        </div>
      </nav>

      {posts.length > 0 ?<Card posts={posts}/>:<NoPost/>}
    </div>
  );
}

export default LandingPage;
