import React from "react";
import { Carousel } from "react-bootstrap";
import imagen from "../imagenes/img16.png";
import Slider from "react-slick";

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

  const noticias = [
    {
      img: imagen,
      nombre: "nombre completo de la noticia",
      fecha: "Fecha de lanzamiento",
    },
    {
      img: imagen,
      nombre: "nombre completo de la noticia",
      fecha: "Fecha de lanzamiento",
    },
    {
      img: imagen,
      nombre: "nombre completo de la noticia",
      fecha: "Fecha de lanzamiento",
    },
    {
      img: imagen,
      nombre: "nombre completo de la noticia",
      fecha: "Fecha de lanzamiento",
    },
    {
      img: imagen,
      nombre: "nombre completo de la noticia",
      fecha: "Fecha de lanzamiento",
    },
    {
      img: imagen,
      nombre: "nombre completo de la noticia",
      fecha: "Fecha de lanzamiento",
    },
    {
      img: imagen,
      nombre: "nombre completo de la noticia",
      fecha: "Fecha de lanzamiento",
    },
    {
      img: imagen,
      nombre: "nombre completo de la noticia",
      fecha: "Fecha de lanzamiento",
    },
  ];

  const estilo = {
    backgrounImage:
      "linear-gradient(270deg, rgba(0,26,137,1) 3%, rgba(0,104,225,1) 62%)",
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "1px",
    slidesToShow: 5,
    speed: 500,
    focusOnSelect: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 620,
        settings: {
          centerMode: true,
          centerPadding: "70px",
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="rounded"
        style={{
          backgroundImage:
            "linear-gradient(270deg, rgba(0,26,137,1) 3%, rgba(0,104,225,1) 62%)",
        }}
      >
        <Carousel>
          {data.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="container ">
                <div className="row my-5">
                  <div className="col-md-6">
                    <img
                      src={slide.img}
                      style={{
                        borderRadius: "90px",
                        height: "100%",
                        width: "80%",
                      }}
                      className="img-fluid "
                      alt={`slide-${index}`}
                    />
                  </div>
                  <div className="col-md-6 rounded d-flex align-items-center">
                    <div>
                      <h1 className="text-start text-white">{slide.titulo}</h1>
                      <p className="lead text-white text-start my-5">
                        {slide.contenido}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="bg-light">
        <h2 className=" text-center text-primary" style={{ paddingTop: "4em" }}>
          {" "}
          <strong>Todos los Post </strong>
        </h2>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <button
                className="lead mx-2 mx-sm-5 mx-lg-5 px-4 px-sm-5 px-lg-5 bg-primary text-white dropdown-toggle"
                style={{ borderRadius: "50px", width: "100%" }}
              >
                Año
              </button>
            </div>
            <div className="col-sm-6 col-lg-3">
              <button
                className="lead mx-2 mx-sm-5 mx-lg-5 px-4 px-sm-5 px-lg-5 bg-primary text-white dropdown-toggle"
                style={{ borderRadius: "50px", width: "100%" }}
              >
                Meses
              </button>
            </div>
            <div className="col-sm-12 col-lg-6">
              <button
                className="lead mx-2 mx-sm-5 mx-lg-5 px-4 px-sm-5 px-lg-5 bg-primary text-white dropdown-toggle"
                style={{ borderRadius: "50px", width: "100%" }}
              >
                Categoria
              </button>
            </div>
          </div>



          <div className="container border ">
            <div className="row">
              {noticias.map((noticia, index) => (
                <div key={index} className="col-12 col-md-3 border ">
                  <div
                    className="card my-3 mx-auto  "
                    style={{
                      width: "13rem",
                      borderRadius: "50px",
                      border: "solid blue 13px",
                    }}
                  >
                    <div className="card-body">
                      <img
                        src={imagen}
                        style={{
                          width: "90%",
                          height: "60%",
                          borderRadius: "40px",
                        }}
                      />
                      <h6 className="card-subtitle my-2 text-primary text-start">
                        {noticia.nombre}
                      </h6>
                      <p className="card-text text-start text-primary">
                        {noticia.fecha}
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary"
                        style={{ marginLeft: "35%", borderRadius: "20px" }}
                      >
                        Ver mas
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-primary text-center display-5" style={{marginTop:"2em", marginBottom:"1em"}}>Sabias que?</h3>
      

      <div className="container ">
        <Slider {...settings}>
          {noticias.map((item, index) => (
            <div className="col ">
              <div
                className="card my-3 mx-auto"
                style={{
                  width: "13em",
                  height: "25em",
                  borderRadius: "50px",
                  border: "solid blue 13px",
                }}
              >
                <div className="card-body">
                  <img
                    src={imagen}
                    style={{
                      width: "100%",
                      height: "50%",
                      borderRadius: "40px",
                    }}
                  />
                  <h6 className="card-subtitle my-2 text-primary text-start">
                    Nombre completo de la noticia1
                  </h6>
                  <p className="card-text text-start text-primary">
                    Fecha de lanzamiento{" "}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginLeft: "35%", borderRadius: "20px" }}
                  >
                    Ver mas
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Prueba;
