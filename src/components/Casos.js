import React from "react";
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png'; // Import additional images as needed
import { Carousel, CarouselItem } from "react-bootstrap";
import imagen7 from '../imagenes/img7.png';

const casosData = [
  {
    id: 1,
    texto:"Actualmente contamos con el 40% de ingresantes en los primeros puestos ",
    parrafo:`Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat.`,
    imagen: imagen7,
    puesto: "1 er",
    nombres: " Nombres y",
    apellidos:"Apellidos ",
    especialidad: "Quimico farmaceutico",
  },
  {
    id: 2,
     texto:"Actualmente contamos con el 50% de ingresantes en los primeros puestos ",
parrafo:`Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat.`,
    imagen: imagen7,
    puesto: "2 do",
    nombres: " Nombres y",
    apellidos:"apellidos",
    especialidad: "Quimico farmaceutico",

  },
  
];
const Casos = () => {
  return (
    <>
<br/><br/><br/><br/><br/><br/>
    <Carousel>
    {casosData.map((item,index)=>(
      <Carousel.Item>

        <div className="container my-4 " style={{backgroundImage:"linear-gradient(270deg, rgba(23,31,105,1) 0%, rgba(0,176,255,1) 100%)"}}>
      <div className="row  my-3" >
        <h3 className="text-warning pt-5"> Casos de Exito</h3>
      </div>
      <div className="row my-5 ">
        <div className="col mb-5 mx-5 mt-2 " style={{textAlign:"justify",fontSize:"0.5em"}}>
          <p className="text-white ">{item.texto} </p>
          <br/><br/>
          <p className="text-white text-xs">{item.parrafo}</p>
        </div>
        <div className="col ">
        <img src={imagen7} className="img-fluid "/>

        </div>

        <div className="col" style={{ textAlign: "left" }}>
  <h1 className="display-1 text-warning" style={{ fontSize: "3rem" }}>{item.puesto}</h1>
  <h2 className="text-warning" style={{ fontSize: "1.5rem" }}>Puesto</h2>
  <h6 className="text-white" style={{ fontSize: "1rem" }}>{item.nombres}</h6>
  <h6 className="text-white" style={{ fontSize: "1rem" }}> {item.apellidos}</h6>
  <h6 className="text-warning" style={{ fontSize: "1rem" }}>{item.especialidad}</h6>
</div>
      </div>
    </div>
      </Carousel.Item>
      ))}
    </Carousel>
    </>
  );
}

export default Casos;
