import React from "react";


const contenido = [
    {
        id:1,
        tema: "Nombre del tema",
        detalle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor.`
    },
    {
        id:2,
        tema: "Nombre del tema",
        detalle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor.`
    },
    {
        id:3,
        tema: "Nombre del tema",
        detalle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor.`
    },
    {
        id:4,
        tema: "Nombre del tema",
        detalle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor.`
    },
    {
        id:5,
        tema: "Nombre del tema",
        detalle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor.`
    },
    {
        id:6,
        tema: "Nombre del tema",
        detalle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor.`
    },
];

const style = {
    backgroundColor: `#201761`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  
};

const ContenidoCursoMetanima = () =>{

    
    return(
        <>
            <div className="m-5">
                <div className="container" style={{display:"inline-block", width:'800px'}}>
                    {contenido.map((item,idx)=>(
                        <div>
                            <br/>
                        <div className=" " style={style}>
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

export default ContenidoCursoMetanima;