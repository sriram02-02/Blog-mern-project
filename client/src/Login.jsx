import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data.msg === "Success") {
          Cookies.set("token", result.data.token);
          navigate("/home");
        } else {
          alert("Invalid credentials, please register...");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="form-div mx-auto">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div class="mb-2">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="mb-2">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        doesn't have an account?
        <Link to="/register" className="ms-1">
          <i className="t">register</i>
        </Link>
        <button type="submit" class="btn btn-dark mt-3 w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
