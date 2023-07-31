// Menu-inicio

import React from "react";
import "./nav.css";
import Cards from "./Cards";
import Footer from "./Footer";
import Barra from "./Barra";
import Casos from "./Casos";
import Bord from "./Bord";
import CardSlider from "./CardSlider";

function Inicio() {
  return (
    <>
      <div className="bg-image">
        <Barra />

        <h1 className="display-1">Cisfarm TITULO</h1>
        <p className="lead" id="texto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>

        <CardSlider/>
        
        <Casos/>
       <Bord></Bord>

        <Footer />
      </div>
    <CardSlider/>
    </>
  );
}

export default Inicio;
