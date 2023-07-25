import React from "react";
import Bordtemp from "./Bordtemp";
import "./nav.css";
import imagen16 from "../imagenes/img16.png";
import Footer from "./Footer";

function Blogs() {
  return (
    <>
      <div className="bg-image">
        <h1>POSTs recientes</h1>
        <br />
        <br />
        <br />
        <br />
        <div className="cards-bords">
          <Bordtemp />
        </div>
        <br />
        <br />
        <br />

        <br />
      </div>

      <h1 className="">Todos los posts</h1>
      <div className="row">
        <div className="col-8"></div>
        <div className="col-4"></div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card my-3 " style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={imagen16} style={{ width: "100%" }} />
              <h6 className="card-subtitle mb-2">
                nombre completo de la noticia1
              </h6>
              <p className="card-text text-white">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-outline-light">
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-3 " style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={imagen16} style={{ width: "100%" }} />
              <h6 className="card-subtitle mb-2">
                nombre completo de la noticia1
              </h6>
              <p className="card-text text-white">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-outline-light">
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-3 " style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={imagen16} style={{ width: "100%" }} />
              <h6 className="card-subtitle mb-2">
                nombre completo de la noticia1
              </h6>
              <p className="card-text text-white">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-outline-light">
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-3 " style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={imagen16} style={{ width: "100%" }} />
              <h6 className="card-subtitle mb-2">
                nombre completo de la noticia1
              </h6>
              <p className="card-text text-white">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-outline-light">
                Ver mas
              </button>
            </div>
          </div>
        </div>

        <div className="row">
        <div className="col">
          <div className="card my-3 " style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={imagen16} style={{ width: "100%" }} />
              <h6 className="card-subtitle mb-2">
                nombre completo de la noticia1
              </h6>
              <p className="card-text text-white">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-outline-light">
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-3 " style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={imagen16} style={{ width: "100%" }} />
              <h6 className="card-subtitle mb-2">
                nombre completo de la noticia1
              </h6>
              <p className="card-text text-white">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-outline-light">
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-3 " style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={imagen16} style={{ width: "100%" }} />
              <h6 className="card-subtitle mb-2">
                nombre completo de la noticia1
              </h6>
              <p className="card-text text-white">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-outline-light">
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-3 " style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={imagen16} style={{ width: "100%" }} />
              <h6 className="card-subtitle mb-2">
                nombre completo de la noticia1
              </h6>
              <p className="card-text text-white">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-outline-light">
                Ver mas
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Blogs;
