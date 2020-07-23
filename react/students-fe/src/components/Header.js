import React, { Component } from "react";
import Logo from "./image.png";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Consultadd
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            <span class="navbar-text">Training</span>
          </div>
        </nav>
        <div className="text-center">
          <img
            src={Logo}
            width="500"
            className="img-thumbnail"
            style={{ marginTop: "20px" }}
          ></img>

          <h5>
            <i>Consultadd</i>
          </h5>
          <h1>Crud Application</h1>
        </div>
      </div>
    );
  }
}

export default Header;
