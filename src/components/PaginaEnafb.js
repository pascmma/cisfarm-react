import React from "react";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import InfoCurso from "./InfoCurso";

import Ejemplo from "./Ejemplo";

import VideoMetanima from "./VideoMetanima";
import { BiBookReader } from "react-icons/bi"
import { GiSpeaker, GiUpgrade } from "react-icons/gi"
import { AiOutlineLike } from "react-icons/ai"
import Correccion from "./CorreccionTest";
import ContenidoCursoMetanima from "./ContenidoCursoMetanima";
import imagenFondo from '../imagenes/back_enafb.png';
import { PiClockCounterClockwiseBold, PiVideoDuotone } from "react-icons/pi";
import { BsPersonSquare } from "react-icons/bs";
import ContenidoCurso from "./ContenidoCurso";


const estilo = {
  display: "inline-block",
  color: "#000000",
};


const data = {
  costo: "$ 129",
  duracion: "14,2 horas",
  lecciones: "9 lecciones",
  modalidad: "online y ritmo",
  acerca: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  beneficios: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
  requisitos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",

};

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "50%"
};

const gradientBackgroundStyle = {

  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "blue",
  zIndex: -1
};

const gradientBackgroundStyle2 = {

  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "white",
  zIndex: -1
};


const dataCurso = {
  valoracion: "50%",
  estudiantes: 300,
  nivel: "avanzado",
  idioma: "español"
};

const circleStyle = {
  width: "400px",
  height: "400px",
  borderRadius: "50%",
  backgroundColor: `#0067e0`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  zIndex: 3
};

const inputStyle = {
  maxWidth: "80%",
  margin: "10px auto"
};
const styleAbout = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "blue",
};

