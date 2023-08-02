import React from "react";
import Barra from "./Barra";
import Footer from "./Footer";
import Informacion from "./Informacion";
import CardSlider2 from "./CardSlider2";
import Example from "./Example";
import Header from "./Header";
import Promesa from "./Promesa";
import Staff from "./Staff";

function Quienes() {
  return (
    <div className="bg-image">
      <Header/>
      <Informacion/>
      <br/>
      <br/>

    <Example/>

    <Promesa/>

      <Staff/>

      <Footer/>
    </div>
  );
}

export default Quienes;
