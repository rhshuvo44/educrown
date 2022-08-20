import { signOut } from 'firebase/auth';
import React from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from '../../img/logo.png';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logOut=()=>{
      signOut(auth);
      localStorage.removeItem('accessToken')
    }
  return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark text-uppercase">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="#fearuture">
              Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/#courses">
              Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/#faqs">
              Faqs
              </Link>
            </li>
            <li className="nav-item">

            {user ?<Link onClick={logOut} className="nav-link" aria-current="page" to="/login">
              Log out
              </Link>:<Link className="nav-link" aria-current="page" to="/login">
              LogIn
              </Link>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
