import React, { useState } from "react";
import imagen16 from "../assets/imagenes/img16.png";
import imagen10 from "../assets/imagenes/img10.png";
import Slider from "react-slick";
import imagen from '../assets/imagenes/img1.png';
import "../estilos/academia.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const cardsData = [
  {
    id: 1,
    img: imagen,
    title: "ENAFB - SERUMS 2023-II",
    ciclo: "SUPERINTENSIVO",
  },
  {
    id: 2,
    img: imagen,
    title: "ENAFB - SERUMS 2023-II",
    ciclo: "SUPERINTENSIVO",
  },
  {
    id: 3,
    img: imagen,
    title: "ENAFB - SERUMS 2023-II",
    ciclo: "SUPERINTENSIVO",
  },
  {
    id: 4,
    img: imagen,
    title: "ENAFB - SERUMS 2023-II",
    ciclo: "SUPERINTENSIVO",
  },
  {
    id: 5,
    img: imagen,
    title: "ENAFB - SERUMS 2023-II",
    ciclo: "SUPERINTENSIVO",
  },

];


const cardsData2 = [
    {
        id: 1,
        img: imagen,
        title: "ENAFB - SERUMS 2023-II",
        ciclo: "SUPERINTENSIVO",
      },
      {
        id: 2,
        img: imagen,
        title: "RESIDENTADO 2023",
        ciclo: "SUPERINTENSIVO",
      },
      {
        id: 3,
        img: imagen,
        title: "ENAFB - SERUMS 2023-II",
        ciclo: "SUPERINTENSIVO",
      },
      {
        id: 4,
        img: imagen,
        title: "ENAFB - SERUMS 2023-II",
        ciclo: "SUPERINTENSIVO",
      },
    
        
]

const slideStyles = `
  .slide p {
    font-size: 1.2rem; /* Tamaño de fuente predeterminado */
  }

  @media (max-width: 768px) {
    .slide p {
      font-size: 1rem; /* Tamaño de fuente para pantallas más pequeñas */
    }
  }
`;


function MenuCardSlider(props) {
  const boton={
    fontSize: "16px",
    padding: "10px 20px",
    border: "2px solid #ffffff6b",
    borderRadius: "50px",
    background: "rgb(255 255 255 / 11%)",
    boxShadow: "inset -2px -2px 5px #ffffff14, inset 2px 2px 5px #b0e0e67d",
    color: "#fff",
    cursor: "pointer",
    transition: "transform 0.3s",

};

  const NextArrow = ({onClick}) => {
    return(
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight/>
      </div>
    );
  };

  const PrevArrow = ({onClick}) => {
    return(
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft/>
      </div>
    );
  };

  const [imageIndex,setImageIndex] = useState(0);

  const settings = {
    infinite:true,
    lazyload:true,
    speed:300,
    slidesToShow:3,
    centerMode:true,
    focusOnSelect: true,
    centerPadding:0,
    NextArrow:<NextArrow/>,
    PrevArrow:<PrevArrow/>,
    beforeChange:(current,next) => setImageIndex(next),
    responsive:[
      {
        breakpoint:620,
        settings:{
          slidesToShow:1,
          infinite:true,
          arrows:false
          
        }
      }
    ]
  };


  

  return (
    <>
      <div className="container cont-carousel">
        <h1 className="text-warning text-center"> Programas de entrenamiento</h1>
        <br/><br/>
        <h4 className="text-white text-wrap" >
        {props.datos.parrafoPrograma}
        </h4>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <Slider {...settings}>
          {props.datos.programas.map((data,idx)=>(
            <div className={idx === imageIndex ? "slide activateSlide" : "slide"}>
            <div className="card my-3 contenedor-menu bg-transparent border-0 ">
                <img src={require(`../assets/imagenes/${data.imagen}`)} className="border rounded"/>  
                <div className=""> 
                    <p className="my-3 text-white"> {data.ciclo}</p>
                    <hr style={{border:"solid 2px white"}}/>
                    <p className="lead text-wrap text-warning" style={{fontSize:"1.9em"}}> {data.nombre}</p>
                    <div className="text-center"><button className="btn " style={boton}>ver mas</button></div>
                </div>
            </div>


          </div>

          ))}
        </Slider>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    <br/>

    <div className="container cont-carousel">
        <h1 className="text-warning text-center"> Simulacro</h1>
        <br/>
        <br/><br/>
        <h4 className="text-white text-wrap">
        {props.datos.parrafoSimulacro}
        </h4>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <Slider {...settings}>
          {props.datos.simulacros.map((data,idx)=>(
            <div className={idx === imageIndex ? "slide activateSlide" : "slide"}>
            <div className="card my-3 contenedor-menu bg-transparent border-0">
                <img src={require(`../assets/imagenes/${data.imagen}`)} className="border rounded"/>  
                <div className=""> 
                    <p className="my-3 text-white"> {data.ciclo}</p>
                    <hr style={{border:"solid 2px white"}}/>
                    
                    <div className="text-center"><button className="btn " style={boton}>ver mas</button></div>
                </div>
            </div>


          </div>

          ))}
        </Slider>
      </div>

    </>
  );
}

export default MenuCardSlider;

