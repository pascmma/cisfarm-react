import React, { useState } from "react";

const cardsData = [
  {
    id: 1,
    title: "Evento 1",
    eventType: "Tipo de evento 1",
    date: "2023-07-25",
    description: "Descripción del evento 1",
  },
  {
    id: 2,
    title: "Evento 2",
    eventType: "Tipo de evento 2",
    date: "2023-07-26",
    description: "Descripción del evento 2",
  },
  {
    id: 3,
    title: "Evento 3",
    eventType: "Tipo de evento 1",
    date: "2023-07-25",
    description: "Descripción del evento 1",
  },
  {
    id: 4,
    title: "Evento 4",
    eventType: "Tipo de evento 1",
    date: "2023-07-25",
    description: "Descripción del evento 1",
  },
  {
    id: 5,
    title: "Evento 5",
    eventType: "Tipo de evento 1",
    date: "2023-07-25",
    description: "Descripción del evento 1",
  },
  // Add more objects for additional cards
];

const Card = ({ card }) => (
  <div key={card.id} className="card my-3 bg-image-card" style={{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">{card.title}</h5>
      <h6 className="card-subtitle mb-2">{card.eventType}</h6>
      <p className="card-text text-white">Fecha del evento: {card.date}</p>
      <p className="card-text text-white">{card.description}</p>
      <button type="button" className="btn btn-outline-light" >Registrarse</button>
    </div>
  </div>
);

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(cardsData.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalPages);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
    <div className="carousel">
      <div className="cards-container">
        <div className="cards-wrapper">
          {cardsData
            .slice(currentSlide * itemsPerPage, (currentSlide + 1) * itemsPerPage)
            .map((card) => (
              <Card key={card.id} card={card} />
              ))}
              
        </div>
      </div>
      <div className="controls">
        <button className="prev-btn" onClick={handlePrev}>&#8249;</button>
        <button className="next-btn" onClick={handleNext}>&#8250;</button>
      </div>
    </div>
    </div>
  );
}

export default Carousel;
