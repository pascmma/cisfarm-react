import React from "react";
import './titulos.css';
/**
 3 rows 
 1 row titulo
 2 row parrafo
 3 row boton
 */

const TituloInicio = () => {
  return (
    <>
      <div className="container">
        <div className="row  ">
          <div className="col-9 ">
            <h1 className="display-1 titulos-inicio text-white text-justify text-start">
              
              Titulo correspondiente del tema
            </h1>
            <hr className="hr my-5"/>
          </div>
        </div>
        <div className="row my-5 mp-5 " style={{width:"60%"}}>
          <p className="text-white lead parrafo " style={{textAlign:"justify"}}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
        <div className="row">
          <div className="col-1">
            <button type="button" className="btn btn-primary btn-lg">
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TituloInicio;
