import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imagenes/img3.png";
import './header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };



  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <Link to="/cisfarm-react">
          <img className="logo" src={logo} alt="Logo"/>
        </Link>
        <button
          className="navbar-toggler border border-danger"
          type="button"
          onClick={handleNavToggle}
          style={{ color: "white" }}
        >
          <span className="navbar-toggler-icon" style={{}}  ></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link to="/cisfarm-react" className="nav-item nav-link text-white">
              Inicio
            </Link>
            <Link
              to="/cisfarm-react/Quienes"
              className="nav-item nav-link text-white"
            >
              ¿Quienes somos?
            </Link>
            <Link
              to="/cisfarm-react/Menu"
              className="nav-item nav-link text-white"
            >
              Academia Q.F.
            </Link>
            <Link
              to="/cisfarm-react/Cursos"
              className="nav-item nav-link text-white"
            >
              Cursos
            </Link>
            <Link
              to="/cisfarm-react/Blogs"
              className="nav-item nav-link text-white"
            >
              Blogs
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
