import React from "react";
//import { useHistory } from 'react-router-dom';
import Casos from "./Casos";
import Bord from "./Bord";
import Card from "./Cards";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import imagen from '../imagenes/img1.png';
import background from '../imagenes/back_academia.png';
// fondo img4
import '../estilos/academia.css';
import MenuCardSlider from "./MenuCardSlider";
import { Link } from "react-router-dom";
import logoAcademia from '../assets/Academia- metálico-simple.png';
import { Fade } from "react-reveal";



function Menu() {

  //const history = useHistory();

  //const redirigir = () =>{
  //   history.push('/cisfarm/enafb')
  //}

  return (
    <div className="" style={{
      backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundAttachment: "",
    }}>
      <Fade>
      <div className="">
        <Header />
        <div className="container">

        <div className="row my-3 " style={{marginLeft:"0.2em"}} >
          <div className="col-12 col-md-8">
            <h1 className="text-white mx-3" style={{ fontSize: "4.5em", textAlign: "left" }}>Academia QF</h1>
            <hr style={{ border: "solid 4px white", width: "70%", marginLeft:"1em" }} />
            <p className="display-5 text-white  px-3" id="texto" style={{ width: "100%", textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="col-12 col-md-4">
            <img src={logoAcademia} className="img-fluid " style={{width:"90%", marginLeft:"1em"}}/>

          </div>


        </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        

        <MenuCardSlider />

        <br />
        <br />
        <br />
        <br />
        <br />



        <div className="container ">
          <div className="row justify-content-center m-5 ">
            <div className="col-lg-4 col-md-6 col-sm-12 my-3 ">
              <div className="" style={{ background: "linear-gradient(180deg, rgba(141,143,161,1) 0%, rgba(183,198,205,0.4430147058823529) 67%)", backdropFilter: "blur(10px)", borderRadius: "20px", border: "1px solid white" }}>
                <Link to="/cisfarm-react/enafb" style={{textDecoration:"none"}}>
                  <h1 className="card-title p-3 text-white " >Repaso-ENAFB</h1>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 my-3">
              <div className="" style={{ background: "linear-gradient(180deg, rgba(141,143,161,1) 0%, rgba(183,198,205,0.4430147058823529) 67%)", backdropFilter: "blur(10px)", borderRadius: "20px", border: "1px solid white" }}>
                <Link to="/cisfarm-react/residentado" style={{textDecoration:"none"}}>
                  <h1 className="card-title p-3 text-white">Repaso-RESIDENTADO</h1>
                </Link>

              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
      <Footer2 />
      </Fade>
    </div>
  );
}

export default Menu;
