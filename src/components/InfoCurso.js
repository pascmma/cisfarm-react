import React from "react";


const data = {
    costo:"$ 129",
    duracion: "14,2 horas",
    lecciones: "9 lecciones",
    modalidad: "online y ritmo",
    acerca: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    beneficios:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    requisitos:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  
  };

const circleStyle = {
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px"
  };

  const inputStyle = {
    maxWidth: "80%",
    margin: "10px auto"
  };
  const styleAbout = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "lightblue",
  };

const InfoCurso =() =>{
    return(
        <div style={{backgroundColor:"transparent"}}>
     <div className="row d-flex justify-content-center border ">
      <div className="col border d-flex flex-column justify-content-center" >
        
        <div className="d-flex flex-column justify-content-center mx-5" style={{display:"flex",  width:"50%",alignItems:"center"}}>
        <h5 className="text-white text-center" style={{display:"flex",alignItems:"center"}}>
          ¿Por qué estudiar Farmacología Cardiovascular en Cisfarm?
        </h5>
        <p className="lead text-wrap text-white text-center " style={{display:"flex",alignItems:"center"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.Lorem ipsum
        </p>
        </div>
      </div>
      <div className="col-md-6 d-flex justify-content-center">
        <div className="circulo" style={circleStyle}>
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
              type="text-white"
              className="form-control bg-transparent"
              placeholder="Telefono y/o celular"
              aria-label="telefo"
              aria-describedby="basic-addon1"
            />
          </div>
          <button className="btn btn-primary">Enviar</button>
        </div>
      </div>
    </div>
    <br/>
    <br/>

    <div className="row">
        <div className="col-sm" >
          <div className="rounded-circle border m-2 p-2 bg-primary text-white" style={{display:"inline-block"}}>
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
        <div className="col-sm border border-danger" style={styleAbout}>
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
        <div className="col-sm border">
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
            <div className="rounded bg-primary border" style={{width:"50%", display:"inline-block"}} >
          <h3 className="text-white">Requisitos y materiales</h3>
          <p>
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
        </div>

    );


}

export default InfoCurso;