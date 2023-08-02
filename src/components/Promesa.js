
import React from "react";


const data1 ={
    promesa: "promesa de marca",
    parrafoPro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    objetivo:"objetivo",
    parrafoObj: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
} 

const data2 = {
    misionli: "Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod",
    visionli: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}

const Promesa = ()=>{
    return(
        <>
         <div className="bg-white  col align-self-center " style={{width:"100%",height:"400px"}}>
        <h1 className="col align-self-center py-5 text-warning">{data1.promesa}</h1>

        <p className="mx-auto py-5 lead "  style={{width:"50%"}}>
          {data1.parrafoPro}
        </p>
      </div>
      <div className="bg-primary col align-self-center " style={{width:"100%",height:"400px"}}>
        <h1 className="col align-self-center py-5 text-white">{data1.objetivo}</h1>

        <p className="mx-auto py-5 lead "  style={{width:"50%"}}>
          {data1.parrafoPro}
        </p>
      </div>

      <div className="container rounded " style={{backgroundColor:"rgba(255, 255, 255, 0.897)"}}>
        <div className="row d-flex justify-content-center">
            <div className="col">
                <h3 className="text-warning">MISION</h3>
                <ul className="text-primary lead">
                    <li >{data2.misionli}</li>
                    <br/>
                    <li>{data2.misionli}</li>
                    <br/>
                    <li>{data2.misionli}</li>
                    <br/>
                    <li>{data2.misionli}</li>

                </ul>
            </div>
            <div className="col d-flex justify-content-center">
                <div className=" border rounded " style={{width:"20rem",   backgroundColor:"rgba(74, 135, 204, 0.897)"}}>
                    <h3 className="text-white"> Vision</h3>
                    <p className="lead text-wrap text-white">
                        {data2.visionli}
                    </p>
                </div>
            </div>
        </div>    

      </div>
      <div>
      <h1 className="display-4 text-warning"> STAFF</h1>

      </div>

        </>
    )
};

export default Promesa;