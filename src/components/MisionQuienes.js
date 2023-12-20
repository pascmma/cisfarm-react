import React from "react";

const MisionQuienes = (props) => {
  return (
    <>
      <div
        className="container rounded"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.897)" }}
      >
        <div className="row ">
          <div className="col-lg-6 col-md-12 my-5">
            <h3 className="text-warning" style={{ textAlign: "left" }}>
              Misión
            </h3>
            <br />
            <br />
            <ul className="text-primary lead text-start">

              {props.datos.mision.map((item,index)=>(
                <div>
                  <li>{item.item}</li>
                  <br />    
                </div>
              ))}
            
            </ul>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className=""
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(6,19,148,1) 0%, rgba(0,121,255,1) 100%)",
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "30px",
              }}
            >
              <h3 className="text-white mx-5 py-5 text-start">Visión</h3>
              <p className="text-wrap text-white lead mx-5 text-start pb-5">
                {props.datos.vision}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MisionQuienes;
