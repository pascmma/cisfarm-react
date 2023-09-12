import React from "react";
import img from "../imagenes/img.png";
import { Carousel } from "react-bootstrap";
import {GrLinkNext, GrLinkPrevious} from "react-icons/gr";

const data = [
    {
      imagen: img,
      titulo: "CEO",
      nombre: "Nombre y apellidos",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        imagen: img,
        titulo: "COO",
        nombre: "Nombre y apellidos",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        imagen: img,
        titulo: "Coordinador",
        nombre: "Nombre y apellidos",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    
    // Agrega más objetos de acuerdo al número de diapositivas que necesites
  ];

const Staff = ()=>{



    return(
        <>
        <br/>
        <br/>
        <br/>
        <h1 className="display-4 text-warning"> STAFF</h1>
        <br/>
        <br/>
        <br/>
        <Carousel prevIcon=<GrLinkPrevious/> nextIcon=<GrLinkNext/> >
      {data.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="container bg-white rounded" style={{width:"700px"}}>
            <div className="row">
              <div className="col-5 ">
                <img src={slide.imagen} className="img-fluid" alt={`slide-${index}`} style={{width:"70%"}} />
              </div>
              <div className="col-7 ">
                <h1 className="text-warning">{slide.titulo}</h1>
                <h1 className="text-primary ">{slide.nombre}</h1>
    
                <p className="text-primary">{slide.descripcion} </p>
              </div>
            </div>
          </div>
          <br/><br/>
        </Carousel.Item>
      ))}
    </Carousel>
    <br/> <br/><br/>
        </>
    );
}

export default Staff;
