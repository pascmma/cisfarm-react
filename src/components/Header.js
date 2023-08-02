import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import logo from "../imagenes/img3.png";
import './header.css';

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <Link to="/cisfarm-react">
            <img className="logo" src={logo}/>
        </Link>
      
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/cisfarm-react" className="nav-item nav-link text-white">
              Inicio 
            </Link>
            <Link to="/cisfarm-react/Quienes" className="nav-item nav-link text-white">
              ¿Quienes somos? 
            </Link>
            <Link to="/cisfarm-react/Menu" className="nav-item nav-link text-white">
              Academia Q.F. 
            </Link>
            <Link to="/cisfarm-react/Cursos" className="nav-item nav-link text-white">
              Cursos 
            </Link>
            <Link to="/cisfarm-react/Blogs" className="nav-item nav-link text-white">
              Blogs 
            </Link>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
