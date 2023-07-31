import React, { useState } from "react";
import imagen16 from "../imagenes/img16.png";
import imagen10 from "../imagenes/img10.png";
import Slider from "react-slick";
import "./CardSlider.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const imagenes = [imagen16, imagen10, imagen16, imagen10];

function CardSlider() {
  return (
    <>
      <div
        className="card my-3 "
      >
        <div className="card-body card-slider">
            <img src={imagenes[0]} className="card-img-top"/>
          <h5 className="card-title">Titulo</h5>
          <h6 className="card-subtitle mb-2">tipo del evento</h6>
          <p className="card-text text-white">Fecha del evento:</p>
          <p className="card-text text-white">Lorem ipsum</p>
          <button type="button" className="btn btn-outline-light">
            Registrarse
          </button>
        </div>
      </div>
    </>
  );
}

export default CardSlider;
