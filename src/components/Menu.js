import React from "react";
import Barra from "./Barra";
import Casos from "./Casos";
import Bord from "./Bord";
import Card from "./Cards"
import Footer from "./Footer";


function Menu(){

    return(
        <div>
          <div className="bg-image-qa">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {" "}
            Inicio
          </a>
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  ¿Quienes somos?
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Cursos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Metamina
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Academia Q.F.
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blogs
                </a>
              </li>
            </ul>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switch-bar"
              />
              <label className="form-check-label" for="switch-bar" ON />
            </div>
          </div>
        </div>
      </nav>


      <h1 className="display-1 text-white">Cisfarm TITULO</h1>
      <p className="lead text-white" id="texto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua
      </p>

      <p className="text-white display-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua</p>

        <Card/>
        
        <button type="button" className="btn btn-primary" >Ver mas</button>

        <Card/>

        <div className="row">
            <div className="col-sm">
                <h1 className="display-2 text-white">Repaso-ENAFB</h1>
            </div>
            <div className="col-sm">
                <h1 className="display-2 text-white">Repaso-RESIDENTADO</h1>
            </div>

        </div>
        </div>
        <Footer/>
      </div>
    );
    
}

export default Menu;