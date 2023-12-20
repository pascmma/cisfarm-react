import React, {useState} from "react";
import Header from './Header'
import imagen from '../assets/imagenes/img15.png';
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Slider from "react-slick";
import Nav from 'react-bootstrap/Nav';
import ContenidoSecciones from "./ContenidoSecciones";
import background from '../assets/imagenes/back_metanima.png';
import {data} from '../objetos/ObjetoMetanima';



const mitad = {
  width: "60%"
};



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
        {data.titulo}
      </div>
      </div>
      <br /><br />
      <p className="lead text-primary" style={{textAlign:"center"}} >{data.estudio} </p>
      <div className="d-flex justify-content-center ">
        <br />
        <p className="lead text-start" style={mitad}> {data.parrafo}</p>

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

      {/* Contenido de cada sección, para crear nuevas secciones copiar un activeTab */}
      {activeTab === 'SECCION I' && <div className="mt-5"> <ContenidoSecciones datos={data} seccion={"seccion1"}/></div>}
      {activeTab === 'SECCION II' && <div className="mt-5"> <ContenidoSecciones datos={data} seccion={"seccion2"}/></div>}
      {activeTab === 'SECCION III' && <div className="mt-5"> <ContenidoSecciones datos={data} seccion={"seccion3"}/></div>}
      {activeTab === 'SECCION IV' && <div className="mt-5"> <ContenidoSecciones  datos={data} seccion={"seccion4"}/></div>}
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
          {data.novedades.map((item, index) => (
            <div className="col ">
              <div
                className="card my-3 mx-auto"
                style={{
                  width: "13em",
                  height: "25em",
                  borderRadius: "50px",
                  border: `solid ${index%2 === 0 ? '#825a16 13px' :'blue 13px' }`,
                }}
              >
                <div className="card-body">
                  <img
                    src={require(`../assets/imagenes/${item.img}`)}
                    style={{
                      width: "100%",
                      height: "50%",
                      borderRadius: "40px",
                    }}
                  />
                  <h6 className="card-subtitle my-2 text-primary text-start">
                    {item.nombre}
                  </h6>
                  <p className="card-text text-start text-primary">
                    {item.fecha}
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

