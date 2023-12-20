import React from "react";
import { Carousel } from "react-bootstrap";
import imagen from '../assets/imagenes/sin_back.png';
import { GrNext,GrPrevious } from "react-icons/gr";


//El objeto de areas es el mas complicado, cada area tiene subareas por el detalle de los profesores
const dataAreas = [
    {
        nombre: "Area1",
        cards: [
            {
                parrafo:`lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.`,
                usuarios: [
                    {
                        imagenUsuario: imagen,
                        cargoUsuario: "Director",
                        nombresUsuario: "Nombres y Apellidos",
                        areaUsuario: "Area",
                    },
                    {
                        imagenUsuario: imagen,
                        cargoUsuario: "Director",
                        nombresUsuario: "Nombres y Apellidos",
                        areaUsuario: "Area",
                    },
                    {
                        imagenUsuario: imagen,
                        cargoUsuario: "Director",
                        nombresUsuario: "Nombres y Apellidos",
                        areaUsuario: "Area",
                    },
                ]

            },
            {
                parrafo:`lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.`,
                usuarios: [
                    {
                        imagenUsuario: imagen,
                        cargoUsuario: "Director",
                        nombresUsuario: "Nombres y Apellidos",
                        areaUsuario: "Area",
                    },
                    {
                        imagenUsuario: imagen,
                        cargoUsuario: "Director",
                        nombresUsuario: "Nombres y Apellidos",
                        areaUsuario: "Area",
                    },
                    {
                        imagenUsuario: imagen,
                        cargoUsuario: "Director",
                        nombresUsuario: "Nombres y Apellidos",
                        areaUsuario: "Area",
                    },
                ]

            },
            {
                parrafo:`lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.`,
                usuarios: [
                    {
                        imagenUsuario: imagen,
                        cargoUsuario: "Director",
                        nombresUsuario: "Nombres y Apellidos",
                        areaUsuario: "Area",
                    },
                    {
                        imagenUsuario: imagen,
                        cargoUsuario: "Director",
                        nombresUsuario: "Nombres y Apellidos",
                        areaUsuario: "Area",
                    },
                    {
                        imagenUsuario: imagen,
                        cargoUsuario: "Director",
                        nombresUsuario: "Nombres y Apellidos",
                        areaUsuario: "Area",
                    },
                ]

            }
        ]
    },
    {
        nombre: "Area2",
        cards: [
            {
                parrafo:`lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.`,
                usuarios: [
                    {
                        imagenUsuario: imagen,
                        cargoUsuario: "Director",
                        nombresUsuario: "Nombres y Apellidos",
                        areaUsuario: "Area",
                    },
                    {
                        imagenUsuario: imagen,
                        cargoUsuario: "Director",
                        nombresUsuario: "Nombres y Apellidos",
                        areaUsuario: "Area",
                    },
                    {
                        imagenUsuario: imagen,
                        cargoUsuario: "Director",
                        nombresUsuario: "Nombres y Apellidos",
                        areaUsuario: "Area",
                    },
                ]

            },
            {
                parrafo:`lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.`,
                usuarios: [
                    {
                        imagenUsuario: imagen,
                        cargoUsuario: "Director",
                        nombresUsuario: "Nombres y Apellidos",
                        areaUsuario: "Area",
                    },
                    {
                        imagenUsuario: imagen,
                        cargoUsuario: "Director",
                        nombresUsuario: "Nombres y Apellidos",
                        areaUsuario: "Area",
                    },
                    {
                        imagenUsuario: imagen,
                        cargoUsuario: "Director",
                        nombresUsuario: "Nombres y Apellidos",
                        areaUsuario: "Area",
                    },
                ]

            }
        ]
    },
  

];


//creacion de obejtos



const Areas = (props) => {

    return (
        <>
            <div style={{margin:"0.2em"}}>
                <Carousel prevIcon=<GrPrevious/> nextIcon= <GrNext/>  >
                    {props.datos.areas.map((item, index) => (
                        <Carousel.Item key={index}>
                            <div className="container my-3 bg-white" style={{WebkitBoxShadow: "1px 0px 10px 7px rgba(191,191,191,0.25)",
  MozBoxShadow: "-1px 0px 10px 7px rgba(191,191,191,0.75)",
  boxShadow: "-1px 0px 10px 7px rgba(191,191,191,0.75)",
  borderRadius:"10px"}} >
                                <div className="row m-5 ">
                                    <h1 className="text-warning text-center my-5"> Area </h1>
                                    <h5 className="text-warning text-center mt-3"> {item.area}</h5>
                                </div>
                                <Carousel className="p-4 m-4 " prevIcon=<GrPrevious/> nextIcon= <GrNext/> >
                                    {
                                        (item.cards).map((aux,inde)=>(
                                            <Carousel.Item key={inde} className="">
                                                <div className="container my-4 " style={{borderRadius:"25px"}}>
                                                    <div className="row my-4">
                                                        <p className="text-primary text-center lead">{aux.parrafo}</p>
                                                    </div>
                                                    <div className="row my-4 text-center">
                                                        {
                                                            (aux.usuarios).map((temp,ind)=>(
                                                                <div className="col ">
                                                                    <img style={{width:'200px', height:"200px",borderRadius:"50%", background:"blue" }} src={require(`../assets/imagenes/${temp.imagenUsuario}`)}/>
                                                                    <h4 className="text-primary mt-4">{temp.cargoUsuario}</h4>
                                                                    <h5 className="text-primary">{temp.nombresUsuario} </h5>
                                                                    <p className="text-warning">{temp.areaUsuario} </p>
                                                                    
                                                                </div>
                                                            ))
                                                        }
                                                    </div>

                                                </div>

                                            </Carousel.Item>
                                        ))
                                    }

                                </Carousel>
                            </div>
                            

                        </Carousel.Item>

                    ))}
                </Carousel>

            </div>
        </>
    );
};

export default Areas;
