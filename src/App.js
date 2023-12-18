import logo from './logo.svg';
import './App.css';
import Inicio from './components/Inicio';
import Menu from './components/Menu';
import Quienes from './components/Quienes';
import { BrowserRouter as Router, Switch, Route, Link,Routes } from 'react-router-dom';
import Cursos from './components/Cursos';
import Blogs from './components/Blogs';
import Metanima from './components/Metanima';
import CursoMetanima from './components/CursoMetanima';
import PaginaEnafb from './components/PaginaEnafb';
import PaginaResidentado from './components/PaginaResidentado';
import {data} from './objetos/ObjetoCursoFarmacologia';


function App() {
  return (
    

    <div style={{overflowX:'hidden'}}>
    <Router>
      
      
        <Routes>
          <Route path='/' element={<Inicio/>}></Route>
          <Route path='/Quienes' element={<Quienes/>} ></Route>
          <Route path='/Menu' element={<Menu/>} ></Route>
          <Route path='/Metanima/metanima' element={<Metanima/>}></Route>
          <Route path='/Metanima/curso1' element={<CursoMetanima/>}></Route>

          {data.map((item,index)=>(
            

              <Route path={`/Cursos/${item.titulo1}`} element={<Cursos datos={data[index]}/>}></Route>
            
          ))}
          <Route path='/Blogs' element={<Blogs/>}></Route>
          <Route path='/enafb' element={<PaginaEnafb/>}></Route>
          <Route path='/residentado' element={<PaginaResidentado/>}></Route>
          

        </Routes>





          
      


    </Router>
    </div>
  );
}

export default App;
