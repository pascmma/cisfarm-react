import React, { useState } from "react";
import imagen16 from "../imagenes/img16.png";
import imagen10 from "../imagenes/img10.png";
import Slider from "react-slick";
import imagen from '../imagenes/img1.png';

import "../estilos/academia.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const imagenesCard = [imagen16, imagen10, imagen16, imagen10];

const cardsData = [
  {
    id: 1,
    img: imagen,
    title: "ENAFB - SERUMS 2023-II",
    ciclo: "SUPERINTENSIVO",
  },
  {
    id: 2,
    img: imagen,
    title: "ENAFB - SERUMS 2023-II",
    ciclo: "SUPERINTENSIVO",
  },
  {
    id: 3,
    img: imagen,
    title: "ENAFB - SERUMS 2023-II",
    ciclo: "SUPERINTENSIVO",
  },
  {
    id: 4,
    img: imagen,
    title: "ENAFB - SERUMS 2023-II",
    ciclo: "SUPERINTENSIVO",
  },
  {
    id: 5,
    img: imagen,
    title: "ENAFB - SERUMS 2023-II",
    ciclo: "SUPERINTENSIVO",
  },

];


const cardsData2 = [
    {
        id: 1,
        img: imagen,
        title: "ENAFB - SERUMS 2023-II",
        ciclo: "SUPERINTENSIVO",
      },
      {
        id: 2,
        img: imagen,
        title: "RESIDENTADO 2023",
        ciclo: "SUPERINTENSIVO",
      },
      {
        id: 3,
        img: imagen,
        title: "ENAFB - SERUMS 2023-II",
        ciclo: "SUPERINTENSIVO",
      },
      {
        id: 4,
        img: imagen,
        title: "ENAFB - SERUMS 2023-II",
        ciclo: "SUPERINTENSIVO",
      },
    
        
]



function MenuCardSlider() {

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
    centerPadding:0,
    NextArrow:<NextArrow/>,
    PrevArrow:<PrevArrow/>,
    beforeChange:(current,next) => setImageIndex(next),
  };


  

  return (
    <>
      <div className="container cont-carousel">
        <h2 className="text-warning"> Programas de entrenamiento</h2>
        <p class="lead text-white text-wrap">
        Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consecteturContenido del párrafo 1
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Slider {...settings}>
          {cardsData.map((data,idx)=>(
            <div className={idx === imageIndex ? "slide activateSlide" : "slide"}>
            <div className="card my-3 contenedor-menu bg-transparent ">
                <img src={data.img} className="border rounded"/>  
                <div className=""> 
                    <p className="text-white"> {data.title}</p>
                    <hr style={{border:"solid 2px white"}}/>
                    <p className="lead text-wrap text-warning"> {data.ciclo}</p>
                    <button className="btn btn-primary">ver mas</button>
                </div>
            </div>


          </div>

          ))}
        </Slider>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    <br/>

    <div className="container cont-carousel">
        <h2 className="text-warning"> Simulacro</h2>
        <p class="lead text-white text-wrap">
        Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consecteturContenido del párrafo 1
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <Slider {...settings}>
          {cardsData2.map((data,idx)=>(
            <div className={idx === imageIndex ? "slide activateSlide" : "slide"}>
            <div className="card my-3 contenedor-menu bg-transparent ">
                <img src={data.img} className="border rounded"/>  
                <div className=""> 
                    <p className="text-white"> {data.title}</p>
                    <hr style={{border:"solid 2px white"}}/>
                    
                    <button className="btn btn-primary">ver mas</button>
                </div>
            </div>


          </div>

          ))}
        </Slider>
      </div>

    </>
  );
}

export default MenuCardSlider;
