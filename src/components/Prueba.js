import React,{useState} from "react";
import { Carousel } from "react-bootstrap";
import imagen from "../assets/imagenes/img16.png";
import Slider from "react-slick";
import { Modal } from "react-bootstrap";

const Prueba = (props) => {

  const [showModal, setShowModal] = useState(false);



  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "1px",
    slidesToShow: 5,
    speed: 500,
    focusOnSelect: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 620,
        settings: {
          centerMode: true,
          centerPadding: "70px",
          slidesToShow: 1,
          infinite: true,
          arrows:false
        },
      },
    ],
  };

  return (
    <>
      <div
        className="rounded"
        style={{
          backgroundImage:
            "linear-gradient(270deg, rgba(0,26,137,1) 3%, rgba(0,104,225,1) 62%)",
        }}
      >
        <Carousel>
          {props.datos.noticias.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="container ">
                <div className="row my-5">
                  <div className="col-md-6">
                    <img
                      src={require(`../assets/imagenes/${item.img}`)}
                      style={{
                        borderRadius: "90px",
                        height: "100%",
                        width: "80%",
                      }}
                      className="img-fluid "
                      alt={`slide-${index}`}
                    />
                  </div>
                  <div className="col-md-6 rounded d-flex align-items-center">
                    <div>
                      <h1 className="text-start text-white">{item.titulo}</h1>
                      <p className="lead text-white text-start my-5">
                        {item.contenido}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="bg-light">
        <h2 className=" text-center text-primary" style={{ paddingTop: "4em" }}>
          {" "}
          <strong>Todos los Post </strong>
        </h2>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <button
                className="lead mx-2 mx-sm-5 mx-lg-5 px-4 px-sm-5 px-lg-5 bg-primary text-white dropdown-toggle"
                style={{ borderRadius: "50px", width: "100%" }}
              >
                Año
              </button>
            </div>
            <div className="col-sm-6 col-lg-3">
              <button
                className="lead mx-2 mx-sm-5 mx-lg-5 px-4 px-sm-5 px-lg-5 bg-primary text-white dropdown-toggle"
                style={{ borderRadius: "50px", width: "100%" }}
              >
                Meses
              </button>
            </div>
            <div className="col-sm-12 col-lg-6">
              <button
                className="lead mx-2 mx-sm-5 mx-lg-5 px-4 px-sm-5 px-lg-5 bg-primary text-white dropdown-toggle"
                style={{ borderRadius: "50px", width: "100%" }}
              >
                Categoria
              </button>
            </div>
          </div>



          <div className="container ">
            <div className="row">
              {props.datos.posts.map((item, index) => (
                <div key={index} className="col-12 col-md-3  ">
                  <div
                    className="card my-3 mx-auto  "
                    style={{
                      width: "13rem",
                      borderRadius: "50px",
                      border: "solid blue 13px",
                    }}
                  >
                    <div className="card-body">
                      <img
                        src={require(`../assets/imagenes/${item.img}`)}
                        style={{
                          width: "90%",
                          height: "60%",
                          borderRadius: "40px",
                        }}
                      />
                      <h6 className="card-subtitle my-2 text-primary text-start">
                        {item.nombre}
                      </h6>
                      <p className="card-text text-start text-primary">
                        
                        Fecha
                        <br/>
                        {item.mes} {item.anio}

                      </p>
                      <button
                        type="button"
                        className="btn btn-primary"
                        style={{ marginLeft: "35%", borderRadius: "20px" }}
                        onClick={handleOpenModal}
                      >
                        Ver mas
                      </button>
                        <Modal
                          show={showModal}
                          onHide={handleCloseModal}
                          backdrop="static"
                          keyboard={false}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>{item.nombre}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            {item.informacion}
                          </Modal.Body>
                          <Modal.Footer>
                            <button className="btn btn-secondary" onClick={handleCloseModal} >Cerrar</button>
                          </Modal.Footer>

                        </Modal>
                      

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-primary text-center display-5" style={{marginTop:"2em", marginBottom:"1em"}}>Sabias que?</h3>
      

      <div className="container ">
        <Slider {...settings}>
          {props.datos.posts.map((item, index) => (
            <div className="col ">
              <div
                className="card my-3 mx-auto"
                style={{
                  width: "13em",
                  height: "25em",
                  borderRadius: "50px",
                  border: 'solid blue 13px',
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
                    Fecha
                    <br/>
                    {item.mes} {item.anio}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginLeft: "35%", borderRadius: "20px" }}
                    onClick={handleOpenModal}
                  >
                    Ver mas
                  </button>
                  <Modal
                          show={showModal}
                          onHide={handleCloseModal}
                          backdrop="static"
                          keyboard={false}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>{item.nombre}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            {item.informacion}
                          </Modal.Body>
                          <Modal.Footer>
                            <button className="btn btn-secondary" onClick={handleCloseModal} >Cerrar</button>
                          </Modal.Footer>

                        </Modal>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Prueba;
