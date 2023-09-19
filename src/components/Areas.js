import React from "react";
import { Carousel } from "react-bootstrap";
import imagen from '../imagenes/img.png';
//cada objeto va a tener areas iguale

const areas = [
    { nombre: "Diseno y animacion" },
    { nombre: "area2" },
    { nombre: "area3" },
    { nombre: "area4" },
];

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
const prueba = () => {
    console.log('preuba: ', dataAreas[0].cards[0]);
};

prueba();


const Areas = () => {

    return (
        <>
            <div>
                <Carousel>
                    {dataAreas.map((item, index) => (
                        <Carousel.Item key={index}>
                            <div className="container my-3 bg-white" style={{WebkitBoxShadow: "1px 0px 10px 7px rgba(27,26,102,0.75)",
  MozBoxShadow: "-1px 0px 10px 7px rgba(27,26,102,0.75)",
  boxShadow: "-1px 0px 10px 7px rgba(27,26,102,0.75)",
  borderRadius:"10px"}} >
                                <div className="row">
                                    <h3 className="text-warning text-center"> Area </h3>
                                    <h5 className="text-warning text-center"> {item.nombre}</h5>
                                </div>
                                <Carousel>
                                    {
                                        (item.cards).map((aux,inde)=>(
                                            <Carousel.Item key={inde}>
                                                <div className="container  my-4" style={{borderRadius:"25px"}}>
                                                    <div className="row my-4">
                                                        <p className="text-primary text-center lead">{aux.parrafo}</p>
                                                    </div>
                                                    <div className="row my-4">
                                                        {
                                                            (aux.usuarios).map((temp,ind)=>(
                                                                <div className="col">
                                                                    <img style={{width:'200px', height:"200px",borderRadius:"50%", background:"blue" }} src={temp.imagenUsuario}/>
                                                                    <h4 className="text-primary">{temp.cargoUsuario}</h4>
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