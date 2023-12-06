import React from "react";
import './informacion.css';

const Informacion = () =>{
    return(
        <>
     <div className="container ">
  <div className="row my-5">
    <div className="col-lg-6 col-md-12">
      <div className="">
        <h1 className="display-1 text-white">CISFARM</h1>
        <h1 className="display-2 text-white texto-info">Texto informativo sobre la página</h1>
      </div>
    </div>
    <div className="col-lg-6 col-md-12 ">
      <div className="  difuminado">
        <div className="difuminado-content d-flex justify-content-center align-items-center  p-3 ">
          <p className=" lead text-white my-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default Informacion;
