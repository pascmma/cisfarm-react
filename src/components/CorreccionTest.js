import React,{useState} from "react";
import Button  from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Correccion = () =>{
  const [showModal,setShowModal] = useState(false);

  const handleOpenModal = () =>{
    setShowModal(true);
  };
  const handleCloseModal = () =>{
    setShowModal(false);
  };

  return(
    <>
      <div>
 <Form.Check></Form.Check>
      <p className="lead text-white">
        Acepto haber leido <a className="text-white" onClick={handleOpenModal} >
       las politicas de privacidad
      </a>
        y los terminos de condiciones
      </p>

      </div>
               <Modal show={showModal} onHide={handleCloseModal} >
        <Modal.Header closeButton>
          <Modal.Title>Titulo del modal</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary">
            Guardar
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  )
};

export default Correccion;
