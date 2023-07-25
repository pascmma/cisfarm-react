import React, { useState } from "react";
import "./nav.css"; 
import imagen16 from "../imagenes/img16.png";

//imagen lapiz
function Bordtemp() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const images = [
    {
      imgSrc: imagen16,
      title: "Titulo de la noticia1",
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Loremipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod temporncididunt ut labore et dolore magna",
    },
    {
      imgSrc: imagen16,
      title: "titulo de la notiica 2",
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Loremipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod temporncididunt ut labore et dolore magna",

    },
    {
        imgSrc: imagen16,
        title: "titulo de la notiica 3",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Loremipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod temporncididunt ut labore et dolore magna",
  
      },
      {
        imgSrc: imagen16,
        title: "titulo de la notiica 4",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Loremipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod temporncididunt ut labore et dolore magna",
  
      },
    // Agrega más objetos con información para más diapositivas si lo deseas
  ];

  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? "active" : ""}`}
              style={{
                transform: `translateX(${(index - activeIndex) * 100}%)`, // Desplazar horizontalmente
                transition: "transform 1s ease-in-out", // Aumentar la duración de la animación
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <img
                      src={slide.imgSrc}
                      alt={`imagen ${index + 1}`}
                      className="img-prof"
                    />
                  </div>
                  <div className="col-8">
                    <h1 className="">{slide.title}</h1>
                    <h5 className=" ">{slide.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
          onClick={prevSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">anterior</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
          onClick={nextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">siguiente</span>
        </a>
      </div>
    </>
  );
}

export default Bordtemp;
