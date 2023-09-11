import React from "react";
import Slider from "react-slick";
import imagen from '../imagenes/img16.png';
import './novedades.css';

const Novedades = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
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
        <Slider {...settings}  >
          {sliderData.map((item, index) => (
            <div className="card colores text-white borde-redondo">
                <div className="d-flex justify-content-center align-items-center m-3" >
                <img src={imagen} style={{"width":"15rem"}} className="rounded"/>

                </div>
                <div className="card-body">
                    <h6>Nombre completo de la nota</h6>
                    <p> Lorem ipsum lorem ipsium
lorem ipsum loren ipsun.</p>

                </div>

            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Novedades;