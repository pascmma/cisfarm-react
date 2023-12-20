import React from "react";
import "./contenedor.css";
import {data} from '../objetos/ObjetoCursoFarmacologia';
import { dataf } from "../objetos/ObjetoFooter";
import {datam} from '../objetos/ObjetoMetanimaCruso';
const cursosfooter = data.map((item)=>item.titulo1);
const cursosmetanima = datam.map((item)=>item.titulo1);

// Primer footer que contiene informacion de las paginas


const Footer = () =>{
    return(
        <>
       
       <footer className="footer mt-auto py-3 " style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "40px",backgroundColor:"#DEECFA" }}>
  <div className="container text-center text-md-start mt-2 text-primary">
    <div className="row mt-3">
      <div className="col-md-6 col-lg-3 col-xl-2 mx-auto mb-4">
        <h6 className="fw-bold mb-4">¿Quiénes somos?</h6>
        <ul className="list-unstyled">
          
          <li>
            <a href={dataf.footer1.quienes} className="text-reset text-decoration-none">Servicio y promesa</a>
          </li>
          <li>
            <a href={dataf.footer1.quienes} className="text-reset text-decoration-none">Misión</a>
          </li>
          <li>
            <a href={dataf.footer1.quienes} className="text-reset text-decoration-none">Visión</a>
          </li>
          <li>
            <a href={dataf.footer1.quienes} className="text-reset text-decoration-none">Recorrido Histórico</a>
          </li>
          <li>
            <a href={dataf.footer1.quienes} className="text-reset text-decoration-none">Equipo de trabajo</a>
          </li>
        </ul>
      </div>

      <div className="col-md-6 col-lg-3 col-xl-2 mx-auto mb-4">
        <h6 className="fw-bold mb-4">Curso</h6>
        <ul className="list-unstyled">
        {cursosfooter.map((item)=>(
            <div>
              <li>
                <a href={`/cursos/${item}`} className="text-reset text-decoration-none">{item}</a>
              </li>

            </div>
          ))}
          

        </ul>
      </div>

      <div className="col-md-6 col-lg-3 col-xl-2 mx-auto mb-4">
        <h6 className="fw-bold mb-4">Metanima</h6>
        <ul className="list-unstyled">
          {cursosmetanima.map((item)=>(
            <div>
              <li>
                <a href={`/metanima/${item}`} className="text-reset text-decoration-none">{item}</a>
              </li>

            </div>
          ))}
        </ul>
      </div>

      <div className="col-md-6 col-lg-3 col-xl-2 mx-auto mb-4">
        <h6 className="fw-bold mb-4">Academia Q.F</h6>
        <ul className="list-unstyled">
          <li>
            <a href={dataf.footer1.servicioAcademi} className="text-reset text-decoration-none">Servicio y promesa</a>
          </li>
          <li>
            <a href={dataf.footer1.misionAcademia} className="text-reset text-decoration-none">Misión</a>
          </li>
          <li>
            <a href={dataf.footer1.visionAcademia} className="text-reset text-decoration-none">Visión</a>
          </li>
          <li>
            <a href={dataf.footer1.recorridoAcademia} className="text-reset text-decoration-none">Recorrido Histórico</a>
          </li>
          <li>
            <a href={dataf.footer1.equipoAcademia} className="text-reset text-decoration-none">Equipo de trabajo</a>
          </li>
        </ul>
      </div>

      <div className="col-md-6 col-lg-3 col-xl-2 mx-auto mb-4">
        <h6 className="fw-bold mb-4">Blogs</h6>
        <ul className="list-unstyled">
          {dataf.footer1.blogs.map((item)=>(
            <li>
              <a href={item.itemurl} className="text-reset text-decoration-none fs-6">{item.item}</a>
            </li>

          ))}
        
        </ul>
      </div>
    </div>
  </div>
</footer>


        </>
    );
}

export default Footer;