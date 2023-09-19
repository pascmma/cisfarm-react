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


function App() {
  return (
    

    
    <Router>
      <div className=''>
      
        <Routes>
          <Route path='/cisfarm-react' element={<Inicio/>}></Route>
          <Route path='/cisfarm-react/Quienes' element={<Quienes/>} ></Route>
          <Route path='/cisfarm-react/Menu' element={<Menu/>} ></Route>
          <Route path='/cisfarm-react/Cursos' element={<Cursos/>}></Route>
          <Route path='/cisfarm-react/Metanima/metanima' element={<Metanima/>}></Route>
          <Route path='/cisfarm-react/Metanima/curso1' element={<CursoMetanima/>}></Route>

          <Route path='/cisfarm-react/Blogs' element={<Blogs/>}></Route>
          <Route path='/cisfarm-react/enafb' element={<PaginaEnafb/>}></Route>
          

        </Routes>





          
      </div>


    </Router>
    
  );
}

export default App;
