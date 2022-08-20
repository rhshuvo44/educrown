import React from "react";
import logo from '../../img/logo.png';

const Navbar = () => {
  return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#h">
          <img src={logo} alt="" />
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
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#h">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#h">
              Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#h">
              Courses
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#h">
              Faqs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#h">
              LogIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
