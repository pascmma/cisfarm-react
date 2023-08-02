import React from "react";
import img from "../imagenes/img.png";
import { Carousel } from "react-bootstrap";

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
        titulo: "Coodinaodr",
        nombre: "Nombre y apellidos",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    
    // Agrega más objetos de acuerdo al número de diapositivas que necesites
  ];

const Staff = ()=>{
    return(
        <>
        <Carousel>
      {data.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="container bg-white rounded" style={{width:"500px"}}>
            <div className="row">
              <div className="col-5 rounded">
                <img src={slide.imagen} className="img-fluid" alt={`slide-${index}`} />
              </div>
              <div className="col-7 border rounded">
                <h1 className="text-warning">{slide.titulo}</h1>
                <h1 className=" ">{slide.nombre}</h1>
    
                <p className=" lead ">{slide.descripcion} </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
        </>
    );
}

export default Staff;