import React, { useState } from "react";
import imagen16 from "../imagenes/img16.png";
import imagen10 from "../imagenes/img10.png";
import Slider from "react-slick";






import "./CardSlider.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const imagenesCard = [imagen16, imagen10, imagen16, imagen10];

const cardsData = [
  {
    id: 1,
    
    title: "Evento 1",
    eventType: "Tipo de evento 1",
    date: "2023-07-25",
    description: "Descripción del evento 1",
  },
  {
    id: 2,
    
    title: "Evento 2",
    eventType: "Tipo de evento 2",
    date: "2023-07-26",
    description: "Descripción del evento 2",
  },
  {
    id: 3,
    
    title: "Evento 3",
    eventType: "Tipo de evento 3",
    date: "2023-07-25",
    description: "Descripción del evento 1",
  },
  {
    id: 4,
    
    title: "Evento 4",
    eventType: "Tipo de evento 4",
    date: "2023-07-25",
    description: "Descripción del evento 1",
  },
  {
    id: 5,
    
    title: "Evento 5",
    eventType: "Tipo de evento 5",
    date: "2023-07-25",
    description: "Descripción del evento 1",
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
    slidesToShow:3,
    centerMode:true,
    centerPadding:-40,
    NextArrow:<NextArrow/>,
    PrevArrow:<PrevArrow/>,
    beforeChange:(current,next) => setImageIndex(next),
  };


  

  return (
    <>
      <div className="container cont-carousel">
        <Slider {...settings}>
          {cardsData.map((data,idx)=>(
            <div className={idx == imageIndex ? "slide activateSlide" : "slide"}>
            <div className="card my-3 contenedor">
          
            <div className="card-body card-slider">
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
