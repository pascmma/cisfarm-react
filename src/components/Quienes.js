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

function Quienes() {
  return (
    <>
    <div className="bg-image" style={{borderBottomLeftRadius: "70px", borderBottomRightRadius:"70px"}}>
      <Header/>
      <Informacion/>
      <br/>
      <br/>
      <br/>
      <br/>

    <Example/>
    </div>

    <Promesa/>

      <Staff/>
      <Areas/>
      <Footer/>
      <Footer2/>
    </>
  );
}

export default Quienes;
