import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyectos = () => {
    const [proyecto, setProyecto] = useState({});
    const params = useParams();
  
    
    useEffect(()=>{
      let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
      setProyecto(proyecto[0]);
      
    },[params.id])

  return (
    <div className='page page-work'>
        <h1 className='heading'>{proyecto.nombre} </h1>
        <div className='mask'>
          <img className="imgPro" src={"/images/"+proyecto.id+".png"} alt="proyecto"></img>
        </div>
        <p>Tecnologias utilizdas {proyecto.tecnologias}</p>
        <p>{proyecto.descripcion}</p>
        <a href={'https://'+proyecto.url} target="noreferrer">ir al proyecto</a>
    </div>
  )
}
