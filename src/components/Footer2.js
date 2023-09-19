import React from "react";
import './footer2.css';
import logo from '../imagenes/img3.png';
import {FaFacebook,FaTwitter,FaYoutube,FaInstagram,FaTiktok} from 'react-icons/fa';


const Footer2 = () =>{
    return(
        <footer className="footer p-5" style={{ borderTopLeftRadius: "60px", borderTopRightRadius: "60px", background: "#091e40" }}>

<div className="row">
  <div className="col-12 col-md-2  text-center" style={{marginTop:"-2em"}}>
    <img src={logo} className="" style={{ width: "15em" }} alt="Logo" />
    <h5 className="text-white" style={{ fontSize: "1.2rem", marginTop:"-1.5em", textAlign:"left", marginLeft:"1.5em" }}>Tecnología y salud al alcance de todos</h5>
  </div>

  <div className="col-12 col-md-5 text-info " style={{ textAlign: "justify" }}>
    <ul>
      <li style={{ fontSize: "0.9rem" }}>Términos y condiciones</li>
      <li style={{ fontSize: "0.9rem" }}>Metodología de enseñanza</li>
      <li style={{ fontSize: "0.9rem" }}>Política de privacidad</li>
      <li style={{ fontSize: "0.9rem" }}>Directrices de marca</li>
    </ul>
  </div>

  <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
    <FaFacebook className="logos" />
    <FaInstagram className="logos" />
    <FaTwitter className="logos" />
    <FaTiktok className="logos" />
    <FaYoutube className="logos" />
  </div>
</div>


</footer>

    );
}

export default Footer2;