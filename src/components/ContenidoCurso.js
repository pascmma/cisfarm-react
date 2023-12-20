import React from "react";
import img5 from '../assets/imagenes/img5.png';

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

const ContenidoCurso = (props) =>{

    
    return(
        <>
        <br/><br/><br/><br/><br/>
            <h1 className="display-3 text-primary my-5 text-center " style={{marginLeft:"1em"}}>{props.titulo}</h1>
            <div className="text-center  " style={{ height: '40em', overflow:'auto' }} >
                <div className="container  " style={{display:"inline-block"}}>
                    {props.datos.contenidoCurso.map((item,idx)=>(
                        <div >
                            <br/>
                        <div className="text-start p-4 " style={{...style, borderRadius:"20px"}}>
                            <h3 className="">{item.nombre}</h3>
                            <h5 className="text-primary">{item.descripcion}</h5>
                        </div>
                        <br/>
                        </div>
                    ))}
                </div>
            </div>
            <br/><br/>
            <div className="container">
                <div className="row">
                    <h3 className="text-primary text-start mx-auto" style={{width:"65%"}}>{props.datos.textoFinal}</h3>
                    
                    <h3 className="my-3 text-start mx-auto" style={{width:"65%"}} >{props.datos.resumenFinal}</h3>
                </div>
            </div>
            <br/><br/><br/>
        </>
    );
}

export default ContenidoCurso;