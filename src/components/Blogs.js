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
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  
};
  return (
    <>
      <div className="" style={{backgroundImage:`url(${"http://vitplanet.com/academia/background/back_blogs.png"})`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat",}}>
        <Header/>


<Prueba/>
</div>
      <Footer/>
      <Footer2/>
    </>
  );
}

export default Blogs;
