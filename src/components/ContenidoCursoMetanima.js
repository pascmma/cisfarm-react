import React, { useState } from "react";
import { Row, Tab, Nav, Col } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";

import "../estilos/menuSeccionMetanima.css";




const ContenidoCursoMetanima = (props) => {
  
  

  return (
    <div className="container" >
      <Tab.Container id="left-tabs-example" defaultActiveKey="1">
        <Row>
          <Col xs={4} sm={2} >
            <Nav variant="pills" className="flex-column">
              {props.datos.contenidoSecciones.map((item) => (
                <div>
                  <Nav.Item >
                    <Nav.Link eventKey={item.id}  className="seccion text-black text-center text-wrap" style={{borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",}} >{item.tema}</Nav.Link>
                  </Nav.Item>
                </div>
              ))}

            </Nav>
          </Col>
          <Col xs={8}sm={10}>
            <Tab.Content className="">
              {props.datos.contenidoSecciones.map((item)=>(

                  <Tab.Pane style={{backgroundColor:"#121636"}} className="text-white p-4"  key={item.id} eventKey={item.id}>
                    {item.detalle.map((detalle)=>(
                      <ul style={{ listStyleType: 'none' }}>
                        <li> <FaPlay style={{color:"rgb(167, 116, 22)"}}/> {detalle.topico}</li>
                      </ul>
                    ))}
                  </Tab.Pane>
                 
              ))}
              
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default ContenidoCursoMetanima;
