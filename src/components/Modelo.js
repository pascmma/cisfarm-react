import React from "react";
import { OBJModel } from 'react-3d-viewer';
import objeto from '../imagenes/modeloOBJ.obj';
import objeto2 from '../imagenes/FinalBaseMesh.obj'



const Modelo = () => {
    const height = window.innerHeight;
    const width = window.innerHeight;
    return (
        <>
        
          
            
                <OBJModel

                    src={objeto}
                    position={{ x: 0, y: -2.5, z: 0 }}
                    scale={{ x: 0.25, y: 0.25, z: 0.25 }}
                    width={width}
                    height={height}
                ></OBJModel>
            
        


        </>
    )
};

export default Modelo;