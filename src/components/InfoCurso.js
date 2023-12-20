import React from "react";
import Correccion from "./CorreccionTest";
import { PiClockCounterClockwiseBold, PiVideoDuotone } from "react-icons/pi";
import { BsPersonSquare } from "react-icons/bs";
import './placeholder.css';






const data = {
  costo: "S/130.00",
  duracion: "14,2 horas",
  lecciones: "9 lecciones",
  modalidad: "online y ritmo",
  acerca: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  beneficios: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
  requisitos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",

};

const circleStyle = {
  width: "40em",
  height: "40em",
  borderRadius: "50%",
  backgroundColor: `#0067e0`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  zIndex: 2,
  fontSize:"0.9em !important"

};

const inputStyle = {
  maxWidth: "80%",
  margin: "10px auto"
};
const styleAbout = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  color: "blue",
};



const InfoCurso = (props) => {



  
  return (
    <div className="container" style={{ backgroundColor: "transparent" }}>
         
      
      <br />
      <br />
      <br />
      <h2 className="text-info text-center">{props.datos.informacion}</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container">
        <div className="row ">
          <div className="col-md-6 " style={{ marginTop: "5.5em" }}>
            <div className="container" >
              <h3 className="text-primary text-start" style={{fontSize:"2.5em"}}>
                {props.datos.preguntaCurso}
              </h3>
              <br /><br />
              <p className="lead text-primary " style={{ textAlign: "justify" }}>
                {props.datos.respuestaCurso}
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center d-none d-md-block ">
            <div className="circulo " style={{ ...circleStyle, maxWidth: "40em", minHeight: "18em" }}>
              <h1 className="display-4  text-white" >Matricúlate</h1>
              <div style={{ textAlign: "center" }}>
                <div className="my-3">
                  <input
                    type="text"
                    className="p-3 text-white"
                    style={{ textAlign: "center", width: "60%", borderRadius: "50px", backgroundImage: "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(183,198,205,0.14049369747899154) 100%)",'::placeholder':"white",
                    "::placeholder": {
                      color: "#00000",
                      }, }}
                    placeholder="Nombres y Apellidos"
                    aria-label="nombre"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="my-3 ">
                  <input
                    type="text"
                    className="p-3 my-input text-white"
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
                <Correccion datos={props.datos} />
                <button className="btn btn-primary bg-secondary">Enviar</button>
              </div>
            </div>
          </div>
          <div className="col-12 d-md-none">
                  {/* Esta imagen se muestra solo en pantallas pequeñas */}
                  <div className="circulo " style={{ ...circleStyle, maxWidth: "21em", maxHeight: "21em", marginTop:"4em", marginBottom:"3em" }}>
              <h1 className="text-white mt-5">Matricúlate</h1>
              <div style={{ textAlign: "center" }}>
                <div className="my-3">
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
                <Correccion datos = {props.datos} />
                <button className="btn btn-primary bg-secondary">Enviar</button>
              </div>
            </div>
                </div>
        </div>
      </div>

      <br />
      <br />

      <div className="container ">
        <div className="row">
          <div className="col-sm " >
            <div className="mx-4 my-4 text-white px-5" style={{ display: "inline-block", borderRadius: "80px", backgroundImage: "linear-gradient(270deg, rgba(0,103,224,0.9864320728291317) 37%, rgba(15,197,236,0.9556197478991597) 100%)" }}>
              <div className="p-4">
                <h4 className="fs-5">Costo</h4>
                <h1 className="display-5">{props.datos.costo}</h1>
              </div>
            </div>
            <div className="col px-4">
              <div className="d-flex align-items-center">
                <PiClockCounterClockwiseBold className="text-primary display-3 mx-4" />
                <div>
                  <h2 className="text-primary"><strong>Duracion</strong></h2>
                  <h4 className="text-primary">{props.datos.duracion}</h4>
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <PiVideoDuotone className=" text-primary display-3 mx-4" />
                <div>
                  <h2 className="text-primary"><strong>Lecciones</strong></h2>
                  <h4 className="text-primary">{props.datos.lecciones}</h4>
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <BsPersonSquare className="text-primary display-3 mx-4" />
                <div>
                  <h2 className="text-primary"><strong>Modalidad</strong></h2>
                  <h4 className="text-primary">{props.datos.modalidad}</h4>
                </div>
              </div>
              
            </div>
          </div>
          <div className="col " style={styleAbout}>
            <div className="mt-5" style={{ width: "95%", textAlign: "justify" }}>
              <br />
              <h2 className="">Acerca del curso</h2>
              <br />
              <p className="lead" style={{ textAlign: "justify" }}>

              {props.datos.acerca}
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br /><br /><br /><br />

      <div className="container ">
        <div className="row bg-white m-1">
          <div className="col-sm m-1 " style={{paddingTop:"3em"}}>
            <h1 className="text-primary text-start mb-4" style={{ marginLeft: "5%" }} >Beneficios</h1>
            <br />

            <ul style={{ marginLeft: "10%", textAlign: "left", width: "80%" }}>

              {props.datos.beneficios.map((item,index)=>(
                <div>
                  <li>
                <p className="lead text-primary"> {item.item}</p>
              </li>    
                </div>
              ))}

            </ul>
          </div>

          <div className="col-sm-12 col-md-6" style={styleAbout}>
  <div className="border" style={{ width: window.innerWidth <= 768 ? '90%' : '70%', height: "100%", display: "inline-block", marginLeft: window.innerWidth <=768 ? "1em": "3em", borderTopLeftRadius: "70px", borderTopRightRadius: "70px", backgroundImage: "linear-gradient(180deg, rgba(0,103,224,0.9864320728291317) 42%, rgba(0,164,255,1) 100%)" }}>
    <h1 className="text-white text-start mt-5 mx-4">Requisitos y materiales</h1>
    <p className="text-white m-4" style={{ textAlign: "justify", fontSize: "1em" }}>
    {props.datos.requisitos}

    </p>
  </div>
</div>

          
        </div>
      </div>
    </div>

  );


}

export default InfoCurso;