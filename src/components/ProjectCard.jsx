import React from 'react'

const ProjectCard = ({ key, title, description, tech, gifUrl, projectUrl }) => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap w-[94%] md:w-140 lg:w-180 text-whit hover:scale-105 transition-transform
    relative p-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-[rgb_3s_linear_infinite] shadow-[0_0_20px_rgba(236,72,153,0.6)]">
        <div className="lg:flex gap-4 p-8 bg-black/90 backdrop-blur-md text-white">
          <div index={key} className='flex flex-col gap-4 lg:w-[55%]' >
            <h3 className="font-black text-xl mb-2">{title.toUpperCase()}</h3>
            <p className="">{description}</p>
            <div className="flex flex-wrap">
              {tech.map((t, index) => (
                <span index={index} className="text-sm mt-2">
                  - {t}&nbsp;
                </span>
              ))}
            </div>
          </div>
          <div className='relative text-center'>
            <img 
              src={gifUrl}
              alt={title} 
              className="rounded-2xl md:w-110 md:h-65 lg:w-100 lg:h-54"
            />
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="w-40 md:bottom-10 md:p-3 lg:p-3 bg-red-400 md:bg-white border-2 
            border-white px-4 py-2 text-black/80 rounded-md shadow-md hover:bg-red-400 transition text-center">
              Ver proyecto
            </a>
          </div>
        </div>
      
      <style>{`
        @keyframes rgb {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-gradient-to-r {
          background-size: 200% 200%;
        }
      `}</style>
    </div>
    // </div>
  );
}

export default ProjectCard