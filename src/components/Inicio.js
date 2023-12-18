// Menu-inicio

import React, { useState } from "react";
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
import {useSpring,animated, a} from 'react-spring';
import { Fade } from "react-reveal";
import {data} from '../objetos/ObjetoInicio';


function Inicio() {
  



  return (
    <>
      <div className="" style={{backgroundImage:`url(${background})`}}>
        <Header/>
        <Fade>
        <TituloInicio datos={data[0]}/>

        

        <CardSlider datos={data[0]} className="my-3"/>
        
        <Casos datos={data[0]}/>
       
       
        <Bord datos={data[0]}/>
        

        <Footer />
        <div style={{backgroundColor:"#DEECFA"}}>
        <Footer2/>

        </div>
        </Fade>
        </div>
        

         
      
    
    </>
  );
}

export default Inicio;
