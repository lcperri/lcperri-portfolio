import React from 'react'
import ProjectsList from '../components/ProjectsList'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ProjectsList/>
      <Footer/>
    </>
  )
}

export default Home