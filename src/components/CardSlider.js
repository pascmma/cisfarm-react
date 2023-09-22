import React, { useState } from "react";
import imagen16 from "../imagenes/img16.png";
import imagen10 from "../imagenes/img10.png";
import Slider from "react-slick";
import imagen8 from "../imagenes/img8.png";
import './contenedor.css';
import imagen1 from '../imagenes/sliderInicio1/1.png';
import imagen2 from '../imagenes/sliderInicio1/2.png';
import imagen3 from '../imagenes/sliderInicio1/3.png';
import imagen4 from '../imagenes/sliderInicio1/4.png';
import imagen5 from '../imagenes/sliderInicio1/5.png';
import imagen6 from '../imagenes/sliderInicio1/6.png';

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

const imagenes = [imagen1,imagen2,imagen3,imagen4,imagen5,imagen6];


const CardSlider = () => {


  const settings = {
    className:"center",
    centerMode: true,
    infinite:true,
    centerPadding:"60px",
    slidesToShow:3,
    speed:500,
    focusOnSelect: true,
    slidesToScroll:1,
    responsive:[
      {
        breakpoint:620,
        settings:{
          slidesToShow:1,
          infinite:true,
        }
      }
    ]
  };




  return (
    <>
     
      <br/><br/><br/>
      
      <div className="container ">
        <Slider {...settings}>
          {imagenes.map((item,index)=>(
            <div className="container contenedor-1" >
              <img src={item} style={{borderRadius:"30px", width:"120%"}}/>

              
            </div>
          ))}

        </Slider>
        
      </div>

    </>
  );
}

export default CardSlider;
