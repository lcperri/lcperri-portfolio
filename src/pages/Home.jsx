import React from 'react'
import ProjectsList from '../components/ProjectsList'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ProjectsList/>
      <Footer/>
    </>
  )
}

export default Home