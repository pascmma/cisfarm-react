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
      
        <Routes>
          <Route path='/cisfarm-react' element={<Inicio/>}></Route>
          <Route path='/cisfarm-react/Quienes' element={<Quienes/>} ></Route>
          <Route path='/cisfarm-react/Menu' element={<Menu/>} ></Route>
          <Route path='/cisfarm-react/Cursos' element={<Cursos/>}></Route>
          <Route path='/cisfarm-react/Blogs' element={<Blogs/>}></Route>

        </Routes>





          
      </div>


    </Router>
    
  );
}

export default App;
