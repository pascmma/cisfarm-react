import React, { useState } from "react";
import imagen16 from "../imagenes/img16.png";
import imagen10 from "../imagenes/img10.png";
import { Carousel } from "react-bootstrap";
import './contenedor.css';


import imagenAsesor1 from '../assets/ASESORES/Christopher_Davila Mendoza.png';
import imagenAsesor2 from '../assets/ASESORES/David_James Vásquez Díaz.png';
import imagenAsesor3 from '../assets/ASESORES/Guido_Alonso Saldón Beltran.png'; 
import imagenAsesor4 from '../assets/ASESORES/Mario_Cavero Medina.png';
import imagenAsesor5 from '../assets/ASESORES/Nelber_Fernandez Flores.png';

import imagen6 from "../imagenes/img6.png";
import Slider from "react-slick";

const Bord=()=> {

  const data = [
    {
      imagen: imagenAsesor1,
      titulo: "Asesor Academico",
      nombre: "Alvaro Jose",
      apellido:"Andrade Condori",
      puesto: "Quimico Farmaceutico",
      orden: "1 Puesto",
      lugar: "Lugar Farmacia Hospitalaria",
    },
    {
      imagen: imagenAsesor2,
      titulo: "Asesor Academico",
      nombre: "Alvaro Jose",
      apellido:"Andrade Condori",
      puesto: "Quimico Farmaceutico",
      orden: "1 Puesto",
      lugar: "Lugar Farmacia Hospitalaria",
    },
    {
      imagen: imagenAsesor3,
      titulo: "Asesor Academico",
      nombre: "Alvaro Jose",
      apellido:"Andrade Condori",
      puesto: "Quimico Farmaceutico",
      orden: "1 Puesto",
      lugar: "Lugar Farmacia Hospitalaria",
    },
    {
      imagen: imagenAsesor4,
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
    centerPadding:"1px",
    slidesToShow:1,
    speed:500,
    focusOnSelect: true,
    
    responsive:[
      {
        breakpoint:620,
        settings:{
          slidesToShow:1,
          infinite:true,
        
        }
      }
    ]

  };
  

  return (
    <>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <Slider {...settings} className="container">
  {data.map((slide, index) => (
    
    <div className="bord-1">
      <div className="row">
        <div className="col-lg-7 col-md-6 col-sm-12 "> 
          <img src={slide.imagen} className="img-fluid" alt={`slide-${index}`} />
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 mt-5 " style={{ textAlign: "left" }}>
          <h1 className="text-white my-3">{slide.titulo}</h1>
          <h1 className="display-5 text-info">{slide.nombre}</h1>
          <h1 className="display-5 text-info">{slide.apellido}</h1>
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
<br/>
    </>
  );
}

export default Bord;

