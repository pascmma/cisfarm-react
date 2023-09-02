import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imagenes/img3.png";
import './header.css';
import { IoMenu } from 'react-icons/io5';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // Nuevo estado para el submenú

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const styleMenu = {
    boxShadow: 'none',
  };

  const subMenuStyle = {
    display: isSubMenuOpen ? 'block' : 'none', // Mostrar u ocultar el submenú según el estado
    color: "white",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <Link to="/cisfarm-react">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={handleNavToggle}
          style={styleMenu}
        >
          <IoMenu className="text-white d-flex flex-grow-1" />
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
            <span // Agregar un elemento de span para el enlace "Metanima"
              className="nav-item nav-link text-white"
              onClick={handleSubMenuToggle} // Manejar la apertura/cierre del submenú
            >
              Metanima
              <div className="sub-menu" style={subMenuStyle}>
                <Link to="/cisfarm-react/Metanima/metanima" className="sub-menu-item text-white">Metanima</Link>
                <br/>
                <Link to="/cisfarm-react/Metanima/curso1" className="sub-menu-item text-white">Curso 1</Link>
                {/* Agrega más enlaces de cursos según sea necesario */}
              </div>
            </span>
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
