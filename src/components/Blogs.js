import React from "react";
import Bordtemp from "./Bordtemp";
import "./nav.css";
import imagen16 from "../imagenes/img16.png";
import Footer from "./Footer";
import Header from "./Header";
import Prueba from "./Prueba";
import Footer2 from "./Footer2";
import img4 from "../imagenes/img4.png";

function Blogs() {

  const styles = {
    backgroundImage: `linear-gradient(180deg, rgba(0,104,225,1) 16%, rgba(255,255,255,1) 43%)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  
};
  return (
    <>
      <div className="" style={styles}>
        <Header/>


<Prueba/>
</div>
      <Footer/>
      <Footer2/>
    </>
  );
}

export default Blogs;
