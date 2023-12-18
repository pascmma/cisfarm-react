import React, {useState} from "react";
import Header from './Header'
import imagen from '../imagenes/img15.png';
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Novedades from "./Novedades";
import Slider from "react-slick";
import Nav from 'react-bootstrap/Nav';
import ContenidoSecciones from "./ContenidoSecciones";
import background from '../imagenes/back_metanima.png';



const mitad = {
  width: "60%"
};


const noticias = [
  {
    img: imagen,
    nombre: "nombre completo de la noticia",
    fecha: "Fecha de lanzamiento",
  },
  {
    img: imagen,
    nombre: "nombre completo de la noticia",
    fecha: "Fecha de lanzamiento",
  },
  {
    img: imagen,
    nombre: "nombre completo de la noticia",
    fecha: "Fecha de lanzamiento",
  },
  {
    img: imagen,
    nombre: "nombre completo de la noticia",
    fecha: "Fecha de lanzamiento",
  },
  {
    img: imagen,
    nombre: "nombre completo de la noticia",
    fecha: "Fecha de lanzamiento",
  },
  {
    img: imagen,
    nombre: "nombre completo de la noticia",
    fecha: "Fecha de lanzamiento",
  },
  {
    img: imagen,
    nombre: "nombre completo de la noticia",
    fecha: "Fecha de lanzamiento",
  },
  {
    img: imagen,
    nombre: "nombre completo de la noticia",
    fecha: "Fecha de lanzamiento",
  },
];


const Metanima = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    focusOnSelect: true,
    centerPadding: "1px",
    speed: 500,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 620,
        settings: {
          centerMode:true,
          centerPadding:"1px",
          slidesToShow: 1,
          infinite: true,
          arrows:false
        
        }
      }
    ]
    

  };

  const [activeTab, setActiveTab] = useState('SECCION I'); // Estado para controlar el tab activo

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  
  

  return (
    <>
      <div style={{backgroundImage:`url(${background})`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat",}}>
       <div >
        <Header/>
        </div> 
      
      <div className="d-flex justify-content-center">
      <div className="display-1 mt-5">
        Soñar es crear
      </div>
      </div>
      <br /><br />
      <p className="lead text-primary" style={{textAlign:"center"}} >Estudio de animacion </p>
      <div className="d-flex justify-content-center ">
        <br />
        <p className="lead text-start" style={mitad}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
      <div className="d-inline-block ">
      <Nav variant="tabs" className="d-flex flex-wrap justify-content-center">
  <Nav.Item className="col-6 col-md-3">
    <Nav.Link
      className={`nav-link text-white ${activeTab === 'SECCION I' ? 'active' : ''}`}
      style={{
        backgroundImage: "linear-gradient(90deg, rgba(11,47,89,1) 0%, rgba(148,105,105,1) 87%)",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        margin: "5px",
        textAlign: "center"
      }}
      onClick={() => handleTabClick('SECCION I')}
    >
      SECCION I
    </Nav.Link>
  </Nav.Item>
  <Nav.Item className="col-6 col-md-3">
    <Nav.Link
      className={`nav-link text-white ${activeTab === 'SECCION II' ? 'active' : ''}`}
      style={{
        backgroundImage: "linear-gradient(90deg, rgba(11,47,89,1) 0%, rgba(148,105,105,1) 87%)",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        margin: "5px",
        textAlign: "center"
      }}
      onClick={() => handleTabClick('SECCION II')}
    >
      SECCION II
    </Nav.Link>
  </Nav.Item>
  <Nav.Item className="col-6 col-md-3">
    <Nav.Link
      className={`nav-link text-white ${activeTab === 'SECCION III' ? 'active' : ''}`}
      style={{
        backgroundImage: "linear-gradient(90deg, rgba(11,47,89,1) 0%, rgba(148,105,105,1) 87%)",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        margin: "5px",
        textAlign: "center"
      }}
      onClick={() => handleTabClick('SECCION III')}
    >
      SECCION III
    </Nav.Link>
  </Nav.Item>
  <Nav.Item className="col-6 col-md-3">
    <Nav.Link
      className={`nav-link text-white ${activeTab === 'SECCION IV' ? 'active' : ''}`}
      style={{
        backgroundImage: "linear-gradient(90deg, rgba(11,47,89,1) 0%, rgba(148,105,105,1) 87%)",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        margin: "5px",
        textAlign: "center"
      }}
      onClick={() => handleTabClick('SECCION IV')}
    >
      SECCION IV
    </Nav.Link>
  </Nav.Item>
</Nav>

      {/* Contenido de cada sección */}
      {activeTab === 'SECCION I' && <div className="mt-5"> <ContenidoSecciones seccion={"seccion1"}/></div>}
      {activeTab === 'SECCION II' && <div className="mt-5"> <ContenidoSecciones seccion={"seccion2"}/></div>}
      {activeTab === 'SECCION III' && <div className="mt-5"> <ContenidoSecciones seccion={"seccion3"}/></div>}
      {activeTab === 'SECCION IV' && <div className="mt-5"> <ContenidoSecciones seccion={"seccion4"}/></div>}
    </div>
    </div>
      <br /><br />
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> 

      <div className="d-flex justify-content-center mb-4">
        <h4 className="">Novedades </h4>
      </div>
      <div className="container ">
        <Slider {...settings}>
          {noticias.map((item, index) => (
            <div className="col ">
              <div
                className="card my-3 mx-auto"
                style={{
                  width: "13em",
                  height: "25em",
                  borderRadius: "50px",
                  border: "solid blue 13px",
                }}
              >
                <div className="card-body">
                  <img
                    src={imagen}
                    style={{
                      width: "100%",
                      height: "50%",
                      borderRadius: "40px",
                    }}
                  />
                  <h6 className="card-subtitle my-2 text-primary text-start">
                    Nombre completo de la noticia1
                  </h6>
                  <p className="card-text text-start text-primary">
                    Fecha de lanzamiento{" "}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginLeft: "2em", borderRadius: "20px" }}
                  >
                    Ver mas
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </div>
      
      <Footer />
      
      <Footer2 />

      
    </>
  )
};

export default Metanima;

