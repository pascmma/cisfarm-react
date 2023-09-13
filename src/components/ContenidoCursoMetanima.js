import React from "react";

import "../components/contenedor.css";
const contenido = [
    {
        id:1,
        tema: "Nombre del tema",
        detalle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor.`
    },
    {
        id:2,
        tema: "Nombre del tema",
        detalle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor.`
    },
    {
        id:3,
        tema: "Nombre del tema",
        detalle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor.`
    },
    {
        id:4,
        tema: "Nombre del tema",
        detalle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor.`
    },
    {
        id:5,
        tema: "Nombre del tema",
        detalle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor.`
    },
    {
        id:6,
        tema: "Nombre del tema",
        detalle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor.`
    },
];

const style = {
    backgroundColor: `#201761`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  
};

const ContenidoCursoMetanima = () =>{

    
    return(
        <>
            <br/><br/><br/>
            <div class="container border  mt-20">
    <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                           
                            <div class="tab-vertical">
                                <ul class="nav nav-tabs" id="myTab3" role="tablist"> 
                                    <li class="nav-item" style={{background:"#ec981a !important"}}>
                                        <a class="nav-link active" id="home-vertical-tab" data-toggle="tab" href="#home-vertical" role="tab" aria-controls="home" aria-selected="true">Seccion1</a>
                                    </li>
                                    <li class="nav-item" style={{background:"#ec981a"}}>
                                        <a class="nav-link" id="profile-vertical-tab" data-toggle="tab" href="#profile-vertical" role="tab" aria-controls="profile" aria-selected="false">Seccion2</a>
                                    </li>
                                    <li class="nav-item" style={{background:"#ec981a"}}>
                                        <a class="nav-link" id="contact-vertical-tab" data-toggle="tab" href="#contact-vertical" role="tab" aria-controls="contact" aria-selected="false">Seccion3</a>
                                    </li>
                                    <li class="nav-item" style={{background:"#ec981a"}}>
                                        <a class="nav-link" id="contact-vertical-tab" data-toggle="tab" href="#contact-vertical" role="tab" aria-controls="contact" aria-selected="false">Seccion3</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent3">
                                    <div class="" id="home-vertical" role="tabpanel" aria-labelledby="home-vertical-tab">
                                        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend mi in. At consectetur lorem donec massa. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Molestie nunc non blandit massa enim nec dui nunc mattis. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Augue eget arcu dictum varius duis.</p>
                                        
                                    </div>
                                    <div class="tab-pane fade" id="profile-vertical" role="tabpanel" aria-labelledby="profile-vertical-tab">
                                        <h3>Tab Content 1</h3>
                                        <p>Integer malesuada nunc vel risus commodo. Enim eu turpis egestas pretium aenean pharetra magna. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Diam vulputate ut pharetra sit amet. At ultrices mi tempus imperdiet.</p>
                                    </div>
                                    <div class="tab-pane fade" id="contact-vertical" role="tabpanel" aria-labelledby="contact-vertical-tab">
                                        <h3>Tab Heading</h3>
                                        <p>Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras pulvinar mattis. Amet risus nullam eget felis eget nunc lobortis mattis. Lacus viverra vitae congue eu. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Est placerat in egestas erat imperdiet sed euismod.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
            
            

            
        </>
    );
}

export default ContenidoCursoMetanima;