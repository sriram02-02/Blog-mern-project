import React from "react";
import Card from "./components/card";
import logo from "../src/components/logo.png";

function LandingPage() {
  return (
    <div>
      
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
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

      // main content
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}

export default LandingPage;
