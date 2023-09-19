
import React from "react";


const data1 ={
    promesa: "Promesa de marca",
    parrafoPro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    objetivo:"OBJETIVO",
    parrafoObj: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
} 



const Promesa = ()=>{
    return(
        <>
        <br/><br/><br/><br/>
         <div className="bg-white col text-center" style={{width:"100%",height:"32em"}}>
         <br/><br/><br/><br/><br/>         
        <h1 className="col align-self-center py-4 text-warning">{data1.promesa}</h1>

        <p className="mx-auto lead text-primary"  style={{width:"50%"}}>
          {data1.parrafoPro}
        </p>
      </div>
      
      <div className="bg-primary col text-center " style={{width:"100%",height:"22em", backgroundImage:"linear-gradient(270deg, rgba(52,160,177,1) 0%, rgba(0,155,255,1) 100%)", borderBottomLeftRadius:"35px",borderBottomRightRadius:"35px"}}>
        <h1 className="col align-self-center py-5 text-white">{data1.objetivo}</h1>

        <p className="mx-auto lead text-white"  style={{width:"60%"}}>
          {data1.parrafoPro}
        </p>
      </div>

      
      <br/><br/><br/>

     
      <div>

      

      </div>

        </>
    )
};

export default Promesa;