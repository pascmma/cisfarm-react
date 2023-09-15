import React, { useState } from "react";
import imagen16 from "../imagenes/img16.png";
import imagen10 from "../imagenes/img10.png";
import { Carousel } from "react-bootstrap";


import imagen6 from "../imagenes/img6.png";
import Slider from "react-slick";

const Bord=()=> {

  const data = [
    {
      imagen: imagen6,
      titulo: "Asesor Academico",
      nombre: "Alvaro Jose",
      apellido:"Andrade Condori",
      puesto: "Quimico Farmaceutico",
      orden: "1 Puesto",
      lugar: "Lugar Farmacia Hospitalaria",
    },
    {
      imagen: imagen6,
      titulo: "Asesor Academico",
      nombre: "Alvaro Jose",
      apellido:"Andrade Condori",
      puesto: "Quimico Farmaceutico",
      orden: "1 Puesto",
      lugar: "Lugar Farmacia Hospitalaria",
    },
  ];

  const settings={
    className:"center",
    centerMode:true,
    infinite:true,
    centerPadding:"60px",
    slidesToShow:1,
    speed:500,
    dots:true,

  };
  

  return (
    <>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <Slider {...settings} className="container">
  {data.map((slide, index) => (
    
    <div className="bord-1">
      <div className="row">
        <div className="col-lg-5 col-md-6 col-sm-12"> 
          <img src={slide.imagen} className="img-fluid" alt={`slide-${index}`} />
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 mt-5 " style={{ textAlign: "left" }}>
          <h1 className="text-white my-3">{slide.titulo}</h1>
          <h1 className="display-5 text-primary">{slide.nombre}</h1>
          <h1 className="display-5 text-primary">{slide.apellido}</h1>
          <h1 className="text-white">{slide.puesto}</h1>
          <br />
          <br />
          <br />
          <h2 className="text-white row-align-items-end">{slide.orden}</h2>
          <h2 className="text-white row-align-items-end">{slide.lugar}</h2>
        </div>
      </div>
    </div>
    
  ))}
</Slider>
    </>
  );
}

export default Bord;

