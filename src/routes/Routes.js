import React from "react";
import { Route } from "react-router-dom";
import Inicio from "../components/Inicio";
import Menu from "../components/Menu";  //quienes somos
import Quienes from "../components/Quienes";
import Cursos from "../components/Cursos";
import Blogs from "../components/Blogs";


const Routes = () => {
    return(
        <>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/Quienes" element={<Quienes/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/Cursos" element={<Cursos/>}/>
            <Route path="/Blogs" element={<Blogs/>}/>
        </>
    );
};


export default Routes;

