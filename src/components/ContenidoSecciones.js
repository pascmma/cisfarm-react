import React, { useState } from "react";
import imagen from '../imagenes/img15.png';
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
    width: '80%',
    cursor: 'pointer'
  }

  const bordeRadio = {
    borderRadius: "50px",
    backgroundColor: "rgba(213, 181, 143,0.5)"
  }



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="p-1" style={bordeRadio}>
              <h5 className="text-danger mx-md-5 text-start">{props.seccion}</h5>
              <p className="text-start mx-md-5" style={{ color: "#11215D" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <img className="rounded" src={imagen} style={imagenes} onClick={handleOpenModal} />
            <Modal show={showModal} fullscreen={true} onHide={handleCloseModal} style={{
              position: 'absolute',
              width: '100%',
              height: "100%",
            }}>
              <Modal.Header closeButton>
                <Modal.Title>Modelo 3D</Modal.Title>
              </Modal.Header>
              <Modal.Body >
                <iframe title="id1" style={{ width: "100%", height: "100wh", border: "1px solid #eeeeee" }} src="https://3dviewer.net/#model=https://vitplanet.com/3d/test.obj"></iframe>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Cerrar
                </Button>

              </Modal.Footer>
            </Modal>

          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <img className="rounded" src={imagen} style={imagenes} />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="col ">
              <div>
                <div className="p-1" style={bordeRadio}>
                  <h5 className="text-danger mx-md-5 text-start">{props.seccion}</h5>
                  <p className="text-start mx-md-5" style={{ color: "#11215D" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    ipsum dolor sit amet, consectetur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="p-1" style={bordeRadio}>
              <h5 className="text-danger mx-md-5 text-start">{props.seccion}</h5>
              <p className="text-start mx-md-5" style={{ color: "#11215D" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <img className="rounded" src={imagen} style={imagenes} onClick={handleOpenModal} />
            <Modal show={showModal} fullscreen={true} onHide={handleCloseModal} style={{
              position: 'absolute',
              width: '100%',
              height: "100%",
            }}>
              <Modal.Header closeButton>
                <Modal.Title>Modelo 3D</Modal.Title>
              </Modal.Header>
              <Modal.Body >
                <iframe title="id2" style={{ width: "100%", height: "40em", border: "1px solid #eeeeee" }} src="https://3dviewer.net/#model=https://vitplanet.com/3d/test.obj"></iframe>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Cerrar
                </Button>

              </Modal.Footer>
            </Modal>

          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <img className="rounded" src={imagen} style={imagenes} />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="col ">
              <div>
                <div className="p-1" style={bordeRadio}>
                  <h5 className="text-danger mx-md-5 text-start">{props.seccion}</h5>
                  <p className="text-start mx-md-5" style={{ color: "#11215D" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    ipsum dolor sit amet, consectetur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="p-1" style={bordeRadio}>
              <h5 className="text-danger mx-md-5 text-start">{props.seccion}</h5>
              <p className="text-start mx-md-5" style={{ color: "#11215D" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <img className="rounded" src={imagen} style={imagenes} onClick={handleOpenModal} />
            <Modal show={showModal} fullscreen={true} onHide={handleCloseModal} style={{
              position: 'absolute',
              width: '100%',
              height: "100%",
            }}>
              <Modal.Header closeButton>
                <Modal.Title>Modelo 3D </Modal.Title>
              </Modal.Header>
              <Modal.Body >
              <iframe title="id3" src="https://3dviewer.net/#model=https://vitplanet.com/3d/test.obj" style={{width:"100%",height:"600px",frameborder:"0"}}></iframe>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Cerrar
                </Button>

              </Modal.Footer>
            </Modal>

          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <img className="rounded" src={imagen} style={imagenes} />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="col ">
              <div>
                <div className="p-1" style={bordeRadio}>
                  <h5 className="text-danger mx-md-5 text-start">{props.seccion}</h5>
                  <p className="text-start mx-md-5" style={{ color: "#11215D" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    ipsum dolor sit amet, consectetur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>




    </>
  );
};

export default ContenidoSecciones;
