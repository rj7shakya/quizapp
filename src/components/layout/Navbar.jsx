import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    //   <i className="fa fa-question m-2" aria-hidden="true"></i>
    //   <a className="navbar-brand" href="#">
    //     Quiz app
    //   </a>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNavAltMarkup"
    //     aria-controls="navbarNavAltMarkup"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //     <div className="navbar-nav">
    //       <Link to="/" className="m-2">
    //         Quiz
    //       </Link>
    //       <Link to="/setting" className="m-2">
    //         Setting
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
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
