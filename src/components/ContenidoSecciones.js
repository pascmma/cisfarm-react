import React, { useState } from "react";
import imagen from '../imagenes/img15.png';
import { Modal, Button } from "react-bootstrap";
import { OBJModel } from 'react-3d-viewer';
import objeto from '../imagenes/modeloOBJ.obj';


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
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Titulo del modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OBJModel
            src={objeto}
            position={{ x: 0, y: -2.5, z: 0 }}
            scale={{ x: 0.25, y: 0.25, z: 0.25 }}
          ></OBJModel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary">Guardar</Button>
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


      <br />
      <br />
      <br />
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
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Titulo del modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OBJModel
            src={objeto}
            position={{ x: 0, y: -2.5, z: 0 }}
            scale={{ x: 0.25, y: 0.25, z: 0.25 }}
          ></OBJModel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary">Guardar</Button>
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


      <br />
      <br />
      <br />
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
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Titulo del modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OBJModel
            src={objeto}
            position={{ x: 0, y: -2.5, z: 0 }}
            scale={{ x: 0.25, y: 0.25, z: 0.25 }}
          ></OBJModel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary">Guardar</Button>
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


      <br />
      <br />
      <br />
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
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Titulo del modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OBJModel
            src={objeto}
            position={{ x: 0, y: -2.5, z: 0 }}
            scale={{ x: 0.25, y: 0.25, z: 0.25 }}
          ></OBJModel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary">Guardar</Button>
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


      <br />
      <br />
      <br />

      
      </>
  );
};

export default ContenidoSecciones;