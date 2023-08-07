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
            <div className="m-5" style={{ height: '300px', overflowY: 'scroll' }} >
                <div className="container" style={{display:"inline-block"}}>
                    {contenido.map((item,idx)=>(
                        <div>
                            <br/>
                        <div className=" border border-secondary" style={style}>
                            <h3 className="text-primary">{item.tema}</h3>
                            <h5 className="text-warning">{item.detalle}</h5>
                        </div>
                        <br/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container">

            </div>
        </>
    );
}

export default ContenidoCurso;