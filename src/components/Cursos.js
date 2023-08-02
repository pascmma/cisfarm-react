import React from "react";

import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import InfoCurso from "./InfoCurso";
import DetallesCurso from "./DetallesCurso";

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
  background: "linear-gradient(to bottom, blue, white)",
  zIndex: -1
};


function Cursos() {
  return (
    <>
    <div style={containerStyle}>
    <div style={gradientBackgroundStyle}>
    <Header/>
      <div className="">
        <div className="row">
          <div className="col">
            <h1 className="display-1">Farmacologia</h1>
            <h1 className="display-1">Cardiovascular</h1>
          </div>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div> 

        <h3>Aprende mas en el campo de los mecanismos en 3D</h3>
      </div>


    <InfoCurso/>
    <DetallesCurso/>


    <div className="bg-image-cursos2">
      <div className="row">
        <h4>Docentes</h4>
      </div>

      <div className="row">
        <h3>Contenido del cruso</h3>
      </div>

        <div className="row bg-image-cursos d-flex mx-auto justify-content-center align-items-center" style={{ width: "50%" }}>
            <h4>Tema nombre</h4>
            <h5>texto añadido</h5>
        </div>
      <br />
      <br />
      <div
        className="row bg-image-cursos d-flex mx-auto justify-content-center align-items-center"
        style={{ width: "50%" }}
      >
        <h4>Tema nombre</h4>
        <h5>texto añadido</h5>
      </div>
      <br />
      <br />
      <div
        className="row bg-image-cursos d-flex mx-auto justify-content-center align-items-center"
        style={{ width: "50%" }}
      >
        <h4>Tema nombre</h4>
        <h5>texto añadido</h5>
      </div>
      <br />
      <br />
      <div
        className="row bg-image-cursos d-flex mx-auto justify-content-center align-items-center"
        style={{ width: "50%" }}
      >
        <h4>Tema nombre</h4>
        <h5>texto añadido</h5>
      </div>
      <br />
      <br />

      <div className="row ">
        <div className="col-8">
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip nisi ut aliquip nisi ut aliquip nisi ut aliquip Este
            curso cuenta con # de temas por aprender
          </p>
        </div>
        <div className="col-4">
          <h5>Obtener:</h5>
          <h4>0.000</h4>
          <h5>Lo tienes</h5>
        </div>
      </div>
      </div>
      <Footer />
      <Footer2/>
      </div>
    </div>
    </>
  );
}

export default Cursos;
