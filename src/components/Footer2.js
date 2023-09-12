import React from "react";
import './footer2.css';
import logo from '../imagenes/img3.png';
import {FaFacebook,FaTwitter,FaYoutube,FaInstagram,FaTiktok} from 'react-icons/fa';


const Footer2 = () =>{
    return(
        <footer className="footer py-3 bg-dark" style={{borderTopLeftRadius:"60px",borderTopRightRadius:"60px"}}>
            <div className="container" >
                <div className="row ">
                    <div className="col-2 ">
                        <img src={logo} className="logo"/>
                        <h6 className="text-white">Tecnologia y salud al alcance de todos</h6>
                    </div>
                    <div className="col-6 text-white d-flex justify-content-start">
                        <ul className="">
                            <li> Terminos y condiciones</li>
                            <li> Metodologia de enseñanza</li>
                            <li> Politica de privacidad</li>
                            <li> Directrices de marca</li>
                        </ul>
                    </div>
                    <div className="col-4 d-flex felx-row">
                        <FaFacebook className="logos"/>
                        <FaInstagram className="logos"/>
                        <FaTwitter className="logos"/>
                        <FaTiktok className="logos"/>
                        <FaYoutube className="logos"/>

                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer2;