const PaginaEnafb = () => {
  const estilo = {
    display: "inline-block",
    color: "white",
    WebkitBoxShadow: "1px 0px 12px 12px rgba(255,255,255,0.75)",
    MozBoxShadow: "-1px 0px 12px 12px rgba(255,255,255,0.75)",
    boxShadow: "1px 0px 24px 12px rgba(255,255,255,0.75)",
  };
  const circleStyle = {
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    backgroundColor: `#0b2f59`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    zIndex: 2,
  };
  const styleAbout = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    color: "blue",
  };
  return (
    <>
      <div style={{ backgroundImage: `url(${imagenFondo})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
        <Header />

        <br /><br /><br />

        <div className="container">
          <div className="row">
            <div className="col">

          <h1 className="text-white">Programa de entrenamiento </h1>
          <h1 className="display-2 text-info">SERUMS</h1>
          <h1 className="display-2 text-warning">SUEPRINTENSIVO</h1>
            </div>
            <div className="col">
            <div className="col-sm " >
            <div className="m-5 text-white px-5" style={{ display: "inline-block", borderRadius: "80px", backgroundImage: "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(15,197,236,0.9556197478991597) 100%)" }}>
            
            </div>
            <div>
              <div className="d-flex align-items-center">
                <PiClockCounterClockwiseBold className="text-primary display-3 mx-4" />
                <div>
                  <h3 className="text-primary">duracion</h3>
                  <h4 className="text-primary">14,2 horas</h4>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center">
                <PiVideoDuotone className=" text-primary display-3 mx-4" />
                <div>
                  <h3 className="text-primary">Lecciones</h3>
                  <h4 className="text-primary">9 sesiones</h4>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center">
                <BsPersonSquare className="text-primary display-3 mx-4" />
                <div>
                  <h3 className="text-primary">Modalidad</h3>
                  <h4 className="text-primary">Online y a tu ritmo</h4>
                </div>
              </div>
              <hr />
            </div>
          </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />

        <div className="container bg-primary ">

          <div className="row m-5 p-5 ">
            <div className="col">
              <h4 className="text-warning">¿Que es el SERUMS y por que es importarte?</h4>
              <p className="lead text-white">Lorem ipsum dolor sit amet,
consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.</p>
            </div>
            <div className="col">
            <h4 className="text-warning">Metodologia de ensenanza</h4>
              <p className="lead text-white">Lorem ipsum dolor sit amet,
consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        <br/>
        <br/><br/><br/>


        <div className="row display-2">
          <div className="col-3">
            <div className="border pb-3 px-4 rounded-circle" style={estilo}>
              <AiOutlineLike  className="text-warning"/>
            </div>
            <h4 className="text-whiet m-4">Valoraciones buenas</h4>
            <p className="lead text-white">{dataCurso.valoracion}</p>
          </div>
          <div className="col-3">
            <div className="border pb-3 px-4 rounded-circle" style={estilo}>
              <BiBookReader className="text-warning"/>
            </div>
            <h4 className="text-white m-4">Estudiantes</h4>
            <p className="lead text-white">{dataCurso.estudiantes}</p>

          </div>
          <div className="col-3">
            <div className="border pb-3 px-4 rounded-circle" style={estilo}>
              <GiUpgrade className="text-warning"/>
            </div>
            <h4 className="text-white m-4"> Nivel</h4>
            <p className="lead text-white">{dataCurso.nivel}</p>
          </div>
          <div className="col-3">
            <div className="border pb-3 px-4 rounded-circle" style={estilo}>
              <GiSpeaker className="text-warning"/>
            </div>
            <h4 className="text-white m-4"> Idioma</h4>
            <p className="lead text-white">{dataCurso.idioma}</p>
          </div>
        </div>






        <div className="row bg-white">
        <Ejemplo />
          <div style={{ backgroundColor: "transparent" }}>

            <br />
            <br />
            <br />
            <h2 className="text-primary">Aprende mas en el campo de los mecanismos en accion en 3D </h2>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container">
              <div className="row ">
                <div className="col-md-6" style={{ marginTop: "5.5em" }}>
                  <div className="container" >
                    <h4 className="text-primary text-start">
                      ¿Por qué estudiar en academia Q.F.?
                    </h4>
                    <br /><br />
                    <p className="lead text-primary" style={{ textAlign: "justify" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                      ea commodo consequat.Lorem ipsum
                    </p>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="circulo " style={circleStyle}>
                    <h1 className="display-3 text-white">Matricúlate</h1>
                    <div style={{ textAlign: "center" }}>
                      <div className="my-3">
                        <input
                          type="text"
                          className="p-3"
                          style={{ textAlign: "center", width: "60%", borderRadius: "50px", backgroundImage: "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(183,198,205,0.14049369747899154) 100%)" }}
                          placeholder="Nombres y Apellidos"
                          aria-label="nombre"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div className="my-3">
                        <input
                          type="text"
                          className="p-3"
                          style={{ textAlign: "center", width: "60%", borderRadius: "50px", backgroundImage: "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(183,198,205,0.14049369747899154) 100%)" }}
                          placeholder="Correo Electrónico"
                          aria-label="correo"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div className="my-3">
                        <input
                          type="text"
                          className="p-3"
                          style={{ textAlign: "center", width: "60%", borderRadius: "50px", backgroundImage: "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(183,198,205,0.14049369747899154) 100%)" }}
                          placeholder="Teléfono y/o Celular"
                          aria-label="telefono"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <Correccion />
                      <button className="btn btn-primary bg-secondary">Enviar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />


            <div className="container">
              <div className="row">
                <div className="col-sm " >
                  <div className="m-5 text-white px-5" style={{ display: "inline-block", borderRadius: "80px", backgroundImage: "linear-gradient(287deg, rgba(11,47,89,1) 0%, rgba(164,127,40,1) 84%)" }}>
                    <div className="p-4">
                      <h4 className="fs-5">Costo</h4>
                      <h3 className="fs-1">$ 129.00</h3>
                    </div>
                  </div>
                  <div>
                    <h3>duracion</h3>
                    <h4>14,2horas</h4>
                    <hr />
                    <h3>Lecciones</h3>
                    <h4>9 sesiones</h4>
                    <hr />
                    <h3>Modalidad</h3>
                    <h4>Online</h4>
                    <hr />
                  </div>
                </div>
                <div className="col-sm " style={styleAbout}>
                  <div className="mt-5" style={{ width: "70%", textAlign: "justify" }}>
                    <br />
                    <h2 className="">Acerca del curso</h2>
                    <br />
                    <p className="lead" style={{ textAlign: "justify" }}>

                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.Lorem ipsum
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br /><br /><br /><br />
            <div className="container">
              <div className="row bg-white m-1">
                <div className="col-sm m-1 ">
                  <h1 className="text-primary text-start mb-4" style={{ marginLeft: "5%" }} >Beneficios</h1>
                  <br />

                  <ul style={{ marginLeft: "10%", textAlign: "left", width: "80%" }}>
                    <li>
                      <p className="lead text-primary"> {data.beneficios}</p>
                    </li>
                    <li>
                      <p className="lead text-primary"> {data.beneficios}</p>
                    </li>
                    <li>
                      <p className="lead text-primary"> {data.beneficios}</p>
                    </li>
                    <li>
                      <p className="lead text-primary"> {data.beneficios}</p>
                    </li>
                    <li>
                      <p className="lead text-primary"> {data.beneficios}</p>
                    </li>
                  </ul>
                </div>
                <div className="col-sm" style={styleAbout}>
                  <div className="border" style={{ width: "70%", display: "inline-block", marginLeft: "15%", borderTopLeftRadius: "70px", borderTopRightRadius: "70px", backgroundImage: "linear-gradient(180deg, rgba(11,47,89,1) 0%, rgba(164,127,40,1) 84%)" }} >
                    <h1 className="text-white text-start mt-5 mx-4">Requisitos y materiales</h1>
                    <p className="text-white m-4" style={{ textAlign: "justify", fontSize: "0.9rem" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.Lorem ipsum. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex

                      consequat.Lorem ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        
      </div>
<ContenidoCurso/>
      <Footer />
      <Footer2 />
    </>
  )
};

export default PaginaEnafb;
