
import React from "react";


const data1 ={
    promesa: "Promesa de marca",
    parrafoPro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    objetivo:"OBJETIVO",
    parrafoObj: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
} 

const data2 = {
    misionli: "Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod",
    visionli: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat. Lorem ipsum dolor
    sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo
    consequat.Lorem ipsum..`,
}

const Promesa = ()=>{
    return(
        <>
        <br/><br/>
         <div className="bg-white col align-self-center" style={{width:"100%",height:"32em"}}>
         <br/><br/>
        <h1 className="col align-self-center py-4 text-warning">{data1.promesa}</h1>

        <p className="mx-auto lead text-primary"  style={{width:"50%"}}>
          {data1.parrafoPro}
        </p>
      </div>
      
      <div className="bg-primary col align-self-center " style={{width:"100%",height:"400px", backgroundImage:"linear-gradient(270deg, rgba(52,160,177,1) 0%, rgba(0,155,255,1) 100%)", borderBottomLeftRadius:"35px",borderBottomRightRadius:"35px"}}>
        <h1 className="col align-self-center py-5 text-white">{data1.objetivo}</h1>

        <p className="mx-auto lead text-white"  style={{width:"50%"}}>
          {data1.parrafoPro}
        </p>
      </div>

      
      <br/><br/><br/>

      <div className="container rounded " style={{backgroundColor:"rgba(255, 255, 255, 0.897)"}}>
        <div className="row ">
            <div className="col">
                <h3 className="text-warning" style={{textAlign:"left"}} >Mision</h3>
                <br/><br/>
                <ul className="text-primary lead text-start">
                    <li >{data2.misionli}</li>
                    <br/>
                    <li>{data2.misionli}</li>
                    <br/>
                    <li>{data2.misionli}</li>
                    <br/>
                    <li>{data2.misionli}</li>

                </ul>
            </div>
            <div className="col">
                <div className="" style={{backgroundImage:"linear-gradient(180deg, rgba(6,19,148,1) 0%, rgba(0,121,255,1) 100%)", borderTopLeftRadius:"30px", borderTopRightRadius:"30px"}}>
                    <h3 className="text-white mx-5 py-5 text-start"> Vision</h3>
                    <p className="text-wrap text-white lead mx-5 text-start pb-5">
                        {data2.visionli}
                    </p>
                </div>
            </div>
        </div>    

      </div>
      <div>

      

      </div>

        </>
    )
};

export default Promesa;