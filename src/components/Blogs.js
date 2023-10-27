import React from "react";
import Bordtemp from "./Bordtemp";
import "./nav.css";
import imagen16 from "../imagenes/img16.png";
import Footer from "./Footer";
import Header from "./Header";
import Prueba from "./Prueba";
import Footer2 from "./Footer2";
import img4 from "../imagenes/img4.png";
import background from '../imagenes/back_blogs_edit.png';
//import background from '../imagenes/back_inicio.png';
import { Fade } from "react-reveal";

function Blogs() {

  return (
    <>
      <div className="" style={{backgroundImage:`url(${background})`}}>
        <Header/>


<Prueba/>
</div>
    
      <Footer/>
      <Footer2/>
      
    </>
  );
}

export default Blogs;
