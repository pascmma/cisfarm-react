import React from "react";
import { BiBookReader } from "react-icons/bi";
import { GiSpeaker, GiUpgrade } from "react-icons/gi";
import { AiOutlineLike } from "react-icons/ai";

const Valoraciones = (props) => {
  const estilo = {
    display: "inline-block",
    fontSize: "80%",
    color: "white",
    WebkitBoxShadow: "2px 10px 46px 18px rgba(213, 230, 247, 1)",
    MozBoxShadow: "2px 10px 46px 18px rgba(213, 230, 247, 1)",
    boxShadow: "2px 10px 46px 18px rgba(213, 230, 247, 1)",
    paddingBottom: "100%",
  };

  const estiloResponsive = {
    fontSize: "100%", // Tamaño de fuente más pequeño para pantallas pequeñas
  };

  const dataCurso = {
    valoracion: "50%",
    estudiantes: 300,
    nivel: "avanzado",
    idioma: "español",
  };

  return (
    <div className="">
      <div
        className="row display-2 mt-5"
        style={{
          marginLeft: "1.2em",
          marginRight: "1.2em",
          paddingTop: "2em",
        }}
      >
        <div className="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center text-center" style={{ fontSize: "1em",...(window.innerWidth <= 768 ? estiloResponsive : {}) }}>
          <div className="pb-2 px-3 rounded-circle" style={{ ...estilo  }}>
            <AiOutlineLike />
          </div>
          <h4 className="text-white mt-5 mb-4" style={{ fontSize: "0.3em" }}>
            Valoraciones buenas
          </h4>
          <p className="lead text-primary" style={{ fontSize: "0.3em" }}>
            {props.datos.valoraciones}
          </p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center text-center" style={{ fontSize: "1em",...(window.innerWidth <= 768 ? estiloResponsive : {}) }}>
          <div className="pb-2 px-3 rounded-circle " style={{ ...estilo,  }}>
            <BiBookReader />
          </div>
          <h4 className="text-white m-4 mt-5" style={{ fontSize: "0.3em" }}>
            Estudiantes
          </h4>
          <p className="lead text-primary" style={{ fontSize: "0.3em" }}>
            {props.datos.estudiantes}
          </p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center text-center" style={{ fontSize: "1em",...(window.innerWidth <= 768 ? estiloResponsive : {}) }}>
          <div className="pb-2 px-3 rounded-circle" style={{ ...estilo,  }}>
            <GiUpgrade />
          </div>
          <h4 className="text-white m-4 mt-5" style={{ fontSize: "0.3em" }}>
            Nivel
          </h4>
          <p className="lead text-primary" style={{ fontSize: "0.3em" }}>
            {props.datos.nivel}
          </p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center text-center" style={{ fontSize: "1em",...(window.innerWidth <= 768 ? estiloResponsive : {}) }}>
          <div className="py-1 px-3 rounded-circle" style={{ ...estilo,  }}>
            <GiSpeaker />
          </div>
          <h4 className="text-white m-4 mt-5" style={{ fontSize: "0.3em" }}>
            Idioma
          </h4>
          <p className="lead text-primary" style={{ fontSize: "0.3em" }}>
            {props.datos.idioma}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Valoraciones;