// Menu-inicio

import React from "react";
import "./nav.css";
import Footer from "./Footer";
import Casos from "./Casos";
import Bord from "./Bord";
import CardSlider from "./CardSlider";
import Header from "./Header";
import TituloInicio from "./TituloInicio";
import Footer2 from "./Footer2";
import Correccion from "./CorreccionTest";
import Modelo from "./Modelo";



function Inicio() {
  return (
    <>
      <div className="" style={{backgroundImage:`url(${"http://vitplanet.com/academia/background/back_inicio.png"})`}}>
        <Header/>
        <TituloInicio/>

        <CardSlider className="my-3"/>
        
        <Casos/>
       
       
        <Bord/>
        

        <Footer />
        <div className="bg-white">
        <Footer2/>

        </div>
        </div>
        <Modelo/>

        
         
      
    
    </>
  );
}

export default Inicio;
