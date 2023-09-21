import React from "react";
import './titulos.css';
/**
 3 rows 
 1 row titulo
 2 row parrafo
 3 row boton
 */

const TituloInicio = () => {
  const boton={
      fontSize: "16px",
      padding: "10px 20px",
      border: "2px solid #ffffff6b",
      borderRadius: "50px",
      background: "rgb(255 255 255 / 11%)",
      boxShadow: "inset -2px -2px 5px #ffffff14, inset 2px 2px 5px #b0e0e67d",
      color: "#fff",
      cursor: "pointer",
      transition: "transform 0.3s",
  
  };


  return (
    <>
      <div className="container">
        <div className="row  ">
          <div className="col-12 col-sm-9">
            <h1 className="display-2 titulos-inicio text-white text-justify text-start" style={{fontWeight:"bold"}}>
              
              Preparate en nuestros programas de entrenamiento
            </h1>
            <hr className="hr my-5"/>
          </div>
        </div>
        <div className="col-12 col-sm-9 " >
          <p className="text-white lead  " style={{textAlign:"justify", fontWeight:"bold"}}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
        <div className="row">
          <div className="col-1">
            <button type="button" className="btn" style={boton}>
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TituloInicio;
