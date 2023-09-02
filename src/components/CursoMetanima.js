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


const estilo = {
    display:"inline-block",
    color:"#000000",
  };


  const data = {
    costo:"$ 129",
    duracion: "14,2 horas",
    lecciones: "9 lecciones",
    modalidad: "online y ritmo",
    acerca: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    beneficios:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    requisitos:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  
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

const CursoMetanima = ()=>{
    return(
        <>
        <div className="bg-primary">
            <Header/>        
        </div>
        <VideoMetanima/>
        <div className="iconos">
        <div className="row display-2">
                <div className="col-3">
                    <div className="border pb-3 px-4 rounded-circle" style={estilo}>
                        <AiOutlineLike />
                    </div>
                    <p className="lead">Valoraciones buenas</p>
                    <p className="lead">{dataCurso.valoracion}</p>
                </div>
                <div className="col-3">
                    <div className="border pb-3 px-4 rounded-circle" style={estilo}>
                        <BiBookReader/>
                    </div>
                        <p className="lead">Estudiantes</p>
                        <p className="lead">{dataCurso.estudiantes}</p>

                </div>
                <div className="col-3">
                    <div className="border pb-3 px-4 rounded-circle" style={estilo}>
                        <GiUpgrade/>
                    </div>
                        <p className="lead"> Nivel</p>
                        <p className="lead">{dataCurso.nivel}</p>
                </div>
                <div className="col-3">
                    <div className="border pb-3 px-4 rounded-circle" style={estilo}>
                        <GiSpeaker/>
                    </div>
                        <p className="lead"> Idioma</p>
                        <p className="lead">{dataCurso.idioma}</p>
                </div>
            </div>
        </div>

        <div className="informacion">
        <div className="row d-flex justify-content-center  ">
      <div className="col  d-flex flex-column justify-content-center" >
        
        <div className="d-flex flex-column justify-content-center mx-5" style={{display:"flex",  width:"50%",alignItems:"center"}}>
        <h5 className="text-primary text-center" style={{display:"flex",alignItems:"center"}}>
          ¿Por qué estudiar Farmacología Cardiovascular en Cisfarm?
        </h5>
        <p className="lead text-wrap text-primary text-center " style={{display:"flex",alignItems:"center"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.Lorem ipsum
        </p>
        </div>
      </div>
      <div className="col-md-6 d-flex justify-content-center">
        <div className="circulo border" style={circleStyle}>
          <h5 className="text-white">Matriculate </h5>
          <div className="input-group mb-3" style={inputStyle}>
            <input
              type="text"
              className="form-control bg-transparent"
              placeholder="Nombres y Apellidos"
              aria-label="nombre"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control bg-transparent"
              placeholder="Correo Electronico"
              aria-label="correo"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="text-primary"
              className="form-control bg-transparent"
              placeholder="Telefono y/o celular"
              aria-label="telefo"
              aria-describedby="basic-addon1"
            />
          </div>
          <Correccion/>
          <button className="btn btn-primary bg-secondary">Enviar</button>
        </div>
      </div>
    </div>

        </div>
        <br/><br/><br/>
        <div className="row">
        <div className="col-sm" >
          <div className="rounded-circle border m-2 p-2 bg-primary text-white" style={{display:"inline-block",backgroundImage: "linear-gradient(90deg, rgba(255,140,24,1) 2%, rgba(47,39,105,1) 100%)"
}}>
            <h6>Costo</h6>
            <h3 className="display-5">$ 129.00</h3>
          </div>
          <div>
            <h3>duracion</h3>
            <h4>14,2horas</h4>
            <hr />
            <h3>Lecciones</h3>
            <h4>9 sesiones</h4>
            <hr />
            <h3>Modalidad</h3>
            <h4>Online</h4>
            <hr />
          </div>
        </div>
        <div className="col-sm" style={styleAbout}>
            <div className="" style={{width:"50%"}}>
          <h3 className="">Acerca del curso</h3>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.Lorem ipsum
          </p>
          </div>
        </div>
      </div>

      <div className="row bg-white">
        <div className="col-sm ">
          <h4>Beneficios</h4>
          <ul>
            <li>
              <p className="lead text-primary"> {data.beneficios}</p>
            </li>
            <li>
            <p className="lead text-primary"> {data.beneficios}</p>
            </li>
            <li>
            <p className="lead text-primary"> {data.beneficios}</p>
            </li>
            <li>
            <p className="lead text-primary"> {data.beneficios}</p>
            </li>
            <li>
            <p className="lead text-primary"> {data.beneficios}</p>
            </li>
          </ul>
        </div>
        <div className="col-sm" style={styleAbout}>
            <div className="rounded-5 bg-primary" style={{width:"50%", display:"inline-block",backgroundImage:"linear-gradient(180deg, rgba(47,39,105,1) 18%, rgba(255,140,24,1) 100%)"}} >
          <h3 className="text-white">Requisitos y materiales</h3>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.Lorem ipsum.
          </p>
          </div>
        </div>
      </div>
      <Ejemplo/>
      <ContenidoCursoMetanima />
        

        <Footer/>
        <Footer2/>
        </>
    )
};

export default CursoMetanima;
