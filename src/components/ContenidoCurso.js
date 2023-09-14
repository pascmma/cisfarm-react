import React from "react";
import img5 from '../imagenes/img5.png';

const contenido = [
    {
        id:1,
        tema: "Nombre del tema",
        detalle: "Pequeña descripcion"
    },
    {
        id:2,
        tema: "Nombre del tema",
        detalle: "Pequeña descripcion"
    },
    {
        id:3,
        tema: "Nombre del tema",
        detalle: "Pequeña descripcion"
    },
    {
        id:4,
        tema: "Nombre del tema",
        detalle: "Pequeña descripcion"
    },
    {
        id:5,
        tema: "Nombre del tema",
        detalle: "Pequeña descripcion"
    },
    {
        id:6,
        tema: "Nombre del tema",
        detalle: "Pequeña descripcion"
    },
];

const style = {
    backgroundImage: `url(${img5})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
  
};

const ContenidoCurso = () =>{

    
    return(
        <>
        <br/><br/><br/><br/><br/>
            <h1 className="display-1 text-primary my-5 " style={{marginRight:"30%"}}>Contenido del curso</h1>
            <div className="m-5  " style={{ height: '300px', overflow:'auto' }} >
                <div className="container" style={{display:"inline-block"}}>
                    {contenido.map((item,idx)=>(
                        <div >
                            <br/>
                        <div className="text-start p-4 " style={{...style, borderRadius:"20px"}}>
                            <h3 className="">{item.tema}</h3>
                            <h5 className="text-primary">{item.detalle}</h5>
                        </div>
                        <br/>
                        </div>
                    ))}
                </div>
            </div>
            <br/><br/>
            <div className="container">
                <div className="row">
                    <h3 className="text-primary text-start" style={{width:"65%"}}>Ut enim ad minim veniam, quis nostrud exercitation ullamcov laboris nisi ut aliquip nisi ut aliquip nisi ut aliquip nisi ut aliquip</h3>
                    
                    <h3 className="my-3 text-start"  >Este curso cuenta con # de temas por aprender</h3>
                </div>
            </div>
        </>
    );
}

export default ContenidoCurso;