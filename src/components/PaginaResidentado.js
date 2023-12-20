import React, {useState} from "react";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";

import Ejemplo from "./Ejemplo";

import { BiBookReader } from "react-icons/bi";
import { GiSpeaker, GiUpgrade } from "react-icons/gi";
import { AiOutlineLike } from "react-icons/ai";
import Correccion from "./CorreccionTest";

import imagenFondo from "../assets/imagenes/back_enafb.png";
import { PiClockCounterClockwiseBold, PiVideoDuotone } from "react-icons/pi";
import { BsPersonSquare } from "react-icons/bs";
import ContenidoCurso from "./ContenidoCurso";
import Beneficios from "./Beneficios";
import { Fade } from "react-reveal";
import { IoPlay } from "react-icons/io5";
import {data} from "../objetos/ObjetoAcademiaResidentado";







const containerStyle = {
  position: "relative",
  width: "100%",
  height: "50%",
};

const gradientBackgroundStyle = {
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "blue",
  zIndex: -1,
};

const gradientBackgroundStyle2 = {
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "white",
  zIndex: -1,
};

const dataCurso = {
  valoracion: "50%",
  estudiantes: 300,
  nivel: "avanzado",
  idioma: "español",
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
  zIndex: 3,
};

const inputStyle = {
  maxWidth: "80%",
  margin: "10px auto",
};
const styleAbout = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "blue",
};
const estiloResponsive = {
  fontSize: "90%", // Tamaño de fuente más pequeño para pantallas pequeñas
};

