import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsList = () => {
    // Lista de Proyectos:
    const project = [
        {
            title: "Monitor de Bitcoin y Crypto",
            description: "App para monitorear el precio de las criptomonedas en tiempo real.",
            tech: ["React", "JS", "Tailwind", "API Rest"],
            gifUrl: "https://i.postimg.cc/vmbV5y3S/crypto-tracker-screen.png",
            projectUrl: "https://cryptopunks-bitcoin-crypto-tracker.vercel.app/"
        },
        {
            title: "Weather App",
            description: "Busca el clima de una ciudad, mira sus detalles adicionales y pinéala en favoritos.",
            tech: ["React", "JS", "Tailwind", "API Rest"],
            gifUrl: "https://i.postimg.cc/tR5m6RD0/weather-app-screen.png",
            projectUrl: "https://weather-app-sage-two-25.vercel.app/"
        },
        {
            title: "Toast Notifications",
            description: "Una app que muestra como se pueden hacer notificaciones en tiempo real aplicando buenas prácticas en React.",
            tech: ["React", "Node.js", "CSS", "JS"],
            gifUrl: "https://i.postimg.cc/nVkwmV2y/toast-notifications-screen.png",
            projectUrl: "http://toast-notifications-ten.vercel.app/"
        }
    ]

    return (
        <div className='bg-black/70'>
            <div className='w-full text-center text-white font-black py-10'>MIS PROYECTOS</div>
            <div className='flex flex-wrap justify-center gap-8'>
                {project.map(project => (
                    <ProjectCard
                        key = {project.key} // Importante: usa una key única
                        title = {project.title}
                        description = {project.description}// Pasas el objeto completo como prop
                        tech = {project.tech}
                        gifUrl = {project.gifUrl}
                        projectUrl= {project.projectUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectsList