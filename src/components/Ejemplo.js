import React from "react";

import avatar from '../imagenes/img.png';
import Slider from 'react-slick'



const dataDocentes = [
    {
        id: 1,
        img: avatar,
        nombre: "nombre del docente",
        apellido: "apellidos del profesor",
        profesion: "Quimico farmaceutico",
    },
    {
        id: 1,
        img: avatar,
        nombre: "nombre del docente",
        apellido: "apellidos del profesor",
        profesion: "Quimico farmaceutico",
    },
    {
        id: 1,
        img: avatar,
        nombre: "nombre del docente",
        apellido: "apellidos del profesor",
        profesion: "Quimico farmaceutico",
    },
    {
        id: 1,
        img: avatar,
        nombre: "nombre del docente",
        apellido: "apellidos del profesor",
        profesion: "Quimico farmaceutico",
    },
];

const settings = {
    dots: true,
    centerMode:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    focusOnSelect: true,
    slidesToScroll: 3,
    responsive:[
        {
        breakpoint:620,
        settings:{
          slidesToShow:1,
          infinite:true,
          dots:true
        }
    }
    ]
};





const Ejemplo = () => {
    return (
        <>

            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="display-3 text-primary m-5">Docentes</h1>
            <br />
            <br />


            <div className="container ">
                <Slider {...settings}>
                    {dataDocentes.map((item, index) => (
                        <div className="container">
                            <div className="col">
                                <img  className="my-5 border bg-primary" style={{ width: '300px', height:"300px",borderRadius:"50%" }} src={item.img} />
                                <div className="text-start" style={{marginLeft:"3em"}}>
                                <h4 className="text-primary">{item.nombre}</h4>
                                <h5 className="text-primary">{item.apellido} </h5>
                                <p className="text-warning">{item.profesion} </p>
                                </div>

                            </div>
                        </div>
                    ))}

                </Slider>


            </div>

        </>
    )
};

export default Ejemplo;