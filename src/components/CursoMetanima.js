import React from "react";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import InfoCurso from "./InfoCurso";

import Ejemplo from "./Ejemplo";

import VideoMetanima from "./VideoMetanima";
import {BiBookReader} from "react-icons/bi"
import {GiSpeaker,GiUpgrade} from "react-icons/gi"
import {AiOutlineLike} from "react-icons/ai"
import Correccion from "./CorreccionTest";
import ContenidoCursoMetanima from "./ContenidoCursoMetanima";
import background from "../assets/imagenes/back_metanima_curso.png";
import { PiClockCounterClockwiseBold, PiVideoDuotone } from "react-icons/pi";
import { BsPersonSquare } from "react-icons/bs";
import {datam} from '../objetos/ObjetoMetanimaCruso';

const estilo = {
    display:"inline-block",
    color:"#000000",
  };


  

const containerStyle = {
    position: "relative",
    width: "100%",
    height: "50%"
  };
  
  const gradientBackgroundStyle = {
    
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor:"blue", 
    zIndex: -1
  };
  
  const gradientBackgroundStyle2 = {
    
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:"white", 
    zIndex: -1
  };


  const dataCurso = {
    valoracion: "50%",
    estudiantes: 300,
    nivel: "avanzado",
    idioma:"español"
  };

  const circleStyle = {
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    backgroundColor: `#0067e0`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    zIndex:3
  };

  const inputStyle = {
    maxWidth: "80%",
    margin: "10px auto"
  };
  const styleAbout = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "blue",
  };

