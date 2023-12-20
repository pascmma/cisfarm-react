import React from "react";

const Beneficios =(props) =>{
    return(
        <>
       <div className="container mb-5">
      <h3 className="text-primary">Beneficios</h3>
      <div className="row" style={{marginRight:"3em"}}>
        {props.datos.beneficios.map((item,  index) => (
          <div
            className="col-md-4 col-sm-6 mb-3 mx-auto "
            
            key={index}
          >
            <div className=" px-2 m-2"
            style={{ borderRadius: "1.5em",transform:"translate(1em)" }}
            >
                <div className="m-1 text-wrap p-5" style={{ borderRadius:"3em", textAlign:"center",backgroundImage:"linear-gradient(90deg, rgba(151,212,255,1) 2%, rgba(124,234,247,0.9304096638655462) 96%)" }}>
                    <p className="text-primary" style={{fontSize:"0.7em"}}>{item.parrafo}</p>

                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
    );
};

export default Beneficios;