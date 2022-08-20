import React from "react";
import { Link } from "react-router-dom";
import logo from '../../img/logo.png';

const Navbar = () => {
  return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img src={logo} alt="" />
        </Link>
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
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="#fearuture">
              Features
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="#course">
              Courses
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="#faqs">
              Faqs
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/login">
              LogIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
