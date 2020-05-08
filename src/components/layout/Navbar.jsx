import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a href="#" className="navbar-brand">
        Quiz app
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="m-2 text-decoration-none">
              Quiz
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/setting" className="m-2 text-decoration-none">
              Setting
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
