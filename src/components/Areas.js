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

            }
        ]
    },
    {
        nombre: "Area2",
        card: {
            parrafo: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
    }

];


//creacion de obejtos
const prueba = () => {
    console.log('preuba: ', dataAreas[0].card.usuarios[0]);
};


const Areas = () => {

    return (
        <>

            <div className="container border my-3 bg-danger">
                <div className="row">
                    <h5 className="text-white"> Areas</h5>
                </div>
                <div className="container border border-warning my-4">
                    <div className="row my-4">
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                    <div className="row my-4">
                        <div className="col">
                            <img style={{ width: '100px' }} src={imagen} />
                            <h4 className="text-white">Director</h4>
                            <h5 className="text-white">Apellidos y nombres</h5>
                            <p className="text-white">Area</p>
                        </div>
                        <div className="col">
                            <img style={{ width: '100px' }} src={imagen} />
                            <h4 className="text-white">Director</h4>
                            <h5 className="text-white">Apellidos y nombres</h5>
                            <p className="text-white">Area</p>
                        </div>
                        <div className="col">
                            <img style={{ width: '100px' }} src={imagen} />
                            <h4 className="text-white">Director</h4>
                            <h5 className="text-white">Apellidos y nombres</h5>
                            <p className="text-white">Area</p>
                        </div>

                    </div>
                </div>

            </div>
            <br />
            <br />
            <br />
            <br />

            <div>
                <Carousel>
                    {dataAreas.map((item, index) => (
                        <Carousel.Item key={index}>
                            <div className="container border my-3 bg-warning">
                                <div className="row">
                                    <h5 className="text-primary"> {item.nombre}</h5>
                                </div>
                                <Carousel>
                                    {
                                        (item.card.usuarios).map((aux, inde) => (
                                            <Carousel.Item key={inde}>
                                              
            
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