import React from "react";
import Barra from "./Barra";
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

function Quienes() {
  return (
    <>
    <div className="img-fluid" style={{backgroundImage:`url(${"http://vitplanet.com/academia/background/back_somos.png"})`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat",}}>
      <Header/>
      <Informacion/>
      <br/>
      <br/>
      <br/>
      <br/>

    <Example/>

    <Promesa/>

    </div>
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
