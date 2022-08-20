import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="big-footer" className="container-fluid p-5 text-white">
        <div className="row p-5">
          <div className="col-md-5">
            <img src={logo} alt="" />
            <p className="mt-5">
              Saudi Arabia has been accused of using anti-terror laws to
              suppress free expression and failing to carry out independent
              inquiries into its Yemen.
            </p>
          </div>
          <div className="col-md-2">
            <ul type="none">
              <li>
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="about">
                  Sercices
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="about">
                  Team
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="about">
                  Support
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="about">
                  Privicy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-5">
            <h2>Subscribe Our Newsletter</h2>
            <p className="my-4">
              Doubtful for answered one fat indulged margaret sir shutters
              together. Ladies so in wholly .
            </p>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="abc@gmail.com"
                aria-label="Recipient's username"
                aria-describedby="button-subscribe"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-subscribe"
              >
                subscribe{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
