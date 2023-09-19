import React from "react";
import Footer from "./Footer";
import Informacion from "./Informacion";
import CardSlider2 from "./CardSlider2";
import Example from "./Example";
import Header from "./Header";
import Promesa from "./Promesa";
import Staff from "./Staff";
import Footer2 from "./Footer2";
import Areas from "./Areas";
import molecula from "../imagenes/molecula3-removebg-preview.png";
import background from "../imagenes/back_somos.png";
import MisionQuienes from "./MisionQuienes";

function Quienes() {
  return (
    <>
    <div className="img-fluid" style={{backgroundImage:`url(${background})`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}}>
      <Header/>
      <Informacion/>
      <br/>
      <br/>
      <br/>
      <br/>

    <Example/>

    <Promesa/>
    </div>
    <MisionQuienes/>

      <Staff/>
      <Areas/>


      <Footer/>
      <div className="bg-white">
      <Footer2/>
      </div>

    </>
  );
}

export default Quienes;
