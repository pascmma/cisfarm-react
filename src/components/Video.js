import React from "react";
import video from "../assets/VIDEO-HORAIZONTAL-Curso-farmacología-cardiovascular.mp4";
import "./backgrounds.css";
import Header from "./Header";
import Valoraciones from "./Valoraciones";

const Video = (props) => {
  return (
    <>
      <div className="bg-curso-video ">    
        <div className="video-container ">
          <video className="video-background" src={video} autoPlay loop muted />
            <div className="content ">
              <div className="container">
                <div className="col text-center">
      <Header />
                  <h1 className="display-1">{props.datosObjeto.titulo1}</h1>
                  <h1 className="display-1">{props.datosObjeto.titulo2}</h1>
                </div>
              </div>
              <div className="d-flex justify-content-center">

              <div className="m-3 p-3 " style={{width:"60%", margin:"0 auto"}}>
                <p className="" style={{textAlign:"left"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
              </div>
              <br/>
              
                <Valoraciones  />

              
            </div>
          
        </div>
      </div>

    </>
  );
};

export default Video;
