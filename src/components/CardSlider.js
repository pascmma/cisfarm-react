import React, { useState } from "react";
import Slider from "react-slick";
import "./contenedor.css";

 
const CardSlider = (props) => {
  const [activo, setActivo] = useState(0);
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
                  src={require(`../assets/imagenes/sliderInicio1/${item.imagen}`)}
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
