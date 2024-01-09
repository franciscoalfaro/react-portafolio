import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'
import { Global } from '../helpers/Global'
import { SerializeForm } from '../helpers/SerializeForm'

export const Contacto = () => {
  const { form, changed } = useForm()
  const [loading, setLoading] = useState(false)

  const contactoForm = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      let contacto = SerializeForm(e.target)
      console.log(contacto)

      const request = await fetch(Global.url + "user/contacto", {
        method: "POST",
        body: JSON.stringify(contacto),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await request.json()
      console.log(data)

      if (data.status === "success") {
        console.log("correo de contacto enviado")

      } else {
        console.log(data.message)
      }

    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <form className='contact' onSubmit={contactoForm}>
        <label htmlFor='name'>Nombre</label>
        <input type="text" name="nombre" placeholder='Nombre'></input>

        <label htmlFor='apellido'></label>
        <input type="text" name="apellido" placeholder='Apellido'></input>

        <label htmlFor='email'></label>
        <input type="text" name="email" placeholder='E-mail'></input>

        <label htmlFor='consulta'></label>
        <textarea placeholder='Escribe tu consulta' name="consulta"></textarea>
        <button type="submit" value="Enviar"></button>

      </form>


    </div>
  )
}
