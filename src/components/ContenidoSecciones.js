import React, { useState } from "react";
import imagen from '../assets/imagenes/img15.png';
import { Modal, Button } from "react-bootstrap";


const ContenidoSecciones = (props) => {

  const [showModal, setShowModal] = useState(false);



  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };



  const imagenes = {
    width: '100%',
    cursor: 'pointer'
  }

  const bordeRadio = {
    borderRadius: "50px",
    backgroundColor: "rgba(213, 181, 143,0.5)"
  }



  return (
    <>
      <div className="container">
        {props.datos.secciones.map((item,index)=>(
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 col-6">
            <div className="p-1" style={bordeRadio}>
              <h5 className="text-danger mx-md-5 text-start py-2 px-3" style={{fontSize:"1.5em"}}  >{props.seccion}</h5>
              <p className="text-start mx-md-5 p-2" style={{ color: "#11215D" }}>
               {item.contenido1}
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-6 my-auto mx-auto " >
            <img className="rounded " src={require(`../assets/imagenes/${item.img1}`)} style={imagenes} onClick={handleOpenModal} />
            <Modal show={showModal} size={"xl"} onHide={handleCloseModal} style={{
              position: 'absolute',
              width: '100%',
              height: "100%",
            }}>
              <Modal.Header closeButton>
                <Modal.Title>Modelo 3D 3 </Modal.Title>
              </Modal.Header>
              <Modal.Body >
              <iframe title="id3" src={item.urlIframe1} style={{width:"100%",height:"700px",frameborder:"0"}}></iframe>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Cerrar
                </Button>

              </Modal.Footer>
            </Modal>

          </div>
          
          <div className="col-lg-2 col-md-3 col-6 my-auto mx-auto " >
            <img className="rounded " src={require(`../assets/imagenes/${item.img2}`)} style={imagenes} onClick={handleOpenModal} />
            <Modal show={showModal} size={"xl"} onHide={handleCloseModal} style={{
              position: 'absolute',
              width: '100%',
              height: "100%",
            }}>
              <Modal.Header closeButton>
                <Modal.Title>Modelo 3D 3 </Modal.Title>
              </Modal.Header>
              <Modal.Body >
              <iframe title="id3" src={item.urlIframe2} style={{width:"100%",height:"700px",frameborder:"0"}}></iframe>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Cerrar
                </Button>

              </Modal.Footer>
            </Modal>

          </div>
          <div className="col-lg-4 col-md-6 col-6">
            <div className="p-1" style={bordeRadio}>
              <h5 className="text-danger mx-md-5 text-start py-2 px-3" style={{fontSize:"1.5em"}}  >{props.seccion}</h5>
              <p className="text-start mx-md-5 p-2" style={{ color: "#11215D" }}>
               {item.contenido2}
              </p>
            </div>
          </div>
          
        </div>
        ))}




        

      </div>




    </>
  );
};

export default ContenidoSecciones;
