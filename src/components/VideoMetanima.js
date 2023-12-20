import React from "react";
import video from "../assets/VIDEO-HORAIZONTAL-Curso-farmacología-cardiovascular.mp4";
import "./backgrounds.css";
import Header from "./Header";
import Valoraciones from "./Valoraciones";

const VideoMetanima = (props) => {
  return (
    <>
       <div className="bg-curso-video ">    
        <div className="video-container ">
          <video className="video-background" src={video} autoPlay loop muted />
            <div className="content ">
              <div className="container">
                <div className="col">
      <Header />
                  <h1 className="display-1 text-center">{props.datos.titulo1} </h1>
                  <h1 className="display-1 text-center">{props.datos.titulo2}</h1>
                </div>
              </div>
              <div className="d-flex justify-content-center">

              <div className="m-3 p-3 " style={{width:"60%", margin:"0 auto"}}>
                <p className="" style={{textAlign:"left"}}>
                {props.datos.parrafo}
                </p>
              </div>
              </div>
              <br/>
              
                <Valoraciones datos={props.datos} />

              
            </div>
          
        </div>
      </div>
    </>
  );
};

export default VideoMetanima;