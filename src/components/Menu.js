import React from "react";
import Barra from "./Barra";
import Casos from "./Casos";
import Bord from "./Bord";
import Card from "./Cards";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import imagen from '../imagenes/img1.png';
// fondo img4
import '../estilos/academia.css';
import MenuCardSlider from "./MenuCardSlider";
  
function Menu() {
  return (
    <div className="bg-image-qa">
      <div className="bg-image-qa">
        <Header />

        <h1 className="display-1 text-white">Academia QF</h1>
        <hr style={{border:"solid 4px white", width:"70%"}}/>
        <p className="lead text-white" id="texto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
  
  
        <MenuCardSlider/>


        

        <div className="row row justify-content-around m-5" >
          <div className="col-4" style={{border:"1px solid white", borderRadius:"20px",background: "linear-gradient(to left, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0))",
    backdropFilter: "blur(10px)"}}>
            <h1 className="p-3 text-white">Repaso-ENAFB</h1>
          </div>
          <div className="col-4 " style={{border:"1px solid white", borderRadius:"20px", background: "linear-gradient(to left, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0))",
    backdropFilter: "blur(10px)"}}>
            <h1 className="p-3 text-white">Repaso-RESIDENTADO</h1>
          </div>
        </div>
      </div>
      <Footer />
      <Footer2/>
    </div>
  );
}

export default Menu;
