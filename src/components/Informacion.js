import React from "react";
import './informacion.css';

const Informacion = () =>{
    return(
        <>
        <div className="row my-5">
            <div className="col">
                <div>
                    <h1 className="display-1 text-white"> CISFARM</h1>
                    <h1 className="display-2 text-white texto-info"> Texto informativo sobre la pagina </h1>
                </div>
            </div>
            <div className="col ">
                <div className="difuminado">
                    <div className="difuminado-content d-flex justify-content-center align-items-center">
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Informacion;
