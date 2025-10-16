import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="mb-4 text-center">
      <h1 className="  text-xl md:text-3xl text-black bg-yellow-200 p-4 border-4 border-red-400 inline-block shadow-lg animate-pulse">
          💾 BIENVENIDO A MI PORTAFOLIO
      </h1>
      <nav className="backdrop-blur-lg rounded shadow-lg bg-black/90 bordertext-white underline mt-4 flex justify-center 
      md:space-x-10 lg:space-x-14 md:py-2 text-white text-sm lg:text-base">
        <Link to="/" className='hover:scale-105 hover:text-red-400 hover:underline hover:font-medium transition duration-300  rounded-lg p-2'>Inicio</Link>
        <Link to="/about" className='hover:scale-105 hover:text-red-400 hover:underline hover:font-medium transition duration-300  rounded-lg p-2'>Sobre mí</Link>
        <Link to="/projects" className='hover:scale-105 hover:text-red-400 hover:underline hover:font-medium transition duration-300  rounded-lg p-2'>Proyectos</Link>
      </nav>
    </header>
  );
};

export default Navbar