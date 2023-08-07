import React from "react";

import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import InfoCurso from "./InfoCurso";
import DetallesCurso from "./DetallesCurso";
import Ejemplo from "./Ejemplo";
import ContenidoCurso from "./ContenidoCurso";

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
    <Ejemplo/>


      <ContenidoCurso/>
      <Footer />
      <Footer2/>
      </div>
    </div>
    </>
  );
}

export default Cursos;
