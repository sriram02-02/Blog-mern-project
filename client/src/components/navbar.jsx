import React, { useEffect } from "react";
import my_image from "./account.jpg";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


function Navbar() {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
    navigate(0);
  }

  const handlePost = () => {
    navigate("/createPost");
    navigate(0);
  }

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
    navigate(0);
  };

  return (
    <div className="pt-5">
      <div
        class="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        // aria-hidden="true"
      >
        <div class="modal-dialog mt-5 pt-4 pe-4 me-5">
          <div class="modal-content">
            <div class="modal-body">
              <button className="btn btn-outline-dark mb-2 w-100" onClick={handleProfile}>
                Profile
              </button>
              <br />
              <button className="btn btn-outline-dark mb-2 w-100" onClick={handlePost}>
                Create Post
              </button>
              <br />
              <button
                className="btn btn-outline-dark mb-2 w-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="/home">
            <img className="logo" src={logo}></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link fc active p-3" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fc p-3" href="#">
                  Pages
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fc p-3" href="#">
                  Explore
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fc p-3" href="#">
                  About
                </a>
              </li>
            </ul>
            <div
              className="right-button"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img className="account" src={my_image}></img>
              <p className="respo-acc-btn mb-0">My Account</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
