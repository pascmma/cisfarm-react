import React, { useState } from "react";
import { Row, Tab, Nav, Col } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";

import "../estilos/menuSeccionMetanima.css";

const contenido = [
  {
    id: 1,
    tema: "SECCION 1",
    detalle:[
      {topico:"Nombre del topico1"},
      {topico:"Nombre del topico1"},
      {topico:"Nombre del topico1"},
      {topico:"Nombre del topico1"},
      {topico:"Nombre del topico1"},
      {topico:"Nombre del topico1"},
    ],
  },
  {
    id: 2,
    tema: "SECCION II",
    detalle:[
      {topico:"Nombre del topico2"},
      {topico:"Nombre del topico2"},
      {topico:"Nombre del topico2"},
      {topico:"Nombre del topico2"},
      {topico:"Nombre del topico2"},
      {topico:"Nombre del topico2"},
    ],
  },
  {
    id: 3,
    tema: "SECCION III",
    detalle:[
      {topico:"Nombre del topico3"},
      {topico:"Nombre del topico3"},
      {topico:"Nombre del topico3"},
      {topico:"Nombre del topico3"},
      {topico:"Nombre del topico3"},
      {topico:"Nombre del topico3"},
    ],
  },
  {
    id: 4,
    tema: "SECCION IV",
    detalle:[
      {topico:"Nombre del topico4"},
      {topico:"Nombre del topico4"},
      {topico:"Nombre del topico4"},
      {topico:"Nombre del topico4"},
      {topico:"Nombre del topico4"},
      {topico:"Nombre del topico4"},
    ],
  },
  {
    id: 5,
    tema: "SECCION V",
    detalle:[
      {topico:"Nombre del topico5"},
      {topico:"Nombre del topico5"},
      {topico:"Nombre del topico5"},
      {topico:"Nombre del topico5"},
      {topico:"Nombre del topico5"},
      {topico:"Nombre del topico5"},
    ],
  },
];

const style = {
  backgroundColor: `#201761`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const ContenidoCursoMetanima = () => {
  
  

  return (
    <div className="container" >
      <Tab.Container id="left-tabs-example" defaultActiveKey="1">
        <Row>
          <Col xs={4} sm={2} >
            <Nav variant="pills" className="flex-column">
              {contenido.map((item) => (
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
              {contenido.map((item)=>(

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
