import React, { useState } from "react";
import imagen16 from "../imagenes/img16.png";
import imagen10 from "../imagenes/img10.png";
import { Carousel } from "react-bootstrap";


import imagen6 from "../imagenes/img6.png";

function Bord() {

  const data = [
    {
      imagen: imagen6,
      titulo: "Título 1",
      nombre: "Nombre 1",
      puesto: "Puesto de trabajo 1",
      orden: "Orden 1",
      lugar: "Lugar 1",
    },
    {
      imagen: imagen6,
      titulo: "Título 2",
      nombre: "Nombre 2",
      puesto: "Puesto de trabajo 2",
      orden: "Orden 2",
      lugar: "Lugar 2",
    },
    // Agrega más objetos de acuerdo al número de diapositivas que necesites
  ];
  

  return (
    <>
      <Carousel>
      {data.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="container">
            <div className="row">
              <div className="col-5 border border-danger">
                <img src={slide.imagen} className="img-fluid" alt={`slide-${index}`} />
              </div>
              <div className="col-7 border border-primary">
                <h1 className="text-white">{slide.titulo}</h1>
                <h1 className="display-2 text-white">{slide.nombre}</h1>
                <h1 className="text-white">{slide.puesto}</h1>
                <br />
                <br />
                <br />
                <h2 className="text-white row-align-items-end">{slide.orden}</h2>
                <h2 className="text-white row-align-items-end">{slide.lugar}</h2>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </>
  );
}

export default Bord;

