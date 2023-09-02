import React from "react";
import video from "../assets/videoClinica.mp4";
import "./backgrounds.css";

const VideoMetanima = () => {
  return (
    <>
      <div className="bg-curso-video">
        <div className="video-container">
          <video className="video-background" src={video} autoPlay loop muted />
            <div className="content border">
              <div className="row">
                <div className="col">
                  <h1 className="display-1">Metanima</h1>
                  <h1 className="display-1">Curso 1</h1>
                </div>
              </div>

              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>

              <h3>Aprende mas en el campo de los mecanismos en 3D</h3>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default VideoMetanima;