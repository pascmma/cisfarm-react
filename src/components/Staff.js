import React from "react";
import img from "../assets/imagenes/sin_back.png";
import { Carousel } from "react-bootstrap";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

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

const Staff = (props) => {



  return (
    <>
      <br />
      <br />
      <br />
      <h1 className="display-5 text-warning text-center"> STAFF</h1>
      <br />
      <br />
      <br />
      <Carousel prevIcon = <GrLinkPrevious /> nextIcon=<GrLinkNext /> >
        {props.datos.staff.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="container bg-white rounded" style={{ width: "100%" }}>
              <div className="row">
                <div className="col-12 col-md-4 d-none d-md-block "  >
                  <img src={require(`../assets/imagenes/${item.imagen}`)} className="img-fluid" alt={`slide-${index}`} style={{ width: "50%", borderRadius: "50%", background: "blue", marginLeft: "11em" }} />
                </div>
                <div className="col-12 d-md-none">
                  {/* Esta imagen se muestra solo en pantallas pequeñas */}
                  <img src={require(`../assets/imagenes/${item.imagen}`)} className="img-fluid" alt={`slide-${index}`} style={{ width: "50%", borderRadius: "50%", background: "blue", marginLeft: "5em", marginBottom:"1em" }} />
                </div>
                <div className="col-12 col-md-7 " >
                  <h1 className="text-primary text-md-start text-center ">{item.cargo}</h1>
                  <h3 className="text-primary text-md-start text-center">{item.nombres} y {item.apellidos}</h3>

                  <p className="text-primary mt-5 text-md-start text-center lead px-4">{item.parrafo}</p>

                </div>

              </div>
            </div>
            <br /><br />
          </Carousel.Item>
        ))}
      </Carousel>
      <br /> <br /><br />
    </>
  );
}

export default Staff;
