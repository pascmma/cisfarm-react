import React, { useState } from "react";
import imagen16 from "../imagenes/img16.png";
import imagen10 from "../imagenes/img10.png";
import Slider from "react-slick";


import "./cardslider2.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const imagenesCard = [imagen16, imagen10, imagen16, imagen10];

const data = [
  {
    id: 1,
    dia: "Evento 1",
    mes:"enero",
    year: "2023",
    description: "Descripción del evento 1",
},
  {
    id: 2,
    dia: "Evento 1",
    mes:"febrero",
    year: "2023",
    description: "Descripción del evento 2",
  },  {
    id: 3,
    dia: "Evento 1",
    mes:"marzo",
    year: "2023",
    description: "Descripción del evento 3",
  },  {
    id: 4,
    dia: "Evento 1",
    mes:"abril",
    year: "2023",
    description: "Descripción del evento 4",
  },  {
    id: 5,
    dia: "Evento 1",
    mes:"mayo",
    year: "2023",
    description: "Descripción del evento 5",
  },  {
    id: 1,
    dia: "Evento 1",
    mes:"enero",
    year: "2023",
    description: "Descripción del evento 6",
  },
];




function CardSlider() {

  const NextArrow = ({onClick}) => {
    return(
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight/>
      </div>
    );
  };

  const PrevArrow = ({onClick}) => {
    return(
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft/>
      </div>
    );
  };

  const [imageIndex,setImageIndex] = useState(0);

  const settings = {
    infinite:true,
    lazyload:true,
    speed:300,
    slidesToShow:5,
    centerMode:true,
    centerPadding:0,
    NextArrow:<NextArrow/>,
    PrevArrow:<PrevArrow/>,
    beforeChange:(current,next) => setImageIndex(next),
  };

  return (
    <>
      <div className="container cont-carousel">
        <Slider {...settings}>
          {data.map((data,idx)=>(
            <div className={idx === imageIndex ? "slide activateSlide" : "slide"}>
            <div className="card my-3 contenedor">
          
            <div className="card-body card-slider-event">
              <h5 className="card-title"> {data.title} </h5>
              <h6 className="card-subtitle mb-2">{data.eventType}</h6>
              <p className="card-text text-white">{data.date}</p>
              <p className="card-text text-white"> {data.description} </p>
              <button type="button" className="btn btn-outline-light">
                Registrarse
              </button>
            </div>
          </div>
          </div>

          ))}
        
        </Slider>
      </div>
    </>
  );
}

export default CardSlider;