const PaginaResidentado = () => {
  const [selected, setSelected] = useState("superintensivo");
  const estilo = {
    display: "inline-block",
    color: "#D1A900",
    WebkitBoxShadow: "0px 1px 42px 2px rgba(250,255,0,0.75)",
    MozBoxShadow: "0px 1px 42px 2px rgba(250,255,0,0.75)",
    boxShadow: "0px 1px 42px 2px rgba(250,255,0,0.75)",
  };

  const circleStyle = {
    width: "40em",
    height: "40em",
    borderRadius: "50%",
    backgroundColor: `#0067e0`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    zIndex: 2,
    fontSize: "0.9em !important",
  };
  const styleAbout = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    color: "blue",
  };

  const boton = {
    fontSize: "16px",
    padding: "10px 20px",
    border: "2px solid #ffffff6b",
    borderRadius: "10px",
    background: "rgb(255 255 255 / 11%)",
    boxShadow: "inset -2px -2px 5px #ffffff14, inset 2px 2px 5px #b0e0e67d",
    color: "#fff",
    cursor: "pointer",
    transition: "transform 0.3s",
  };
  return (
    <>
      <Fade>
        <div
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Header />

          <br />
          <br />
          <br />

          <div className="container">
            <div className="row mx-2">
              <div className="col-md-8">
                <h1 className="text-white">Programa de entrenamiento </h1>
                <h1
                  className="text-primary"
                  style={{ fontSize: "5em", overflowWrap: "break-word" }}
                >
                  RESIDENTADO
                </h1>
                <h1 className="display-2 text-warning">{data.periodo}</h1>
                <div style={{borderLeft:"4px solid #82682f", height:"8em", overflowY:""}}>
                <div className="row" >
                  
                  <div className=" col-md-8" >
                    <h1
                      className={`text-${
                        selected === "superintensivo" ? "warning" : "muted"
                      } user-select-none`}
                      onClick={() => setSelected("superintensivo")}
                      style={{ color: selected === "superintensivo" ? "yellow" : "#ffffff" }}

                    >
                      <IoPlay/> 
                      SUPERINTENSIVO
                    </h1>
                  </div>
                  <div
                    className={`col-md-3 ${
                      selected === "superintensivo" ? "d-block" : "d-none"
                    }`}
                  >
                    <h4 className="text-center" style={boton}>
                      {data.inicioSuper}
                    </h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <h1
                      className={`text-${
                        selected === "intensivo" ? "warning" : "muted"
                      } user-select-none`}
                      onClick={() => setSelected("intensivo")}
                    >
                      <IoPlay/> 
                      {data.inicioIntesivo}
                    </h1>
                  </div>
                  <div
                    className={`col-md-3 ${
                      selected === "intensivo" ? "d-block" : "d-none"
                    }`}
                  >
                    <h4 className="text-center" style={boton}>
                      15 de Septiembre
                    </h4>
                  </div>
                </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-sm ">
                  <div
                    className=" text-white "
                    style={{
                      display: "inline-block",
                      borderRadius: "80px",
                      backgroundImage:
                        "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(15,197,236,0.9556197478991597) 100%)",
                    }}
                  ></div>
                  <div>
                    <div className="d-flex align-items-center">
                      <PiClockCounterClockwiseBold className="text-white display-3 mx-4" />
                      <div>
                        <h3 className="text-primary">
                          {" "}
                          <strong>Duración </strong>
                        </h3>
                        <h4 className="text-white">{data.duracion}</h4>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center">
                      <PiVideoDuotone className="text-white display-3 mx-4" />
                      <div>
                        <h3 className="text-primary">
                          <strong>Lecciones </strong>
                        </h3>
                        <h4 className="text-white">{data.lecciones}</h4>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center">
                      <BsPersonSquare className="text-white display-3 mx-4" />
                      <div>
                        <h3 className="text-primary">
                          <strong>Modalidad</strong>
                        </h3>
                        <h4 className="text-white">{data.modalidad}</h4>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="container ">
            <div className="row m-5 p-1 ">
              <div className="col">
                <h4 className="text-warning">
                  {data.preguntaResidentado}
                </h4>
                <p className="lead text-white">
                  {data.respuestaResidentado}
                </p>
              </div>
              <div className="col-1 ">
                <div
                  className="mx-4"
                  style={{ borderLeft: "1px solid yellow", height: "100%" }}
                ></div>
              </div>
              <div className="col">
                <h4 className="text-warning">{data.metodologia}</h4>
                <p className="lead text-white">
                  {data.metodologiaDetalle}
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />

          <div className="">
          <div
        className="row display-2 mt-5"
        style={{
          marginLeft: "1.2em",
          marginRight: "1.2em",
          paddingTop: "2em",
        }}
      >
        <div className="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center text-center mb-4" style={{ fontSize: "1em",...(window.innerWidth <= 768 ? estiloResponsive : {}) }}>
          <div className="pb-2 px-3 rounded-circle" style={{ ...estilo  }}>
            <AiOutlineLike />
          </div>
          <h4 className="text-white mt-5 mb-4" style={{ fontSize: "0.3em" }}>
            Valoraciones buenas
          </h4>
          <p className="lead text-primary" style={{ fontSize: "0.3em" }}>
            {dataCurso.valoracion}
          </p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center text-center mb-4" style={{ fontSize: "1em",...(window.innerWidth <= 768 ? estiloResponsive : {}) }}>
          <div className="pb-2 px-3 rounded-circle " style={{ ...estilo,  }}>
            <BiBookReader />
          </div>
          <h4 className="text-white m-4 mt-5" style={{ fontSize: "0.3em" }}>
            Estudiantes
          </h4>
          <p className="lead text-primary" style={{ fontSize: "0.3em" }}>
            {dataCurso.estudiantes}
          </p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center text-center mb-4" style={{ fontSize: "1em",...(window.innerWidth <= 768 ? estiloResponsive : {}) }}>
          <div className="pb-2 px-3 rounded-circle" style={{ ...estilo,  }}>
            <GiUpgrade />
          </div>
          <h4 className="text-white m-4 mt-5" style={{ fontSize: "0.3em" }}>
            Nivel
          </h4>
          <p className="lead text-primary" style={{ fontSize: "0.3em" }}>
            {dataCurso.nivel}
          </p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center text-center mb-4" style={{ fontSize: "1em",...(window.innerWidth <= 768 ? estiloResponsive : {}) }}>
          <div className="py-1 px-3 rounded-circle" style={{ ...estilo,  }}>
            <GiSpeaker />
          </div>
          <h4 className="text-white m-4 mt-5" style={{ fontSize: "0.3em" }}>
            Idioma
          </h4>
          <p className="lead text-primary" style={{ fontSize: "0.3em" }}>
            {dataCurso.idioma}
          </p>
        </div>
      </div>
          </div>

          <div className="row bg-white">
            <Ejemplo datos={data} />
            <div style={{ backgroundColor: "transparent" }}>
              <br />
              <br />
              <br />

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <Beneficios datos ={data} />

              <div className="container">
                <div className="row ">
                  <div className="col-md-6 " style={{ marginTop: "5.5em" }}>
                    <div className="container">
                      <h3
                        className="text-primary text-start"
                        style={{ fontSize: "2.5em" }}
                      >
                        {data.preguntaAcademiaResidentado}
                      </h3>
                      <br />
                      <br />
                      <p
                        className="lead text-primary "
                        style={{ textAlign: "justify" }}
                      >
                        {data.respuestaAcademiaResidentado}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center d-none d-md-block ">
                    <div
                      className="circulo "
                      style={{
                        ...circleStyle,
                        maxWidth: "40em",
                        minHeight: "18em",
                      }}
                    >
                      <h1 className="display-4  text-white">Matricúlate</h1>
                      <div style={{ textAlign: "center" }}>
                        <div className="my-3">
                          <input
                            type="text"
                            className="p-3 text-white"
                            style={{
                              textAlign: "center",
                              width: "60%",
                              borderRadius: "50px",
                              backgroundImage:
                                "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(183,198,205,0.14049369747899154) 100%)",
                              "::placeholder": "white",
                              "::placeholder": {
                                color: "#00000",
                              },
                            }}
                            placeholder="Nombres y Apellidos"
                            aria-label="nombre"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <div className="my-3 ">
                          <input
                            type="text"
                            className="p-3 my-input"
                            style={{
                              textAlign: "center",
                              width: "60%",
                              borderRadius: "50px",
                              backgroundImage:
                                "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(183,198,205,0.14049369747899154) 100%)",
                            }}
                            placeholder="Correo Electrónico"
                            aria-label="correo"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <div className="my-3">
                          <input
                            type="text"
                            className="p-3"
                            style={{
                              textAlign: "center",
                              width: "60%",
                              borderRadius: "50px",
                              backgroundImage:
                                "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(183,198,205,0.14049369747899154) 100%)",
                            }}
                            placeholder="Teléfono y/o Celular"
                            aria-label="telefono"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <Correccion datos={data} />
                        <button className="btn btn-primary bg-secondary">
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 d-md-none">
                    {/* Esta imagen se muestra solo en pantallas pequeñas */}
                    <div
                      className="circulo "
                      style={{
                        ...circleStyle,
                        maxWidth: "21em",
                        maxHeight: "20em",
                      }}
                    >
                      <h1 className="text-white mt-5">Matricúlate</h1>
                      <div style={{ textAlign: "center" }}>
                        <div className="my-3">
                          <input
                            type="text"
                            className="p-1"
                            style={{
                              textAlign: "center",
                              width: "60%",
                              borderRadius: "50px",
                              backgroundImage:
                                "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(183,198,205,0.14049369747899154) 100%)",
                              fontSize: "0.9em",
                            }}
                            placeholder="Nombres y Apellidos"
                            aria-label="nombre"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <div className="my-3 ">
                          <input
                            type="text"
                            className="p-1"
                            style={{
                              textAlign: "center",
                              width: "60%",
                              borderRadius: "50px",
                              backgroundImage:
                                "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(183,198,205,0.14049369747899154) 100%)",
                              fontSize: "0.9em ",
                            }}
                            placeholder="Correo Electrónico"
                            aria-label="correo"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <div className="my-3">
                          <input
                            type="text"
                            className="p-1"
                            style={{
                              textAlign: "center",
                              width: "60%",
                              borderRadius: "50px",
                              backgroundImage:
                                "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(183,198,205,0.14049369747899154) 100%)",
                              fontSize: "0.9em ",
                            }}
                            placeholder="Teléfono y/o Celular"
                            aria-label="telefono"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <Correccion datos={data} />
                        <button className="btn btn-primary bg-secondary">
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />

              <div className="container">
                <h3 className="text-primary text-center">Requisitos</h3>
                <br />
                <br />
                <p className="lead text-center text-primary">
                  {data.requisitos}
                </p>
              </div>
            </div>
          </div>
        </div>
        <ContenidoCurso datos={data} titulo={"Cronograma"} />
        <Footer />
        <Footer2 />
      </Fade>
    </>
  );
};

export default PaginaResidentado;
