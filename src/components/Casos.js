import React from "react";

import card1 from '../assets/card1.png'

const makeCasos = (numero) => {
  const casos = [];
  for (let i = 0; i < numero; i++) {
    casos.push(
      <div className="my-5 container">
        <div className="row">
          <div className="col-12">
          <h1 className="text-white "> Casos de exito </h1>  
          </div>
        </div>

        <div className="row text-white">
          <div className="col-4">
            <div className="row">
                <div className="col-12">
                    <h2>contamos con el numero correcto de deadaslkdjlasjdlask</h2>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-12">
                    <p>contamos con el numero correcto de deadaslkdjlasjdlaskdasdsajdklsajdkls</p>
                </div>

            </div>
          </div>

          <div className="col-4">
            <img src={card1}  alt="imagen de caso " className="img-fluid"></img>
          </div>
          <div className="col-4">
            <h1 className="display-1">1 st</h1>
            <p> Lorem ipsum</p>
          </div>
        </div>
      </div>
    );
  }
  return casos;
};

function Casos() {
  return (
  <>
  {makeCasos(1)}
  </>
  );
}

export default Casos;
