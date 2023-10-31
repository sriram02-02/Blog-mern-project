import React from "react";
import Card from "./components/card";
import my_image from "../src/components/account.jpg";
import logo from "../src/components/logo.png";

function Home() {
  return (
    <div className="pt-5">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog mt-5 pt-4 pe-4 me-5">
          <div class="modal-content">
            <div class="modal-body">
              <button className="btn btn-outline-dark mb-2 w-100">
                <a class="nav-link " aria-current="page" href="#">
                  Profile
                </a>
              </button>
              <br />
              <button className="btn btn-outline-dark mb-2 w-100">
                <a class="nav-link" aria-current="page" href="#">
                  Settings
                </a>
              </button>
              <br />
              <button className="btn btn-outline-dark mb-2 w-100">
                <a class="nav-link" aria-current="page" href="/">
                  Logout
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">
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
                <a class="nav-link active p-3" aria-current="page" href="#">
                  Posts
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-3" href="#">
                  Pages
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-3" href="#">
                  Explore
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-3" href="#">
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

      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Home;
