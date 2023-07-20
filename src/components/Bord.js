import React from "react";
import imagen1 from '../assets/card2.png';



function Bord(){
    return(
        <>
           <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src={imagen1} alt="imagen de profesor" className="img-prof" />
                </div>
                <div className="col-8">
                    <h1 className="text-white"> Asesor academico</h1>
                    <h1 className="display-2 text-white"> Alvaro Jose</h1>
                    <h1 className="display-2 text-white"> Andrade Condori</h1>
                    <h1 className="text-white"> Quimico farmaceutico</h1>

                    <h2 className="text-white">1er puesto </h2>
                    <h2 className="text-white"> Farmacia hospitaliaria</h2>
                </div>
 
            </div>

           </div>
           
        </>
    );
}

export default Bord;