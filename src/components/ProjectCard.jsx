import React from 'react'

const ProjectCard = ({ key, title, description, tech, gifUrl }) => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap w-[95%] md:w-140 lg:w-205 border-4 border-pink-100 border-90s-purple text-white bg-black
    p-6 md:p-12 lg:p-12 gap-4 transform hover:scale-105 transition-transform">
      <div index={key} className='flex flex-col gap-4 lg:w-[50%]' >
        <h3 className="text-xl font-black">{title}</h3>
        <p className="">{description}</p>
        <div className="flex flex-wrap">
          {tech.map((t, index) => (
            <span index={index} className="mt-2">
              - {t}&nbsp;
            </span>
          ))}
        </div>
      </div>
      <div className='relative text-center'>
        <img 
          src={gifUrl}
          alt={title} 
          className="rounded-2xl md:w-120 lg:w-90 md:h-65 lg:h-54"
        />
        <a href="/" className="w-40 md:bottom-10 md:p-3 lg:p-3  bg-white border-2 
        border-white px-4 py-2 text-black/80 rounded-md shadow-md hover:bg-red-400 transition text-center">
          Ver proyecto
        </a>
      </div>
    </div>
  );
}

export default ProjectCard