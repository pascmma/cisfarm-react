import React, { useState } from "react";
import imagen16 from "../imagenes/img16.png";
import imagen10 from "../imagenes/img10.png";
import Slider from "react-slick";
import imagen8 from "../imagenes/img8.png";
import './contenedor.css';


const cardsData = [
  {
    id: 1,
    
    title: "Evento 1",
    eventType: "Tipo de evento 1",
    date: "2023-07-25",
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doullamco eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 2,
    
    title: "Evento 2",
    eventType: "Tipo de evento 2",
    date: "2023-07-26",
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doullamco eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 3,
    
    title: "Evento 3",
    eventType: "Tipo de evento 3",
    date: "2023-07-25",
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doullamco eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 4,
    
    title: "Evento 4",
    eventType: "Tipo de evento 4",
    date: "2023-07-25",
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doullamco eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 5,
    
    title: "Evento 5",
    eventType: "Tipo de evento 5",
    date: "2023-07-25",
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doullamco eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  
  {
    id: 6,
    
    title: "Evento 5",
    eventType: "Tipo de evento 5",
    date: "2023-07-25",
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doullamco eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  
];




const CardSlider = () => {


  const settings = {
    className:"center",
    centerMode: true,
    infinite:true,
    centerPadding:"60px",
    slidesToShow:3,
    speed:500,
    responsive:[
      {
        breakpoint:620,
        settings:{
          slidesToShow:1,
          infinite:true,
          dots:true
        }
      }
    ]
  };


  return (
    <>
     
      <br/><br/><br/>
      
      <div className="container ">
        <Slider {...settings}>
          {cardsData.map((item,index)=>(
            <div className="container contenedor-1" >
              <div className="row">
                <h3 className="text-white display-5 my-3"> {item.title}</h3>
              </div>
              <div className="row">
                <h4 className="text-warning ">{item.eventType}</h4>
              </div>

              <div className="row my-5">
                <h4 className="text-warning">{item.date} </h4>
              </div>
              <div className="row">
                <p className="text-white" style={{fontSize:"xx-small"}} >{item.description}</p>
              </div>

              
            </div>
          ))}

        </Slider>
        
      </div>

    </>
  );
}

export default CardSlider;
