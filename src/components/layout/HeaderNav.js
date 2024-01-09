import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className=''>


      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink to="/inicio" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/portafolio" className={({ isActive }) => isActive ? "active" : ""}>Portafolio</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/curriculum" className={({ isActive }) => isActive ? "active" : ""}>Curriculum</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/servicios" className={({ isActive }) => isActive ? "active" : ""}>Servicios</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </header>
  )
}
