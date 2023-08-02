import React from "react";
import Slider from "react-slick";
import './example.css';

const Example = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
  };

  const sliderData = [
    {
      dayMonth: "dia mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consecteturContenido del párrafo 1",
    },
    {
      dayMonth: "dia mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consecteturContenido del párrafo 1",
    },
    {
      dayMonth: "dia mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consecteturContenido del párrafo 1",
    },
    {
      dayMonth: "dia mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consecteturContenido del párrafo 1",
    },
    {
      dayMonth: "dia mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consecteturContenido del párrafo 1",
    },
    {
      dayMonth: "dia mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consecteturContenido del párrafo 1",
    },
    {
      dayMonth: "dia mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consecteturContenido del párrafo 1",
    },
    {
      dayMonth: "dia mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consecteturContenido del párrafo 1",
    },
    {
      dayMonth: "dia mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consecteturContenido del párrafo 1",
    },
    // Agrega más objetos según la cantidad de divs que desees mostrar
  ];

  return (
    <>
      <div className="container">
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div key={index} className="border fechas rounded">
              <h3 className="text-white">{item.dayMonth}</h3>
              <h2 className="text-white">{item.year}</h2>
              <p className="text-white">{item.content}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Example;