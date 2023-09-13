import React from "react";
import './footer2.css';
import logo from '../imagenes/img3.png';
import {FaFacebook,FaTwitter,FaYoutube,FaInstagram,FaTiktok} from 'react-icons/fa';


const Footer2 = () =>{
    return(
        <footer className="footer p-5" style={{borderTopLeftRadius:"60px",borderTopRightRadius:"60px", background:"#091e40"}}>
            
                <div className="row ">
                    <div className="col-2">
                        <img src={logo} className="logo"/>
                        <h5 className="text-white" style={{textAlign:"left"}}>Tecnologia y salud al alcance de todos</h5>
                    </div>
                    <div className="col-6 text-white d-flex justify-content-start" style={{textAlign:"left"}} >
                        <ul className="">
                            <li> Terminos y condiciones</li>
                            <li> Metodologia de enseñanza</li>
                            <li> Politica de privacidad</li>
                            <li> Directrices de marca</li>
                        </ul>
                    </div>
                    <div className="col-4 d-flex felx-row p-2">
                        <FaFacebook className="logos"/>
                        <FaInstagram className="logos"/>
                        <FaTwitter className="logos"/>
                        <FaTiktok className="logos"/>
                        <FaYoutube className="logos"/>

                    </div>
                </div>
            

        </footer>
    );
}

export default Footer2;