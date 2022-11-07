import React from 'react'
import {Link} from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>
      <h1>
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, 
        or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
        you need to be sure there isn't anything embarrassing hidden in the middle of text.
      </h1>

      <h2>
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, 
        or randomised words which don't look even slightly believable. <Link to="/contacto">contacta conmigo</Link> 
      </h2>

      <section className='last-works'>
        <h2> Algunos de mis proyectos</h2>
        <p> Estos son algunos de mis trabajos de desarrollo </p>

        <div className='works'>

        </div>

      </section>



    </div>
  )
}
