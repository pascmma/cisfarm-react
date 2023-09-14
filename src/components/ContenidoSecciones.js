import React,{useState} from "react";
import imagen from '../imagenes/img15.png';

const ContenidoSecciones =(props) =>{
    const imagenes = {
        width: '80%'
      }
      
      const bordeRadio = {
        borderRadius: "50px",
        backgroundColor: "rgba(213, 181, 143,0.5)"
      }
    return(
        <>
        <div className="container">
        <div className="row ">
          <div className="col ">
            <div>
              <div className="p-1" style={bordeRadio}>
                <h5 className="text-danger mx-5 text-start"> {props.seccion}</h5>
                <p className="text-start mx-5" style={{ color: "#11215D" }}>Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur</p>

              </div>

            </div>
          </div>
          <div className="col-2 ">
            <img className="rounded" src={imagen} style={imagenes} />
          </div>
          <div className="col-2 ">
            <img className="rounded" src={imagen} style={imagenes} />
          </div>
          <div className="col">
            <div className="col ">
              <div>
                <div className="p-1" style={bordeRadio}>
                  <h5 className="text-danger mx-5 text-start">{props.seccion}</h5>
                  <p className="text-start mx-5" style={{ color: "#11215D" }}>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur</p>

                </div>

              </div>
            </div>
          </div>


        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row ">
          <div className="col ">
            <div>
              <div className="p-1" style={bordeRadio}>
                <h5 className="text-danger mx-5 text-start">{props.seccion}</h5>
                <p className="text-start mx-5" style={{ color: "#11215D" }}>Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur</p>

              </div>

            </div>
          </div>
          <div className="col-2 ">
            <img className="rounded" src={imagen} style={imagenes} />
          </div>
          <div className="col-2 ">
            <img className="rounded" src={imagen} style={imagenes} />
          </div>
          <div className="col">
            <div className="col ">
              <div>
                <div className="p-1" style={bordeRadio}>
                  <h5 className="text-danger mx-5 text-start">{props.seccion}</h5>
                  <p className="text-start mx-5" style={{ color: "#11215D" }}>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur</p>

                </div>

              </div>
            </div>
          </div>


        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row ">
          <div className="col ">
            <div>
              <div className="p-1" style={bordeRadio}>
                <h5 className="text-danger mx-5 text-start">{props.seccion}</h5>
                <p className="text-start mx-5" style={{ color: "#11215D" }}>Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur</p>

              </div>

            </div>
          </div>
          <div className="col-2 ">
            <img className="rounded" src={imagen} style={imagenes} />
          </div>
          <div className="col-2 ">
            <img className="rounded" src={imagen} style={imagenes} />
          </div>
          <div className="col">
            <div className="col ">
              <div>
                <div className="p-1" style={bordeRadio}>
                  <h5 className="text-danger mx-5 text-start">{props.seccion}</h5>
                  <p className="text-start mx-5" style={{ color: "#11215D" }}>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur</p>

                </div>

              </div>
            </div>
          </div>


        </div>
      </div></>
    );
};

export default ContenidoSecciones;