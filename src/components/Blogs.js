import React from "react";
import "./nav.css";

import Footer from "./Footer";
import Header from "./Header";
import Prueba from "./Prueba";
import Footer2 from "./Footer2";

import background from '../assets/imagenes/back_blogs_edit.png';
import {data} from '../objetos/ObjetoBlogs';


function Blogs() {

  return (
    <>
      <div className="" style={{backgroundImage:`url(${background})`}}>
        <Header/>


<Prueba datos={data}/>
</div>
    
      <Footer/>
      <Footer2/>
      
    </>
  );
}

export default Blogs;
