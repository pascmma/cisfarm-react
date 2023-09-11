import React from "react";
import Header from './Header'
import imagen from '../imagenes/img15.png';
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Novedades from "./Novedades";


const mitad = {
    width: "60%"
};

const imagenes = {
    width:'80%'
}

const bordeRadio={
    borderRadius: "40px",
    backgroundColor:"rgba(213, 181, 143,0.5)"
}

const Metanima = () =>{
    return(
        <> 
            <div className="bg-primary">
            <Header/>
            </div>

            <div className="display-1">
                Soñar es crear
            </div>
            <p className="lead text-primary" >Estudio de animacion </p>
            <div className="d-flex justify-content-center ">
            <br/>
            <p className="" style={mitad}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="border d-inline-block">
                <nav className="nav nav-pills flex-column flex-sm-row">
                    <a className="nav-link ">SECCION I</a>
                    <a className="nav-link ">SECCION II</a>
                    <a className="nav-link ">SECCCION III</a>
                    <a className="nav-link "> SECCION IV</a>
                </nav>
            </div>
            <div className="container">
            <div className="row border">
                <div className="col border">
                    <div>
                    <div  style={bordeRadio}> 
                        <h5 className="text-danger">Curso 2</h5>
                        <p style={{color:"#11215D"}}>Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor ipsum
dolor sit amet, consectetur</p>

                    </div>

                    </div>
                </div>
                <div className="col-2 border">
                    <img className="rounded" src={imagen} style={imagenes}/>
                </div>
                <div className="col-2 border">
                    <img className="rounded" src={imagen}  style={imagenes}/>
                </div>
                <div className="col">
                <div>
                    <div style={bordeRadio}> 
                        <h5 className="text-danger">Curso 2</h5>
                        <p style={{color:"#11215D"}}>Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor ipsum
dolor sit amet, consectetur</p>

                    </div>

                    </div>
                </div>
                

            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="container">
            <div className="row border">
                <div className="col border">
                    <div>
                    <div  style={bordeRadio}> 
                        <h5 className="text-danger">Curso 2</h5>
                        <p style={{color:"#11215D"}}>Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor ipsum
dolor sit amet, consectetur</p>

                    </div>

                    </div>
                </div>
                <div className="col-2 border">
                    <img className="rounded" src={imagen} style={imagenes}/>
                </div>
                <div className="col-2 border">
                    <img className="rounded" src={imagen}  style={imagenes}/>
                </div>
                <div className="col">
                <div>
                    <div style={bordeRadio}> 
                        <h5 className="text-danger">Curso 2</h5>
                        <p style={{color:"#11215D"}}>Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor ipsum
dolor sit amet, consectetur</p>

                    </div>

                    </div>
                </div>
                

            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="container">
            <div className="row border">
                <div className="col border">
                    <div>
                    <div  style={bordeRadio}> 
                        <h5 className="text-danger">Curso 2</h5>
                        <p style={{color:"#11215D"}}>Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor ipsum
dolor sit amet, consectetur</p>

                    </div>

                    </div>
                </div>
                <div className="col-2 border">
                    <img className="rounded" src={imagen} style={imagenes}/>
                </div>
                <div className="col-2 border">
                    <img className="rounded" src={imagen}  style={imagenes}/>
                </div>
                <div className="col">
                <div>
                    <div style={bordeRadio}> 
                        <h5 className="text-danger">Curso 2</h5>
                        <p style={{color:"#11215D"}}>Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor ipsum
dolor sit amet, consectetur</p>

                    </div>

                    </div>
                </div>
                

            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="">
                <h4 className="">Novedades </h4>
            </div>
            <Novedades/>
          <Footer/>
          <Footer2/>  
        </>
    )
};

export default Metanima;
