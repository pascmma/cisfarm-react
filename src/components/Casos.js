import React from "react";
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png'; // Import additional images as needed

const casosData = [
  {
    id: 1,
    title: "Contamos con el número correcto de...",
    description: "Contamos con el número correcto de deadaslkdjlasjdlaskdasdsajdklsajdkls",
    image: card1,
    ranking: "1st",
    comment: "Lorem ipsum",
  },
  // Add more objects for additional carousel items
];

const CasoItem = ({ caso }) => (
  <div className="my-5 container">
    <div className="row">
      <div className="col-12">
        <h1 className="text-white">Casos de éxito</h1>
      </div>
    </div>
    <div className="row text-white">
      <div className="col-4">
        <div className="row">
          <div className="col-12">
            <h2>{caso.title}</h2>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12">
            <p>{caso.description}</p>
          </div>
        </div>
      </div>
      <div className="col-4">
        <img src={caso.image} alt="imagen de caso" className="img-fluid" />
      </div>
      <div className="col-4">
        <h1 className="display-1">{caso.ranking}</h1>
        <p>{caso.comment}</p>
      </div>
    </div>
  </div>
);

function Casos() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {casosData.map((caso) => (
          <div key={caso.id} className={`carousel-item${caso.id === 1 ? " active" : ""}`}>
            <CasoItem caso={caso} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Casos;
