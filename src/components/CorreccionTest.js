import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


const politicas = {
  titulo: "Politicas de privacidad y contrato",
  texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et molestie ac feugiat. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Ut aliquam purus sit amet luctus venenatis. Vel quam elementum pulvinar etiam non quam. Duis convallis convallis tellus id. Nunc faucibus a pellentesque sit amet porttitor. Nulla aliquet porttitor lacus luctus accumsan. Commodo odio aenean sed adipiscing diam donec. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Morbi leo urna molestie at elementum eu. Et ultrices neque ornare aenean euismod elementum nisi. Leo integer malesuada nunc vel risus commodo viverra. Orci nulla pellentesque dignissim enim.

  Nisl tincidunt eget nullam non nisi est sit amet. Purus semper eget duis at tellus. Magnis dis parturient montes nascetur. Eget mi proin sed libero. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Vitae congue eu consequat ac felis donec et odio pellentesque. Sed euismod nisi porta lorem mollis aliquam ut porttitor. Id donec ultrices tincidunt arcu non. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Accumsan sit amet nulla facilisi morbi tempus iaculis. Amet tellus cras adipiscing enim eu turpis.
  
  Sem integer vitae justo eget magna fermentum iaculis eu non. At volutpat diam ut venenatis tellus in. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Volutpat blandit aliquam etiam erat velit scelerisque in. Tempor orci dapibus ultrices in iaculis nunc sed. Pellentesque dignissim enim sit amet venenatis. Viverra orci sagittis eu volutpat odio. Vulputate enim nulla aliquet porttitor lacus. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Magna fringilla urna porttitor rhoncus dolor purus non enim. Ipsum suspendisse ultrices gravida dictum fusce ut. Duis at tellus at urna condimentum mattis. Feugiat nisl pretium fusce id velit ut. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae.
  
  Aliquet enim tortor at auctor urna nunc. Sollicitudin nibh sit amet commodo nulla. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Nunc congue nisi vitae suscipit tellus mauris a. Quisque egestas diam in arcu. Pretium lectus quam id leo in vitae turpis massa sed. Placerat vestibulum lectus mauris ultrices eros in. Euismod quis viverra nibh cras pulvinar mattis. Sit amet justo donec enim diam vulputate ut. Faucibus ornare suspendisse sed nisi lacus. Ut placerat orci nulla pellentesque dignissim enim. Mi eget mauris pharetra et ultrices. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Tellus molestie nunc non blandit massa. Placerat orci nulla pellentesque dignissim. Elementum integer enim neque volutpat. Orci porta non pulvinar neque laoreet.
  
  Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Amet volutpat consequat mauris nunc congue nisi vitae. Ut faucibus pulvinar elementum integer enim neque volutpat. Sem viverra aliquet eget sit amet tellus. Fringilla est ullamcorper eget nulla facilisi. Porttitor leo a diam sollicitudin. Aliquet enim tortor at auctor urna nunc id cursus. Neque ornare aenean euismod elementum nisi quis eleifend quam. Velit aliquet sagittis id consectetur. Congue mauris rhoncus aenean vel elit. Odio aenean sed adipiscing diam donec adipiscing. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Aliquam ut porttitor leo a diam sollicitudin tempor. Ut etiam sit amet nisl purus in mollis.`
};


const Correccion = () => {
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
          <p className="lead">{politicas.texto}</p>
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
