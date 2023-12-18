import React from "react";
import Slider from "react-slick";
import './example.css';

const Example = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    focusOnSelect: true,
    responsive:[
      {
        breakpoint:620,
        settings:{
          slidesToShow:1,
          infinite:true,
          arrows:false
          
        }
      }
    ]
  };

  const sliderData = [
    {
      dayMonth: "Dia Mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consectetur",
    },
    {
      dayMonth: "Dia Mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consectetur",
    },
    {
      dayMonth: "Dia Mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consectetur",
    },
    {
      dayMonth: "Dia Mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consectetur",
    },
    {
      dayMonth: "Dia Mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consectetur",
    },
    {
      dayMonth: "Dia Mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consectetur",
    },
    {
      dayMonth: "Dia Mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consectetur",
    },
    {
      dayMonth: "Dia Mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consectetur",
    },
    {
      dayMonth: "Dia Mes",
      year:"2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut la Lorem ipsum dolor sit amet, consectetur",
    },
    
  ];



  return (
    <>
      <div className="container text-center">
      <div className="container">
          <h3 className="text-white text-center mb-5">Nuestra historia</h3>
        </div>
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div key={index}  className="fechas slider-fechas">
              <h5 className="text-white" style={{marginTop:"1.5em"}}>{item.dayMonth}</h5>
              <h1 className="text-white">{item.year}</h1>
              <p className="text-white p-3">{item.content}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Example;

