import React from "react";
import Header from './Header'
import imagen from '../imagenes/img15.png';
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Novedades from "./Novedades";
import Slider from "react-slick";


const mitad = {
    width: "60%"
};

const imagenes = {
    width:'80%'
}

const bordeRadio={
    borderRadius: "50px",
    backgroundColor:"rgba(213, 181, 143,0.5)"
}

const Metanima = () =>{
    const settings = {
        className:"center",
        centerMode:true,
        infinite:true,
        centerPadding:"300px",
        speed:500,
        slidesToShow:5,
        dots:true
        
      };

    return(
        <> 
            <div style={{background:"#002780"}}>
      <Header/>
     </div>

            <div className="display-1">
                Soñar es crear
            </div>
            <br/><br/>
            <p className="lead text-primary" >Estudio de animacion </p>
            <div className="d-flex justify-content-center ">
            <br/>
            <p className="lead text-start" style={mitad}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="d-inline-block">
                <nav className="nav nav-pills flex-column flex-sm-row">
                    <a className="nav-link border border-danger mx-3 text-white " style={{backgroundImage:"linear-gradient(90deg, rgba(11,47,89,1) 0%, rgba(148,105,105,1) 87%)", borderTopLeftRadius:"40px",borderTopRightRadius:"40px", paddingInline:"40px"}}>SECCION I</a>
                    <a className="nav-link border border-danger mx-2 text-white" style={{backgroundImage:"linear-gradient(90deg, rgba(11,47,89,1) 0%, rgba(148,105,105,1) 87%)", borderTopLeftRadius:"40px",borderTopRightRadius:"40px", paddingInline:"40px"}}>SECCION II</a>
                    <a className="nav-link border border-danger mx-2 text-white" style={{backgroundImage:"linear-gradient(90deg, rgba(11,47,89,1) 0%, rgba(148,105,105,1) 87%)", borderTopLeftRadius:"40px",borderTopRightRadius:"40px", paddingInline:"40px"}}>SECCCION III</a>
                    <a className="nav-link border border-danger mx-2 text-white" style={{backgroundImage:"linear-gradient(90deg, rgba(11,47,89,1) 0%, rgba(148,105,105,1) 87%)", borderTopLeftRadius:"40px",borderTopRightRadius:"40px", paddingInline:"40px"}}> SECCION IV</a>
                </nav>
            </div>
            <br/><br/>
            <div className="container">
            <div className="row border">
                <div className="col border">
                    <div>
                    <div className="p-1" style={bordeRadio}> 
                        <h5 className="text-danger mx-5 text-start">Curso 2</h5>
                        <p className="text-start mx-5" style={{color:"#11215D"}}>Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur</p>

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
                <div className="col border">
                    <div>
                    <div className="p-1" style={bordeRadio}> 
                        <h5 className="text-danger mx-5 text-start">Curso 2</h5>
                        <p className="text-start mx-5" style={{color:"#11215D"}}>Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur</p>

                    </div>

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
                    <div className="p-1" style={bordeRadio}> 
                        <h5 className="text-danger mx-5 text-start">Curso 2</h5>
                        <p className="text-start mx-5" style={{color:"#11215D"}}>Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur</p>

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
                <div className="col border">
                    <div>
                    <div className="p-1" style={bordeRadio}> 
                        <h5 className="text-danger mx-5 text-start">Curso 2</h5>
                        <p className="text-start mx-5" style={{color:"#11215D"}}>Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur</p>

                    </div>

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
                    <div className="p-1" style={bordeRadio}> 
                        <h5 className="text-danger mx-5 text-start">Curso 2</h5>
                        <p className="text-start mx-5" style={{color:"#11215D"}}>Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur</p>

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
                <div className="col border">
                    <div>
                    <div className="p-1" style={bordeRadio}> 
                        <h5 className="text-danger mx-5 text-start">Curso 2</h5>
                        <p className="text-start mx-5" style={{color:"#11215D"}}>Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur</p>

                    </div>

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
            <div className="row">
    <Slider {...settings}>
    <div className="col">
  <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
    <div className="card-body">
      <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
      <h6 className="card-subtitle my-2 text-primary text-start">
        Nombre completo de la noticia1
      </h6>
      <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
      <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
        Ver mas
      </button>
    </div>
  </div>
</div>
<div className="col">
  <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
    <div className="card-body">
      <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
      <h6 className="card-subtitle my-2 text-primary text-start">
        Nombre completo de la noticia1
      </h6>
      <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
      <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
        Ver mas
      </button>
    </div>
  </div>
</div>
<div className="col">
  <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
    <div className="card-body">
      <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
      <h6 className="card-subtitle my-2 text-primary text-start">
        Nombre completo de la noticia1
      </h6>
      <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
      <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
        Ver mas
      </button>
    </div>
  </div>
</div>
<div className="col">
  <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
    <div className="card-body">
      <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
      <h6 className="card-subtitle my-2 text-primary text-start">
        Nombre completo de la noticia1
      </h6>
      <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
      <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
        Ver mas
      </button>
    </div>
  </div>
</div>
<div className="col">
  <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
    <div className="card-body">
      <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
      <h6 className="card-subtitle my-2 text-primary text-start">
        Nombre completo de la noticia1
      </h6>
      <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
      <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
        Ver mas
      </button>
    </div>
  </div>
</div>
<div className="col">
  <div className="card my-3 " style={{ width: "13rem", borderRadius:"50px", border:"solid blue 13px" }}>
    <div className="card-body">
      <img src={imagen} style={{ width: "90%", height:"60%",borderRadius:"40px", }} />
      <h6 className="card-subtitle my-2 text-primary text-start">
        Nombre completo de la noticia1
      </h6>
      <p className="card-text text-start text-primary">Fecha de lanzamiento </p>
      <button type="button" className="btn btn-primary" style={{marginLeft:"35%", borderRadius:"20px"}}>
        Ver mas
      </button>
    </div>
  </div>
</div>
    </Slider>
    
  </div>  
          <Footer/>
          <Footer2/>  
        </>
    )
};

export default Metanima;

<br/>