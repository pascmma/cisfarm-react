import React from "react";
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png'; // Import additional images as needed
import { Carousel, CarouselItem } from "react-bootstrap";
import imagen7 from '../imagenes/img7Recortada.png';
import imagenCaso1 from '../assets/Alicia Esmeralda Triviños Ancachi.png';
import imagenCaso2 from '../assets/Robert Anthony Dietz Maravi.png';
import imagenCaso3 from '../assets/Ruth Jenny Lucas Vargas.png';

const casosData = [
  {
    id: 1,
    texto: "Actualmente contamos con el 40% de ingresantes en los primeros puestos ",
    parrafo: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat.`,
    imagen: imagenCaso1,
    puesto: "1",
    dimi:"er",
    nombres: " Nombres y",
    apellidos: "Apellidos ",
    especialidad: "Quimico farmaceutico",
  },
  {
    id: 2,
    texto: "Actualmente contamos con el 50% de ingresantes en los primeros puestos ",
    parrafo: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat.`,
    imagen: imagenCaso2,
    puesto: "1",
    dimi:"er",
    nombres: " Nombres y",
    apellidos: "apellidos",
    especialidad: "Quimico farmaceutico",

  },
  {
    id: 2,
    texto: "Actualmente contamos con el 50% de ingresantes en los primeros puestos ",
    parrafo: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat.`,
    imagen: imagenCaso3,
    puesto: "1",
    dimi:"er",
    nombres: " Nombres y",
    apellidos: "apellidos",
    especialidad: "Quimico farmaceutico",

  },

];
const Casos = (props) => {
  return (
    <>
      <br /><br /><br /><br /><br /><br />
      <Carousel>
        {props.datos.casos.map((item, index) => (
          <Carousel.Item>

            <div className="container my-4 " style={{ backgroundImage: "linear-gradient(270deg, rgba(23,31,105,1) 0%, rgba(0,176,255,1) 100%)" }}>
              <div className="row my-3" >
                <h3 className="text-warning pt-5 text-center"> Casos de Exito</h3>
              </div>
              <div className="row my-5 " style={{ padding: "2.5em" }}>
                <div className="col-12 col-sm-4 mb-5" style={{ textAlign: "left", fontSize: "0.9em" }}>
                  <p className="text-white " style={{fontSize:"2em"}}>{item.texto}  </p>
                  <br /><br/><br /><br/>
                  <p className="text-white text-xs" style={{fontSize:"1.3em", textAlign:"justify"}}>{item.parrafo}</p>
                </div>
                <div className="col-12 col-sm-4" >
                  <img src={require(`../assets/${item.imagen}`)} style={{width:"48vh !important", height:"47vh !important", boxShadow:" 5px 5px 10px rgba(0, 0, 0, 0.3)"}} className="img-fluid " />

                </div>

                <div className="col-12 col-sm-3  mx-auto" style={{  margin:"0 auto" }}>
                  <h1 className="display-1 text-warning" style={{ fontSize: "7em", textAlign:"justify", fontWeight:"bold" }}>{item.puesto} <sup className="display-3 " style={{verticalAlign:"0.2em", fontWeight:"bold", marginLeft:"-0.6em"}}> {item.dimi}</sup> </h1>
                  <h2 className="text-warning" style={{ fontSize: "2.5em", textAlign:"justify" }}>Puesto</h2>
                  <h6 className="text-white" style={{ fontSize: "1em", textAlign:"justify" }}>{item.nombres}</h6>
                  <h6 className="text-white" style={{ fontSize: "1em", textAlign:"justify" }}> {item.apellidos}</h6>
                  <h6 className="text-warning" style={{ fontSize: "1em", textAlign:"justify" }}>{item.especialidad}</h6>
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
