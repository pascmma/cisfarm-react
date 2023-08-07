import React from "react";
import {BiBookReader} from "react-icons/bi"
import {GiSpeaker,GiUpgrade} from "react-icons/gi"
import {AiOutlineLike} from "react-icons/ai"
import avatar from '../imagenes/img.png';
import Slider from 'react-slick'

const estilo = {
    display:"inline-block",
    color:"#ffff",
};

const dataCurso = {
    valoracion: "50%",
    estudiantes: 300,
    nivel: "avanzado",
    idioma:"español"
};

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
            <div className="row display-2">
                <div className="col-3">
                    <div className="border pb-3 px-4 rounded-circle" style={estilo}>
                        <AiOutlineLike />
                    </div>
                    <p className="lead">Valoraciones buenas</p>
                    <p className="lead">{dataCurso.valoracion}</p>
                </div>
                <div className="col-3">
                    <div className="border pb-3 px-4 rounded-circle" style={estilo}>
                        <BiBookReader/>
                    </div>
                        <p className="lead">Estudiantes</p>
                        <p className="lead">{dataCurso.estudiantes}</p>

                </div>
                <div className="col-3">
                    <div className="border pb-3 px-4 rounded-circle" style={estilo}>
                        <GiUpgrade/>
                    </div>
                        <p className="lead"> Nivel</p>
                        <p className="lead">{dataCurso.nivel}</p>
                </div>
                <div className="col-3">
                    <div className="border pb-3 px-4 rounded-circle" style={estilo}>
                        <GiSpeaker/>
                    </div>
                        <p className="lead"> Idioma</p>
                        <p className="lead">{dataCurso.idioma}</p>
                </div>
            </div>
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