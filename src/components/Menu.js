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

        <h1 className="text-white mx-5" style={{fontSize:"800%",textAlign:"left"}}  >Academia QF</h1>
        <hr style={{border:"solid 4px white", width:"70%"}}/>
        <p className="display-5 text-white text-start px-5" id="texto" style={{width:"80%"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
  
        <MenuCardSlider/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        

        <div className="row row justify-content-around m-5" >
          <div className="col-4 my-3" style={{border:"1px solid white", borderRadius:"20px",background: "linear-gradient(180deg, rgba(141,143,161,1) 0%, rgba(183,198,205,0.4430147058823529) 67%)",
    backdropFilter: "blur(10px)"}}>
            <h1 className="p-3 text-white">Repaso-ENAFB</h1>
          </div>
          <div className="col-4 my-3" style={{border:"1px solid white", borderRadius:"20px",background: "linear-gradient(180deg, rgba(141,143,161,1) 0%, rgba(183,198,205,0.4430147058823529) 67%)",
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
