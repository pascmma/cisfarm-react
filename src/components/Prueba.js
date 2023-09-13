import React from "react";
import { Carousel } from "react-bootstrap";
import imagen from "../imagenes/img16.png";
import Slider from "react-slick";

const Prueba = () => {
  const estilos = {
    maxHeight: "200px",
    height: "400px",
    width: "400px",
    border: "1px  solid #eee",
    padding: "5px",
    overflowY: "auto",
  };

  const data = [
    {
      img: imagen,
      titulo: "titulo de la noticia",
      contenido: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Lorem
      ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.Lorem
      ipsum`,
    },
    {
      img: imagen,
      titulo: "Titulo de la noticia",
      contenido: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Lorem
      ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.Lorem
      ipsum`,
    },
    {
      img: imagen,
      titulo: "Titulo de la noticia",
      contenido: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Lorem
      ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.Lorem
      ipsum`,
    },
    {
      img: imagen,
      titulo: "Titulo de la noticia",
      contenido: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Lorem
      ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.Lorem
      ipsum`,
    },
  ];

  const estilo = {
    backgrounImage: "linear-gradient(270deg, rgba(0,26,137,1) 3%, rgba(0,104,225,1) 62%)",
  };

  const settings = {
    className:"center",
    centerMode:true,
    infinite:true,
    centerPadding:"300px",
    speed:500,
    slidesToShow:5,
    dots:true
    
  };

  return (
    <>
      <div className="m-2 my-5" style={{backgroundImage:"linear-gradient(270deg, rgba(0,26,137,1) 3%, rgba(0,104,225,1) 62%)"}}>
        <Carousel>
          {data.map((slide, index) => (
            <Carousel.Item key={index}>
            <div className="m-5 border">
              <div className="row my-5">
                <div className="col-md-6">
                  <img
                    src={slide.img}
                    style={{ borderRadius: "90px", height: "100%", width: "80%" }}
                    className="img-fluid border border-danger"
                    alt={`slide-${index}`}
                  />
                </div>
                <div className="col-md-6 rounded d-flex align-items-center">
                  <div>
                    <h1 className="text-start text-white">{slide.titulo}</h1>
                    <p className="lead text-white text-start my-5">{slide.contenido}</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          
          ))}
        </Carousel>

      </div>
      <br/><br/><br/><br/>
            <h2 className="my-5">Todos los posts</h2>
            <br/><br/>
      <div className="container">
        <div className="row">
            <div className="col-3 ">
                <div className="border bg-primary text-align" style={{borderRadius:"50px"}}>
                    <p className="lead text-white">Año</p>
                </div>
            </div>
            <div className="col-3 border-danger">
            <div className="border bg-primary text-align" style={{borderRadius:"50px"}}>
                    <p className="lead text-white">Mes</p>
                </div>
            </div>
            <div className="col-6 "  >
                <div className="border bg-primary  " style={{width:"40%", borderRadius:"50px",marginLeft:"50%"}}>
                    <p className="lead text-white text-center"> Categoria</p>
                </div>
            </div>

        </div>
            <br/><br/>
        <div className="row">

        <div className="col">
          <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
            <div className="card-body">
              <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
              <h6 className="card-subtitle my-2 text-primary text-start">
                Nombre completo de la noticia1
              </h6>
              <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <br/>
        <br/><br/>
        
        <div className="col">
          <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
            <div className="card-body">
              <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
              <h6 className="card-subtitle my-2 text-primary text-start">
                Nombre completo de la noticia1
              </h6>
              <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <br/>
        <br/><br/>
        <div className="col">
          <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
            <div className="card-body">
              <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
              <h6 className="card-subtitle my-2 text-primary text-start">
                Nombre completo de la noticia1
              </h6>
              <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <br/>
        <br/><br/>
        <div className="col">
          <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
            <div className="card-body">
              <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
              <h6 className="card-subtitle my-2 text-primary text-start">
                Nombre completo de la noticia1
              </h6>
              <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
              <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
                Ver mas
              </button>
            </div>
          </div>
        </div>
        <br/>
        <br/><br/>
      </div>

      <br/><br/><br/>
      <br/>
      <div className="row">

<div className="col">
  <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
    <div className="card-body">
      <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
      <h6 className="card-subtitle my-2 text-primary text-start">
        Nombre completo de la noticia1
      </h6>
      <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
      <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
        Ver mas
      </button>
    </div>
  </div>
</div>
<br/>
<br/><br/>

<div className="col">
  <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
    <div className="card-body">
      <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
      <h6 className="card-subtitle my-2 text-primary text-start">
        Nombre completo de la noticia1
      </h6>
      <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
      <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
        Ver mas
      </button>
    </div>
  </div>
</div>
<br/>
<br/><br/>
<div className="col">
  <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
    <div className="card-body">
      <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
      <h6 className="card-subtitle my-2 text-primary text-start">
        Nombre completo de la noticia1
      </h6>
      <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
      <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
        Ver mas
      </button>
    </div>
  </div>
</div>
<br/>
<br/><br/>
<div className="col">
  <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
    <div className="card-body">
      <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
      <h6 className="card-subtitle my-2 text-primary text-start">
        Nombre completo de la noticia1
      </h6>
      <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
      <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
        Ver mas
      </button>
    </div>
  </div>
</div>
<br/>
<br/><br/>
</div>
      </div>
            <br/><br/><br/>
            <h3 className="text-primary">Sabias que?</h3>
            <br/><br/><br/>



<div className="row">
    <Slider {...settings}>
    <div className="col">
  <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
    <div className="card-body">
      <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
      <h6 className="card-subtitle my-2 text-primary text-start">
        Nombre completo de la noticia1
      </h6>
      <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
      <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
        Ver mas
      </button>
    </div>
  </div>
</div>
<div className="col">
  <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
    <div className="card-body">
      <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
      <h6 className="card-subtitle my-2 text-primary text-start">
        Nombre completo de la noticia1
      </h6>
      <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
      <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
        Ver mas
      </button>
    </div>
  </div>
</div>
<div className="col">
  <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
    <div className="card-body">
      <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
      <h6 className="card-subtitle my-2 text-primary text-start">
        Nombre completo de la noticia1
      </h6>
      <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
      <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
        Ver mas
      </button>
    </div>
  </div>
</div>
<div className="col">
  <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
    <div className="card-body">
      <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
      <h6 className="card-subtitle my-2 text-primary text-start">
        Nombre completo de la noticia1
      </h6>
      <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
      <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
        Ver mas
      </button>
    </div>
  </div>
</div>
<div className="col">
  <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
    <div className="card-body">
      <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
      <h6 className="card-subtitle my-2 text-primary text-start">
        Nombre completo de la noticia1
      </h6>
      <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
      <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
        Ver mas
      </button>
    </div>
  </div>
</div>
<div className="col">
  <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
    <div className="card-body">
      <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
      <h6 className="card-subtitle my-2 text-primary text-start">
        Nombre completo de la noticia1
      </h6>
      <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
      <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
        Ver mas
      </button>
    </div>
  </div>
</div>
    </Slider>
    
  </div>            
  <br/><br/><br/>
      
    </>
  );
};

export default Prueba;
