import React from 'react';
import{Routes, Route, BrowserRouter, NavLink, Navigate} from "react-router-dom";
import { Contacto } from '../components/Contacto';
import { Curriculum } from '../components/Curriculum';
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';

export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* Header y navegacion*/}

        <HeaderNav></HeaderNav>

        {/* contenido central */}

        <section className='content'>
          <Routes>
              <Route path="/" element={<Navigate to={"/inicio"}></Navigate>}></Route>
              <Route path="/inicio" element={<Inicio></Inicio>}></Route>
              <Route path="/contacto" element={<Contacto></Contacto>}></Route>
              <Route path="/curriculum" element={<Curriculum></Curriculum>}></Route>
              <Route path="/portafolio" element={<Portafolio></Portafolio>}></Route>
              <Route path="/servicios" element={<Servicios></Servicios>}></Route>
          </Routes>
        </section>


        {/* footer */}
        <Footer></Footer>

    </BrowserRouter>
  )
}
