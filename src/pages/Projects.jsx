import React from 'react'
import ProjectsList from '../components/ProjectsList'
import Footer from '../components/Footer'
import BackButton from '../components/BackButton'

const Projects = () => {
  return (
    <div>
        <ProjectsList />
        <Footer/>
        <BackButton/>
    </div>
  )
}

export default Projects