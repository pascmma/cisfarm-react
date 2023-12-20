import React from "react";

import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import InfoCurso from "./InfoCurso";
import DetallesCurso from "./DetallesCurso";
import Ejemplo from "./Ejemplo";
import ContenidoCurso from "./ContenidoCurso";
import Video from "./Video";
import background from "../assets/imagenes/back_curso_cardio.png";
import Valoraciones from "./Valoraciones";
import { Fade } from "react-reveal";


const containerStyle = {
  position: "relative",
  width: "100%",
  height: "50%"
};

//Politicas de aceptacion estan en el componente CorrecionTest

const gradientBackgroundStyle2 = {
  
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:"white", 
  zIndex: -1
};

function Cursos(props) {
  return (
    <>
    <div className="" style={{backgroundImage:`url(${background})`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat",}} >
     
      <Video datosObjeto={props.datos}>
   
      </Video>
    

    <div style={gradientBackgroundStyle2}>

    <InfoCurso datos={props.datos}/>
    
    <Ejemplo datos={props.datos}/>


      <ContenidoCurso datos={props.datos} titulo={"Contenido del curso"}/>
    </div>
      <Footer />
      <Footer2/>
      
    </div>
    </>
  );
}

export default Cursos;
