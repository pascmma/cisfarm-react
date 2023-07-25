import React, { useState } from "react";
import imagen1 from "../assets/card2.png";
import imagen2 from "../assets/card4.png";

function Bord() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const images = [
    {
      imgSrc: imagen1,
      title: "Asesor academico",
      name: "Alvaro Jose",
      lastName: "Andrade Condori",
      job: "Quimico farmaceutico",
      ranking: "1er puesto",
      specialization: "Farmacia hospitaliaria",
    },
    {
      imgSrc: imagen2,
      title: "Asesor academico",
      name: "juan ",
      lastName: "Perez",
      job: "Quimico",
      ranking: "2do puesto",
      specialization: "EspciaciliastaS",
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
                    <h1 className="text-white">{slide.title}</h1>
                    <h1 className="display-2 text-white">{slide.name}</h1>
                    <h1 className="display-2 text-white">{slide.lastName}</h1>
                    <h1 className="text-white">{slide.job}</h1>

                    <h2 className="text-white">{slide.ranking}</h2>
                    <h2 className="text-white">{slide.specialization}</h2>
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
          <span className="sr-only"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
          onClick={nextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
      </div>
    </>
  );
}

export default Bord;
