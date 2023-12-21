import React from "react";
import './titulos.css';
/**
 3 rows 
 1 row titulo
 2 row parrafo
 3 row boton
 */

const TituloInicio = (props) => {
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

  const formulario = () =>{
    const urlNueva = "https://forms.gle/xUUmiMVqkSCYErTv5";
    window.open(urlNueva,'_blank');
  }


  return (
    <>
      <div className="container">
        <div className="row mt-5 ">
          <div className="col-12 col-sm-9">
            <h1 className="display-2 titulos-inicio text-white text-justify text-start" >
              
              {props.datos.titulo}
            </h1>
            <hr className="hr my-5"/>
          </div>
        </div>
        <div className="col-12 col-sm-9 " >
          <p className="text-white lead  " style={{textAlign:"left"}} > 
            {props.datos.parrafo}
          </p>
        </div>
        <div className="row">
          <div className="col-1">
            <button type="button" className="btn" style={boton} onClick={formulario} >
              {props.datos.boton}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TituloInicio;
