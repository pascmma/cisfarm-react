import React from "react";
import Slider from "react-slick";
import imagen from '../imagenes/img16.png';


const Novedades = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    focusOnSelect: true,
    centerPadding: "80px",
    slidesToShow: 5,
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
    
  ];

  
  return (
    <>
      <div className="container">
        <div className="row">
        <Slider {...settings}  >
          {sliderData.map((item, index) => (
            <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px !important" }}>
            <div className="card-body">
              <img src={imagen} style={{ width: "90%", height:"40%",borderRadius:"40px" }} />
              <h6 className="card-subtitle my-2 text-primary text-start">
                Nombre completo de la noticia1
              </h6>
              <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
                Ver mas
              </button>
            </div>
          </div>
          ))}
        </Slider>
      </div>
      </div>
  
  <br/><br/><br/>
    </>
  );
};

export default Novedades;