import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imagenes/img3.png";
import './header.css';
import { IoMenu } from 'react-icons/io5';

const Header = (props) => {
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
    backgroundImage:"linear-gradient(90deg, rgba(11,47,89,1) 0%, rgba(148,105,105,1) 87%)",
  WebkitBoxShadow: "1px 0px 10px 7px rgba(27,26,102,0.75)",
  MozBoxShadow: "-1px 0px 10px 7px rgba(27,26,102,0.75)",
  boxShadow: "-1px 0px 10px 7px rgba(27,26,102,0.75)",
  borderRadius:"10px"
  };
  
  

  return (
    <>
    <div className="container border" >
      <nav className="navbar navbar-expand-lg navbar-light "  >
        <Link to="/cisfarm-react">
          <img className="" style={{width:"30%", marginRight:"35em"}} src={logo} alt="Logo"  />
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
              to="/cisfarm-react/Cursos"
              className="nav-item nav-link text-white"
            >
              Cursos
            </Link>
            <Link
              to="/cisfarm-react/Menu"
              className="nav-item nav-link text-white"
            >
              Academia Q.F.
            </Link>
            <span // Agregar un elemento de span para el enlace "Metanima"
              className="nav-item nav-link text-white"
              onClick={handleSubMenuToggle} // Manejar la apertura/cierre del submenú
            >
              Metanima
              <div className="sub-menu  m-3 p-3" style={subMenuStyle}>
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
      </div>
    </>
  );
};

export default Header;
