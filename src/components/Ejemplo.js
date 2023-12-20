import React from "react";
import Slider from 'react-slick'
import { GrNext, GrPrevious } from "react-icons/gr";


const settings = {
    
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
            centerMode: true,
            centerPadding: "1px",
            slidesToShow: 1,
            infinite: true,
            arrows:false
          
        },
    },
    ],
    nextArrow: <GrNext  />,
    prevArrow:<GrPrevious />
};





const Ejemplo = (props) => {
    return (
        <>

            <div className="container">

            <h1 className="display-3 text-primary container text-center mt-5">Docentes</h1>
            <br />
            <br />


            <div className="container ">
                <Slider {...settings} >
                    {props.datos.docentes.map((item, index) => (
                        <div className="container ">
                            <div className="col text-center mx-auto">
                                <img  className="my-5 bg-primary " style={{ width: '20em', height:"20em",borderRadius:"50%", margin:'auto' }} src={require(`../assets/imagenes/${item.imagen}`)} />
                                
                                <h4 className="text-primary">{item.nombre}</h4>
                                <h5 className="text-primary">{item.apellidos} </h5>
                                <p className="text-warning">{item.titulo} </p>
                                

                            </div>
                        </div>
                    ))}

                </Slider>


            </div>
            </div>

        </>
    )
};

export default Ejemplo;