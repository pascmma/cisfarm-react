import logo from './logo.svg';
import './App.css';
import Inicio from './components/Inicio';
import Menu from './components/Menu';
import Quienes from './components/Quienes';
import { BrowserRouter as Router, Switch, Route, Link,Routes } from 'react-router-dom';
import Cursos from './components/Cursos';
import Blogs from './components/Blogs';


function App() {
  return (
    <Router>
      <div className="App">
      <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/Quienes">Quienes Somos?</Link>
            </li>
            <li>
              <Link to="/Menu">Academia QF</Link>
            </li> 
            <li>
              <Link to="/Cursos">Cursos</Link>
            </li> 
            <li>
              <Link to="/Blogs">Blogs</Link>
            </li> 
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Inicio/>}></Route>
          <Route path='/Quienes' element={<Quienes/>} ></Route>
          <Route path='/Menu' element={<Menu/>} ></Route>
          <Route path='/Cursos' element={<Cursos/>}></Route>
          <Route path='/Blogs' element={<Blogs/>}></Route>

        </Routes>





          
      </div>


    </Router>
  );
}

export default App;
