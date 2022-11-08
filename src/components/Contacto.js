import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <form className='contact' action="mailto:franciscoalfar@gmail.com">
        <input type="text" placeholder='Nombre'></input>
        <input type="text" placeholder='Apellido'></input>
        <input type="text" placeholder='E-mail'></input>
        <textarea placeholder='Escribe tu consulta'></textarea>
        <input type="submit" value="Enviar"></input>

      </form>

    
    </div>
  )
}
