import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imagenes/img3.png";
import './header.css';
import { IoMenu } from 'react-icons/io5';
import metanimaLogo from "../imagenes/metanimaLogo.png";

// importar objetso para ver el tamano
import {data} from '../objetos/ObjetoCursoFarmacologia';



const Header = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // submenu metanima
  const [subMenuCursos, setSubMenuCursos] = useState(false); // submenu cursos
  const [submenuAcademia, setSubMenuAcademia] = useState(false); //submenu academia
  const [logoMetanima, setLogoMetanima] = useState(false); //cambio de logo por metanima


  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

const handleAcademia = () =>{
  setSubMenuAcademia(!submenuAcademia);
  setIsSubMenuOpen(false);
  setSubMenuCursos(false);
}


  const handleCursos = () => {
    setSubMenuCursos(!subMenuCursos);
    setIsSubMenuOpen(false);
    setSubMenuAcademia(false);
  }

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
    setSubMenuAcademia(false);
    setSubMenuCursos(false);
    handleMetanimaLogo();
    
  };
  const handleMetanimaLogo = () => {
    setLogoMetanima(!logoMetanima);
  };

  const styleMenu = {
    boxShadow: 'none',
    position:"relative",
    marginTop:"-2.5em"
  };

  const subMenuStyleMetamina = {
    display: isSubMenuOpen ? 'block' : 'none', // Mostrar u ocultar el submenú según el estado
    color: "white",
    backgroundImage: "linear-gradient(90deg, rgba(11,47,89,1) 0%, rgba(148,105,105,1) 87%)",
    WebkitBoxShadow: "1px 0px 10px 7px rgba(27,26,102,0.75)",
    MozBoxShadow: "-1px 0px 10px 7px rgba(27,26,102,0.75)",
    boxShadow: "-1px 0px 10px 7px rgba(27,26,102,0.75)",
    borderRadius: "10px",
    zIndex:"120"
  };


  const subMenuStyleCursos = {
    display: subMenuCursos ? 'block' : 'none', // Mostrar u ocultar el submenú según el estado
    color: "white",
    backgroundImage: "linear-gradient(90deg, rgba(129,131,142,1) 0%, rgba(63,98,140,1) 91%)",
    WebkitBoxShadow: "1px 0px 10px 7px rgba(27,26,102,0.75)",
    MozBoxShadow: "-1px 0px 10px 7px rgba(27,26,102,0.75)",
    boxShadow: "-1px 0px 10px 7px rgba(27,26,102,0.75)",
    borderRadius: "10px",
    zIndex:"120"
  };

  const subMenuStyleQuienes = {
    display: submenuAcademia ? 'block' : 'none', // Mostrar u ocultar el submenú según el estado
    color: "white",
    backgroundImage: "linear-gradient(90deg, rgba(129,131,142,1) 0%, rgba(63,98,140,1) 91%)",
    WebkitBoxShadow: "1px 0px 10px 7px rgba(27,26,102,0.75)",
    MozBoxShadow: "-1px 0px 10px 7px rgba(27,26,102,0.75)",
    boxShadow: "-1px 0px 10px 7px rgba(27,26,102,0.75)",
    borderRadius: "10px",
    zIndex:"120"
  };


  return (
    <>
      <div className="container " >
        <nav className="navbar navbar-expand-lg navbar-light "  >
          <Link to="/" className="nav-item nav-link text-white ">
            <img className="" style={{ width: "30%", }} src={logoMetanima? metanimaLogo : logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler border-0 ms-auto"
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
              <Link to="/" className="nav-item nav-link text-white  ">
                <h6 className=" sobre pt-2 pb-1 px-4  "> Inicio</h6>

              </Link>
              <Link
                to="/Quienes"
                className="nav-item nav-link text-white   "

              >
                <h6 className="sobre  pt-2 pb-2 px-3" style={{whiteSpace:"nowrap"}}>¿Quienes somos?</h6>

              </Link>

              <span // Agregar un elemento de span para el enlace "Metanima"
                className="nav-item nav-link text-white " 
                onClick={handleCursos}
                onMouseEnter={()=> setSubMenuCursos(true)}
                onMouseLeave={()=> setSubMenuCursos(false)}
                style={{}}
                
              >
                <h6 className="px-3 py-2 sobre">Cursos </h6>

                <div className="sub-menu  m-2 p-3" style={{...subMenuStyleCursos, position:"absolute"}}>
                {
                  data.map((item,index)=>(
                    <div>
                      <Link to={`/cursos/${item.titulo1}`} className="sub-menu-item text-white">{item.titulo1}</Link>
                    </div>
                  ))
                }


                </div>
              </span>


              <span // Agregar un elemento de span para el enlace "Metanima"
                className="nav-item nav-link text-white"
                onClick={handleAcademia}
                onMouseEnter={()=> setSubMenuAcademia(true)}
                onMouseLeave={()=> setSubMenuAcademia(false)}
              >
                <h6 className=" sobre px-3 py-2" style={{whiteSpace:"nowrap"}}>Academia Q.F. </h6>

                <div className="sub-menu  m-2 p-3" style={{...subMenuStyleQuienes,position:"absolute"}}>
                  <Link to="/enafb" className="sub-menu-item text-white">ENAFB</Link>
                  <br />
                  <Link to="/residentado" className="sub-menu-item text-white">Residentado</Link>
                  <br/>
                  <Link to="/menu" className="sub-menu-item text-white">Academia QF</Link>
                  {/* Agrega más enlaces de cursos según sea necesario */}
                </div>
              </span>
              
              
              <span // Agregar un elemento de span para el enlace "Metanima"
                className="nav-item nav-link text-white"
                onClick={handleSubMenuToggle} // Manejar la apertura/cierre del submenú
                onMouseEnter={()=> setIsSubMenuOpen(true)}
                onMouseLeave={()=> setIsSubMenuOpen(false)}
              >
                <h6 className=" sobre px-3 py-2">Metanima </h6>

                <div className="sub-menu m-2 p-3" style={{...subMenuStyleMetamina,position:"absolute"}}>
                  <Link to="/Metanima/metanima" className="sub-menu-item text-white" onClick={()=>{handleMetanimaLogo()}}>Metanima</Link>
                  <br />
                  <Link to="/Metanima/curso1" className="sub-menu-item text-white">Curso 1</Link>
                  {/* Agrega más enlaces de cursos según sea necesario */}
                </div>
              </span>
              <Link
                to="/Blogs"
                className="nav-item nav-link text-white"
              >
                <h6 className=" sobre px-3 py-2">Blogs </h6>

              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
// 