// Menu-inicio

import React from "react";
import "./nav.css";
import Cards from "./Cards";
import Footer from "./Footer";
import Barra from "./Barra";
import Casos from "./Casos";
import Bord from "./Bord";

function Inicio() {
  return (
    <>
      <div className="bg-image">
        <Barra />

        <h1 className="display-1">Cisfarm TITULO</h1>
        <p className="lead" id="texto">
          textototototoasdjajdjdajdjldalsjd adjlajdal ja
          sajdlajsdljashfjlasjfsjdjaljfasjd asjdasdwi a dsad sajsdjjsadjasdj
          jsdajklsdajklsdajksdajsa sdahssdkjjksdajajksdjdajdlak
        </p>

        <Cards/>
        <button type="button" className="btn btn-outline-light" >Registrases</button>
        <Casos/>
       <Bord></Bord>


        <Footer />
      </div>
    </>
  );
}

export default Inicio;
