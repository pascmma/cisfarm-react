import React from "react";
import "./contenedor.css";


const Footer = () =>{
    return(
        <>
       
  <footer className="footer mt-auto py-3 bg-light" style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "40px" }}>
    <div className="container text-center text-md-start mt-2 text-primary">
      <div className="row mt-3" >
        <div className="col-md-6 col-lg-3 col-xl-2 mx-auto mb-4">
          <h6 className="fw-bold mb-4">¿Quienes somos? </h6>
          <ul className="" >
            <li>
              <a href="#!" className="text-reset text-decoration-none ">Servicio y promesa</a>
            </li>
            <li>
              <a href="#!" className="text-reset text-decoration-none ">Mision</a>
            </li>
            <li>
              <a href="#!" className="text-reset text-decoration-none ">Vision</a>
            </li>
            <li>
              <a href="#!" className="text-reset text-decoration-none">Recorrido Historico</a>
            </li>
            <li>
              <a href="#!" className="text-reset  text-decoration-none">Equipo de trabajo</a>
            </li>
          </ul>
        </div>

        
        <div className="col-md-6 col-lg-3 col-xl-2 mx-auto mb-4">
          <h6 className="fw-bold mb-4">Curso </h6>
          <ul className="">
            <li>
              <a href="#!" className="text-reset text-decoration-none">Farmacologia</a>
            </li>
            <li>
              <a href="#!" className="text-reset text-decoration-none">Cardiovascular</a>
            </li>
            <li>
              <a href="#!" className="text-reset text-decoration-none">Psicofarmacologia</a>
            </li>
            <li>
              <a href="#!" className="text-reset text-decoration-none">Molecular</a>
            </li>
          </ul>
        </div>

        
        <div className="col-md-6 col-lg-3 col-xl-2 mx-auto mb-4">
          <h6 className="fw-bold mb-4">Metamina </h6>
          <ul className="">
            <li>
              <a href="#!" className="text-reset text-decoration-none">Animacion</a>
            </li>
            <li>
              <a href="#!" className="text-reset text-decoration-none">Curso1</a>
            </li>
            <li>
              <a href="#!" className="text-reset text-decoration-none">Curso2</a>
            </li>
            <li>
              <a href="#!" className="text-reset text-decoration-none">Curso3</a>
            </li>
          </ul>
        </div>

        
        <div className="col-md-6 col-lg-3 col-xl-2 mx-auto mb-4">
          <h6 className="fw-bold mb-4">Academia Q.F </h6>
          <ul className="">
            <li>
              <a href="#!" className="text-reset text-decoration-none">Servicio y promesa</a>
            </li>
            <li>
              <a href="#!" className="text-reset text-decoration-none">Mision</a>
            </li>
            <li>
              <a href="#!" className="text-reset text-decoration-none">Vision</a>
            </li>
            <li>
              <a href="#!" className="text-reset text-decoration-none">Recorrido Historico</a>
            </li>
            <li>
              <a href="#!" className="text-reset text-decoration-none">Equipo de trabajo</a>
            </li>
          </ul>
        </div>

        
        <div className="col-md-6 col-lg-3 col-xl-2 mx-auto mb-4">
          <h6 className="fw-bold mb-4">Blogs </h6>
          <ul className="">
            <li>
              <a href="#!" className="text-reset text-decoration-none fs-6">item1</a>
            </li>
            <li>
              <a href="#!" className="text-reset text-decoration-none">item2</a>
            </li>
            <li>
              <a href="#!" className="text-reset text-decoration-none">item3</a>
            </li>
            <li>
              <a href="#!" className="text-reset text-decoration-none">item4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>


        </>
    );
}

export default Footer;