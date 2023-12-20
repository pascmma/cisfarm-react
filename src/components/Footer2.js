import React from "react";
import './footer2.css';
import logo from '../assets/imagenes/img3.png';
import {FaFacebook,FaTwitter,FaYoutube,FaInstagram,FaTiktok} from 'react-icons/fa';
import { dataf } from "../objetos/ObjetoFooter";

// Segunfo footer que contiene informacion como los terminos y condiciones 
const Footer2 = () =>{
    return(
      <div style={{backgroundColor:"#DEECFA"}}>
        <footer className="footer p-5" style={{ borderTopLeftRadius: "60px", borderTopRightRadius: "60px", background: "#091e40" }}>

<div className="row">
  <div className="col-12 col-md-2  text-center" style={{marginTop:"-2em"}}>
    <img src={logo} className="" style={{ width: "15em" }} alt="Logo" />
    <h5 className="text-white" style={{ fontSize: "1.2rem", marginTop:"-1.5em", textAlign:"left", marginLeft:"1.5em" }}>Tecnología y salud al alcance de todos</h5>
  </div>

  <div className="col-12 col-md-5 text-info " style={{ textAlign: "justify" }}>
    <ul>
      <li style={{ fontSize: "0.9rem" }}>Términos y condiciones
      <a href={dataf.footer2.terminos}/>
      </li>
      <li style={{ fontSize: "0.9rem" }}>Metodología de enseñanza
      <a href={dataf.footer2.metodologia}/>
      </li>
      <li style={{ fontSize: "0.9rem" }}>Política de privacidad
      <a href={dataf.footer2.politica}/>
      </li>
      <li style={{ fontSize: "0.9rem" }}>Directrices de marca
      <a href={dataf.footer2.directrices}/>
      </li>
    </ul>
  </div>

  <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
    <a href={dataf.footer2.facebook}>
      <FaFacebook className="logos" />  
    </a>
    <a href={dataf.footer2.instagram}>
    <FaInstagram className="logos" />
    </a>
    <a href={dataf.footer2.twitter}>
    <FaTwitter className="logos" />
    </a>
    <a href={dataf.footer2.tiktok}>
    <FaTiktok className="logos" />
    </a>
    <a href={dataf.footer2.youtube}>
    <FaYoutube className="logos"/>
    </a>
  </div>
</div>


</footer>
</div>
    );
}

export default Footer2;