import React from 'react'
import {Link} from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola Soy <strong>Francisco Alfaro</strong> y soy desarrollador web en Santiago, y ofrezco mis servicios de <strong>programacion 
        y desarrollo</strong> en todo tipo de proyectos.
      </h1>

      <h2>
        Te Ayudo a crear tu sitio y/o aplicacion, como tambien a tener mas visibilidad y relevancia en internet 
        <Link to="/contacto"> Contacta conmigo </Link> 
      </h2>

      <section className='last-works'>
        <h2 className='heading'> Algunos de mis proyectos</h2>
        <p> Estos son algunos de mis trabajos de desarrollo </p>

        <div className='works'>

        </div>

      </section>



    </div>
  )
}
