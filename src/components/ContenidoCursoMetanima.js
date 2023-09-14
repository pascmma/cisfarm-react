import React, {useState} from "react";

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
    const [activeTab, setActiveTab] = useState('home-vertical');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

    
    return(
        <>
            <br/><br/><br/>
            <div className="container border mt-20">
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
        <div className="tab-vertical">
          <ul className="nav nav-tabs" id="myTab3" role="tablist">
            <li className={`nav-item ${activeTab === 'home-vertical' ? 'active' : ''}`}>
              <a
                className="nav-link"
                id="home-vertical-tab"
                onClick={() => handleTabClick('home-vertical')}
              >
                Seccion1
              </a>
            </li>
            <li className={`nav-item ${activeTab === 'profile-vertical' ? 'active' : ''}`}>
              <a
                className="nav-link"
                id="profile-vertical-tab"
                onClick={() => handleTabClick('profile-vertical')}
              >
                Seccion2
              </a>
            </li>
            <li className={`nav-item ${activeTab === 'contact-vertical' ? 'active' : ''} `} style={{display:"inline-block",borderRadius:"80px",backgroundImage:"linear-gradient(287deg, rgba(11,47,89,1) 0%, rgba(164,127,40,1) 84%) !important"}}>
              <a
                className="nav-link"
                id="contact-vertical-tab"
                onClick={() => handleTabClick('contact-vertical')}
              >
                Seccion3
              </a>
            </li>
            <li className={`nav-item ${activeTab === 'section-vertical' ? 'active' : ''}`}>
              <a
                className="nav-link"
                id="section-vertical-tab"
                onClick={() => handleTabClick('section-vertical')}
              >
                Seccion4
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent3">
            <div className={`tab-pane ${activeTab === 'home-vertical' ? 'active' : ''}`} id="home-vertical" role="tabpanel">
              <h3 >Seccion 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend mi in. At consectetur lorem donec massa. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Molestie nunc non blandit massa enim nec dui nunc mattis. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Augue eget arcu dictum varius duis.
              </p>
            </div>
            <div className={`tab-pane ${activeTab === 'profile-vertical' ? 'active' : ''}`} id="profile-vertical" role="tabpanel">
              <h3>Seccion 2 </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend mi in. At consectetur lorem donec massa. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Molestie nunc non blandit massa enim nec dui nunc mattis. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Augue eget arcu dictum varius duis..</p>
            </div>
            <div className={`tab-pane ${activeTab === 'contact-vertical' ? 'active' : ''}`} id="contact-vertical" role="tabpanel">
              <h3>Seccion 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend mi in. At consectetur lorem donec massa. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Molestie nunc non blandit massa enim nec dui nunc mattis. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Augue eget arcu dictum varius duis..</p>
            </div>
            <div className={`tab-pane ${activeTab === 'section-vertical' ? 'active' : ''}`} id="contact-vertical" role="tabpanel">
              <h3>Seccion 4</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend mi in. At consectetur lorem donec massa. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Molestie nunc non blandit massa enim nec dui nunc mattis. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Augue eget arcu dictum varius duis..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/><br/>

            
        </>
    );
}

export default ContenidoCursoMetanima;