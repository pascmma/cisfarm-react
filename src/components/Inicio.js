// Menu-inicio

import React from "react";
import "./nav.css";
import Cards from "./Cards";
import Footer from "./Footer";
import Barra from "./Barra";
import Casos from "./Casos";
import Bord from "./Bord";
import CardSlider from "./CardSlider";
import Header from "./Header";
import TituloInicio from "./TituloInicio";
import Footer2 from "./Footer2";
import Correccion from "./CorreccionTest";


function Inicio() {
  return (
    <>
      <div className="bg-image">
        <Header/>
        <TituloInicio/>

        <CardSlider className="my-3"/>
        
        <Casos/>
       
       
        <Bord/>
        <Footer />
        <Footer2/>
        
      </div>
    
    </>
  );
}

export default Inicio;
