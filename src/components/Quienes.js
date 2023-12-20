import React from "react";
import Footer from "./Footer";
import Informacion from "./Informacion";
import Example from "./Example";
import Header from "./Header";
import Promesa from "./Promesa";
import Staff from "./Staff";
import Footer2 from "./Footer2";
import Areas from "./Areas";
import background from "../assets/imagenes/back_somos.png";
import MisionQuienes from "./MisionQuienes";
import { Fade } from "react-reveal";
import {data} from '../objetos/ObjetoQuienes';

function Quienes() {
  return (
    <>
    <div className="img-fluid" style={{backgroundImage:`url(${background})`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}}>
      <Header/>
      <Informacion datos={data}/>
      <br/>
      <br/>
      <br/>
      <br/>

      <Fade>
    <Example datos={data}/>

    <Promesa datos={data}/>
    </Fade>
    </div>
    <Fade>
    <MisionQuienes datos={data}/>

      <Staff datos={data}/>
      <Areas datos={data}/>


      <Footer/>
      <div className="bg-white">
      <Footer2/>
      </div>
      </Fade>
    </>
  );
}

export default Quienes;
