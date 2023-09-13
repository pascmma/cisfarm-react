import React from "react";

import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import InfoCurso from "./InfoCurso";
import DetallesCurso from "./DetallesCurso";
import Ejemplo from "./Ejemplo";
import ContenidoCurso from "./ContenidoCurso";
import Video from "./Video";



const containerStyle = {
  position: "relative",
  width: "100%",
  height: "50%"
};



const gradientBackgroundStyle2 = {
  
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:"white", 
  zIndex: -1
};

function Cursos() {
  return (
    <>
    <div style={containerStyle}>
    
     <div style={{background:"#002780"}}>
      <Header/>
     </div>
    
      <Video/>

    <div style={gradientBackgroundStyle2}>

    <InfoCurso/>
    
    <Ejemplo/>


      <ContenidoCurso/>
    </div>
      <Footer />
      <Footer2/>
      
    </div>
    </>
  );
}

export default Cursos;
