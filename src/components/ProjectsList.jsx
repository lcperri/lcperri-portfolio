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
            description: "Obtén el clima de una ciudad y sus detalles con esta app. Puedes pinearla en favoritos.",
            tech: ["React", "JS", "CSS", "API Rest"],
            gifUrl: "https://i.postimg.cc/tR5m6RD0/weather-app-screen.png",
            projectUrl: "https://weather-app-sage-two-25.vercel.app/"
        },
        {
            title: "Toast Notifications",
            description: "Una app que muestra notificaciones al instante, aplicando buenas prácticas en React.",
            tech: ["React", "Node.js", "CSS", "JS"],
            gifUrl: "https://i.postimg.cc/nVkwmV2y/toast-notifications-screen.png",
            projectUrl: "http://toast-notifications-ten.vercel.app/"
        }
    ]

    return (
        <div className='bg-black/70'>
            <div className='w-full text-center text-white py-10 text-sm md:text-2xl '>MIS PROYECTOS</div>
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