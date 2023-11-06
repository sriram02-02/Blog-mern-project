import React, { useState } from "react";
import Navbar from "./components/navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

function CreatePost() {
  const [title, settitle] = useState("");
  const [head, sethead] = useState("");
  const [paragraph, setparagraph] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();


  const handlePost = (e) => {
    e.preventDefault();
    const decode = jwtDecode(Cookies.get("token"));
    axios.post("http://localhost:3001/post", { title, head, paragraph, photo: imageUrl, username: decode.username });
    navigate("/home");
  };

  const handleImage = (e) => {
    let file = e.target.files[0];
    uploadImage(file);
  };

  const uploadImage = (file) => {
    if (file !== null) {
      const formData = new FormData();
      formData.append("postImage", file);
      axios({
        method: "post",
        url: "http://localhost:3001/upload-image",
        data: formData,
      })
        .then((response) => {
          const { data } = response;
          console.log(data.url);
          setImageUrl(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container post-div">
        <h1 className="post-head">Create Post</h1>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Post-title
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          onChange={(e) => sethead(e.target.value)}
          value={head}
        />
      </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">
            Photo
          </label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            onChange={handleImage}
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Paragraph
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => setparagraph(e.target.value)}
            value={paragraph}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-outline-dark mt-3 w-100"
          onClick={handlePost}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
