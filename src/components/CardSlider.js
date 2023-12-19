import React, { useState } from "react";
import imagen16 from "../imagenes/img16.png";
import imagen10 from "../imagenes/img10.png";
import Slider from "react-slick";
import imagen8 from "../imagenes/img8.png";
import "./contenedor.css";
import imagen1 from "../imagenes/sliderInicio1/1.png";
import imagen2 from "../imagenes/sliderInicio1/2.png";
import imagen3 from "../imagenes/sliderInicio1/3.png";
import imagen4 from "../imagenes/sliderInicio1/4.png";
import imagen5 from "../imagenes/sliderInicio1/5.png";
import imagen6 from "../imagenes/sliderInicio1/6.png";

//${index === 2 ? "slick-inicio-slick-center" : ""}

const imagenes = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6];


const CardSlider = (props) => {
  const [activo, setActivo] = useState(0);
  
  props.datos.eventos.map((evento,index)=>{
    console.log(`../imagenes/sliderInicio1/${evento.imagen}`);
  })
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "1px", // Ajusta este valor según tus necesidades
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    slidesToScroll: 1,
    afterChange: (currentSlide) => {
      setActivo(currentSlide);
    },
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow:1,
          infinite:true,
          slidesToScroll:1,
          arrows:false
        },
      },
    ],
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div
        className="container mx-auto"
        style={{ paddingTop: "5em", paddingBottom: "5em" }}
      >
        <Slider {...settings} className=" py-5">
          {props.datos.eventos.map((item, index) => (
            

            <div
              className={`container contenedor-1 p-5  col-lg-7 col-md-6 col-sm-12  d-flex justify-content-center align-items-center ${
                index === activo ? "slick-inicio-slick-center" : ""
              }`}
              key={index}
            >
              <div className="image-container">
                <img
                  src={require(`../imagenes/sliderInicio1/${item.imagen}`)}
                  className=""
                  style={{
                    borderRadius: "30px",
                  }}
                  alt={`Imagen ${index}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CardSlider;
