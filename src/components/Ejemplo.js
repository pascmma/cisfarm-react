import React from "react";

import avatar from '../imagenes/img.png';
import Slider from 'react-slick'



const dataDocentes = [
    {
        id:1,
        img : avatar,
        nombre:"nombre del docente",
        apellido:"apellidos del profesor",
        profesion: "Quimico farmaceutico",
    },
    {
        id:1,
        img : avatar,
        nombre:"nombre del docente",
        apellido:"apellidos del profesor",
        profesion: "Quimico farmaceutico",
    },
    {
        id:1,
        img : avatar,
        nombre:"nombre del docente",
        apellido:"apellidos del profesor",
        profesion: "Quimico farmaceutico",
    },
    {
        id:1,
        img : avatar,
        nombre:"nombre del docente",
        apellido:"apellidos del profesor",
        profesion: "Quimico farmaceutico",
    }, 
];

const settings={
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:3
};





const Ejemplo = ()=>{
    return (
        <> 
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="container ">
                <Slider {...settings}>
                    {dataDocentes.map((item,index)=>(
                        <div className="card" style="width: 18rem;">
                        <img className="card-img-top text-center" src={item.img}  style={{width:"30%", display:"inline"}}  alt="Card image cap"/>
                        <div className="card-body">
                          <h5 className="card-title text-primary">{item.nombre}</h5>
                          <h5 className="card-title text-primary">{item.apellido}</h5>
                          <h5 className="card-title text-warning">{item.profesion}</h5>
                          
                          
                        </div>
                      </div>
                    ))}

                </Slider>

                
            </div>

        </>
    )
};

export default Ejemplo;