
import React from "react";

const Promesa = (props)=>{
    return(
        <>
        <br/><br/><br/><br/>
         <div className="bg-white col text-center" style={{width:"100%",paddingTop:"3.5em",paddingBottom:"3em"}}>
             
        <h1 className="col align-self-center py-4 text-warning">Promesa de marca</h1>

        <p className="mx-auto lead text-primary"  style={{width:"60%"}}>
          {props.datos.promesa}
        </p>
      </div>
      
      <div className="bg-primary col text-center " style={{width:"100%", backgroundImage:"linear-gradient(270deg, rgba(52,160,177,1) 0%, rgba(0,155,255,1) 100%)", borderBottomLeftRadius:"35px",borderBottomRightRadius:"35px", paddingBottom:"2em"}}>
        <h1 className="col align-self-center py-5 text-white">OBJETIVO</h1>

        <p className="mx-auto lead text-white"  style={{width:"60%"}}>
          {props.datos.objetivo}
        </p>
      </div>

      
      <br/><br/><br/>

     
      <div>

      

      </div>

        </>
    )
};

export default Promesa;