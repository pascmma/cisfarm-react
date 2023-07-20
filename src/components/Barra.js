import React from "react";

function Barra() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/Inicio">
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
                <a class="nav-link active" aria-current="page" href="/Quienes">
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
                <a class="nav-link" href="/Menu">
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
    </>
  );
}


export default Barra;