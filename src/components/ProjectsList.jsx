import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsList = () => {
    // Lista de Proyectos:
    const project = [
        {
            title: "Monitor de Bitcoin y Crypto",
            description: "App para monitorear el precio de las criptomonedas en tiempo real.",
            tech: ["React", "JS", "Tailwind", "API Rest"],
            gifUrl: "https://i.postimg.cc/vmbV5y3S/crypto-tracker-screen.png"
        },
        {
            title: "Weather App",
            description: "App para buscar una ciudad y ver su clima actual y predictivo. También puedes guardarla para tener el clima de tu ciudad en favoritos.",
            tech: ["React", "Node.js", "CSS"],
            gifUrl: "https://i.postimg.cc/tR5m6RD0/weather-app-screen.png"
        },
        {
            title: "Toast Notifications",
            description: "Una app que muestra como se pueden hacer notificaciones en tiempo real aplicando buenas prácticas en React.",
            tech: ["React", "Node.js", "CSS"],
            gifUrl: "https://i.postimg.cc/nVkwmV2y/toast-notifications-screen.png"
        }
    ]

    return (
        <div className='bg-black/70 md:px-4 lg:px-4'>
            <div className='w-full text-center py-8 text-white font-black text-xl'>MIS PROYECTOS</div>
            <div className='flex flex-wrap justify-center gap-6'>
                {project.map(project => (
                    <ProjectCard
                        key = {project.key} // Importante: usa una key única
                        title = {project.title}
                        description = {project.description}// Pasas el objeto completo como prop
                        tech = {project.tech}
                        gifUrl = {project.gifUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectsList