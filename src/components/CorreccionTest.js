import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";



const politicas = {
  titulo: "Politicas de privacidad y contrato",
  texto: ``
};


const Correccion = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="d-inline ">
        <p className="text-white px-3 " style={{"fontSize":"0.8em"}}>
        <Form.Check inline className=" "/>
          Acepto haber leido{" "}
          <a className="text-white" onClick={handleOpenModal}>
            las politicas de privacidad
          </a>
          y los terminos de condiciones
        </p>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Titulo del modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{politicas.titulo}</h5>
          <p className="lead">{props.datos.politicas}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary">Guardar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Correccion;
