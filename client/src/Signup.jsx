import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        if (result.data != "already present") {
          navigate("/login");
        } else {
          alert("Already registered with this email, please login...");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div classNameName="form-div mx-auto">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="mb-2">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        already have an account?
        <Link to="/login" classNameName="ms-1">
          <i classNameName="t" >login</i>
        </Link>
        <button type="submit" className="btn btn-outline-dark mt-3 w-100">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