const CursoMetanima = (props)=>{
  const estilo = {
    display: "inline-block",
    color: "white",
    WebkitBoxShadow: "1px 0px 12px 12px rgba(255,255,255,0.75)",
    MozBoxShadow: "-1px 0px 12px 12px rgba(255,255,255,0.75)",
    boxShadow: "1px 0px 24px 12px rgba(255,255,255,0.75)",
  };
  const circleStyle = {
    width: "40em",
    height: "40em",
    borderRadius: "50%",
    backgroundColor: `#0b2f59`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    zIndex:2,
    fontSize:"0.9em !important"
  };
  const styleAbout = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    color: "blue",
  };

  const estiloResponsive = {
    fontSize: "70%", // Tamaño de fuente más pequeño para pantallas pequeñas
  };

    return(
      
        <>
                   <div style={{backgroundImage:`url(${background})`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat",}}>
      
        <VideoMetanima datos={props.datos}/>
        





      
      <div className="row bg-white">
      <div style={{backgroundColor:"transparent"}}>
          
            <br/>
            <br/>
            <br/>
            <h2 className="text-primary text-center">{props.datos.informacion} </h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/> 
            <br/>
            <div className="container">
  <div className="row ">
    <div className="col-md-6" style={{marginTop:"5.5em"}}>
      <div className="container" >
        <h4 className="text-primary text-start">
          {props.datos.preguntaCurso}
        </h4>
        <br/><br/>
        <p className="lead text-primary" style={{textAlign:"justify"}}>
          {props.datos.respuestaCurso}
        </p>
      </div>
    </div>
    <div className="col-md-6 d-flex justify-content-center d-none d-md-block ">
            <div className="circulo " style={{ ...circleStyle, maxWidth: "40em", minHeight: "18em" }}>
              <h1 className="display-5 text-white">Matricúlate</h1>
              <div style={{ textAlign: "center" }}>
                <div className="my-3">
                  <input
                    type="text"
                    className="p-3 text-white"
                    style={{ textAlign: "center", width: "60%", borderRadius: "50px", backgroundImage: "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(183,198,205,0.14049369747899154) 100%)" }}
                    placeholder="Nombres y Apellidos"
                    aria-label="nombre"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="my-3 ">
                  <input
                    type="text"
                    className="p-3 text-white"
                    style={{ textAlign: "center", width: "60%", borderRadius: "50px", backgroundImage: "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(183,198,205,0.14049369747899154) 100%)" }}
                    placeholder="Correo Electrónico"
                    aria-label="correo"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="my-3">
                  <input
                    type="text"
                    className="p-3 text-white"
                    style={{ textAlign: "center", width: "60%", borderRadius: "50px", backgroundImage: "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(183,198,205,0.14049369747899154) 100%)" }}
                    placeholder="Teléfono y/o Celular"
                    aria-label="telefono"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <Correccion datos={props.datos}/>
                <button className="btn btn-primary bg-secondary">Enviar</button>
              </div>
            </div>
          </div>
          <div className="col-12 d-md-none">
                  {/* Esta imagen se muestra solo en pantallas pequeñas */}
                  <div className="circulo " style={{ ...circleStyle, maxWidth: "21em", maxHeight: "20em" }}>
              <h1 className="text-white mt-5" style={{fontSize:"1.5em"}}>Matricúlate</h1>
              <div style={{ textAlign: "center" }}>
                <div className="my-2">
                  <input
                    type="text"
                    className="p-1 text-white"
                    style={{ textAlign: "center", width: "60%", borderRadius: "50px", backgroundImage: "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(183,198,205,0.14049369747899154) 100%)", fontSize:"0.9em" }}
                    placeholder="Nombres y Apellidos"
                    aria-label="nombre"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="my-3 ">
                  <input
                    type="text"
                    className="p-1 text-white"
                    style={{ textAlign: "center", width: "60%", borderRadius: "50px", backgroundImage: "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(183,198,205,0.14049369747899154) 100%)", fontSize:"0.9em " }}
                    placeholder="Correo Electrónico"
                    aria-label="correo"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="my-3">
                  <input
                    type="text"
                    className="p-1 text-white"
                    style={{ textAlign: "center", width: "60%", borderRadius: "50px", backgroundImage: "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(183,198,205,0.14049369747899154) 100%)", fontSize:"0.9em " }}
                    placeholder="Teléfono y/o Celular"
                    aria-label="telefono"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <Correccion datos ={props.datos}/>
                <button className="btn btn-primary bg-secondary  p-0"  style={{width:"25%",marginTop:"-1.5em"}} >Enviar</button>
              </div>
            </div>
            </div>
  </div>
</div>
    <br/>
    <br/>
    

    <div className="container">
    <div className="row">
        <div className="col-sm " >
          <div className="m-5 text-white px-5" style={{display:"inline-block",borderRadius:"80px",backgroundImage:"linear-gradient(287deg, rgba(11,47,89,1) 0%, rgba(164,127,40,1) 84%)"}}>
            <div className="p-4">
            <h4 className="fs-5">Costo</h4>
            <h3 className="display-5"> S/{props.datos.costo}</h3>
            </div>
          </div>
          <div>
              <div className="d-flex align-items-center">
                <PiClockCounterClockwiseBold className="display-3 mx-4" style={{color:"#D1A900"}} />
                <div>
                  <h3 className="text-primary"><strong>Duracion</strong></h3>
                  <h4 className="text-primary">{props.datos.duracion}</h4>
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <PiVideoDuotone className="  display-3 mx-4" style={{color:"#D1A900"}} />
                <div>
                  <h3 className="text-primary"><strong>Lecciones</strong></h3>
                  <h4 className="text-primary">{props.datos.lecciones}</h4>
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <BsPersonSquare className="display-3 mx-4" style={{color:"#D1A900"}} />
                <div>
                  <h3 className="text-primary"><strong>Modalidad</strong></h3>
                  <h4 className="text-primary">{props.datos.modalidad}</h4>
                </div>
              </div>
              
            </div>
        </div>
        <div className="col" style={styleAbout}>
            <div className="mt-5" style={{width:"80%",textAlign:"justify", marginLeft:"1.3em"}}>
            <br/>
          <h2 className="">Acerca del curso</h2>
          <br/>
          <p className="lead" style={{textAlign:"justify"}}>

            {props.datos.acerca}
          </p>
          </div>
        </div>
      </div>
      </div>
      <br/>
      <br/><br/><br/><br/>
      <div className="container">
      <div className="row bg-white m-1">
        <div className="col-sm m-1" style={{paddingTop:"3em"}}>
          <h1 className="text-primary text-start mb-4"style={{marginLeft:"5%"}} >Beneficios</h1>
          <br/>
          
          <ul style={{marginLeft:"10%", textAlign:"left",width:"80%"}}>

            {props.datos.beneficios.map((item,index)=>(
              <li>
                <p className="lead text-primary"> {item.item}</p>
              </li>

            ))}

            
          </ul>
        </div>
        <div className="col-sm" style={styleAbout}>
            <div className="border" style={{width:"70%",height:"100%", display:"inline-block",marginLeft:"15%", borderTopLeftRadius:"70px",borderTopRightRadius:"70px",backgroundImage:"linear-gradient(180deg, rgba(11,47,89,1) 0%, rgba(164,127,40,1) 84%)"}} >
          <h1 className="text-white text-start mt-5 mx-4">Requisitos y materiales</h1>
          <p className="text-white m-4" style={{textAlign:"justify", fontSize:"1em"}}>
            {props.datos.requisitos}
          </p>
          </div>
        </div>
      </div>
      </div>
        </div>

      </div>
      <Ejemplo datos={props.datos}/>
      <ContenidoCursoMetanima datos={props.datos}/>
        
      </div>
        <Footer/>
        <Footer2/>
        </>
    )
};

export default CursoMetanima;
