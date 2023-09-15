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
import background from '../imagenes/back_inicio.png';



function Inicio() {
  return (
    <>
      <div className="" style={{backgroundImage:`url(${background})`}}>
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
        

        
         
      
    
    </>
  );
}

export default Inicio;
