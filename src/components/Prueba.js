import React from "react";
import { Carousel } from "react-bootstrap";
import imagen from "../imagenes/img16.png";

const Prueba = () => {
  const estilos = {
    maxHeight: "200px",
    height: "400px",
    width: "400px",
    border: "1px  solid #eee",
    padding: "5px",
    overflowY: "auto",
  };

  const data = [
    {
      img: imagen,
      titulo: "titulo de la noticia",
      contenido: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Lorem
      ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.Lorem
      ipsum`,
    },
    {
      img: imagen,
      titulo: "Titulo de la noticia",
      contenido: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Lorem
      ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.Lorem
      ipsum`,
    },
    {
      img: imagen,
      titulo: "Titulo de la noticia",
      contenido: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Lorem
      ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.Lorem
      ipsum`,
    },
    {
      img: imagen,
      titulo: "Titulo de la noticia",
      contenido: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Lorem
      ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.Lorem
      ipsum`,
    },
  ];

  const estilo = {
    backgroundColor: "blue",
  };

  return (
    <>
      <div className="" style={estilo}>
        <Carousel>
          {data.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="container bg-primary">
                <div className="row">
                  <div className="col-5 ">
                    <img
                      src={slide.img}
                      className="img-fluid rounded"
                      alt={`slide-${index}`}
                    />
                  </div>
                  <div className="col-7 rounded ">
                    <h1>{slide.titulo}</h1>
                    <p className="lead text-white">{slide.contenido}</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

      </div>
            <h2 className="my-5">Todos los posts</h2>
      <div className="container">
        <div className="row">
            <div className="col-3 ">
                <div className="border  rounded bg-primary text-align">
                    <p className="lead text-white">Año</p>
                </div>
            </div>
            <div className="col-3 border-danger">
            <div className="border  rounded bg-primary text-align">
                    <p className="lead text-white">Mes</p>
                </div>
            </div>
            <div className="col-6 border-danger">
                <div className="border  rounded bg-primary text-align">
                    <p className="lead text-white"> Categoria</p>
                </div>
            </div>

        </div>
        <div className="row">
        <div className="col">
          <div className="card my-3 " style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={imagen} style={{ width: "100%" }} />
              <h6 className="card-subtitle mb-2">
                nombre completo de la noticia1
              </h6>
              <p className="card-text lead">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-outline-light">
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-3 " style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={imagen} style={{ width: "100%" }} />
              <h6 className="card-subtitle mb-2">
                nombre completo de la noticia1
              </h6>
              <p className="card-text lead">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-outline-light">
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-3 " style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={imagen} style={{ width: "100%" }} />
              <h6 className="card-subtitle mb-2">
                nombre completo de la noticia1
              </h6>
              <p className="card-text lead">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-outline-light">
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-3 " style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={imagen} style={{ width: "100%" }} />
              <h6 className="card-subtitle mb-2">
                nombre completo de la noticia1
              </h6>
              <p className="card-text lead">Fecha de lanzamiento </p>
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
              <img src={imagen} style={{ width: "100%" }} />
              <h6 className="card-subtitle mb-2">
                nombre completo de la noticia1
              </h6>
              <p className="card-text lead">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-outline-light">
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-3 " style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={imagen} style={{ width: "100%" }} />
              <h6 className="card-subtitle mb-2">
                nombre completo de la noticia1
              </h6>
              <p className="card-text lead">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-outline-light">
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-3 " style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={imagen} style={{ width: "100%" }} />
              <h6 className="card-subtitle mb-2">
                nombre completo de la noticia1
              </h6>
              <p className="card-text lead">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-outline-light">
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-3 " style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={imagen} style={{ width: "100%" }} />
              <h6 className="card-subtitle mb-2">
                nombre completo de la noticia1
              </h6>
              <p className="card-text lead">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-outline-light">
                Ver mas
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Prueba;
