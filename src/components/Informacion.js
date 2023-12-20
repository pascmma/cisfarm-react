import React from "react";
import './informacion.css';

const Informacion = (props) =>{
    return(
        <>
     <div className="container ">
  <div className="row my-5">
    <div className="col-lg-6 col-md-12">
      <div className="">
        <h1 className="display-1 text-white">{props.datos.cisfarm}</h1>
        <h1 className="display-2 text-white texto-info">{props.datos.titulo}</h1>
      </div>
    </div>
    <div className="col-lg-6 col-md-12 ">
      <div className="  difuminado">
        <div className="difuminado-content d-flex justify-content-center align-items-center  p-3 ">
          <p className=" lead text-white my-2 ">{props.datos.parrafo}</p>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default Informacion;
