import React from 'react'

const Hero = () => {
  return (
    <section>
        <div>
            {/* Simulación del <marquee> con Tailwind + animación */}
            <div className="overflow-hidden bg-black/30 text-green-400 py-2  ">
                <p className="whitespace-nowrap animate-[scroll_10s_linear_infinite] text-xl">
                Back to the best of 90s! ✨💾🖱️
                </p>
            </div>

            <style>
                {`
                @keyframes scroll {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                `}
            </style>
        </div>
        <div className="flex flex-col items-center text-center">
            <div className='md:w-[80%] lg:w-[63%] p-10 md:py-10 lg:py-15 space-y-10 '>
                <div className="text-left md:mt-6 font-bold text-base md:text-xl lg:text-xl">
                    <span className='text-white'>
                        Hola&nbsp;
                    </span>
                    <span>
                        soy Luis Pérez,&nbsp;
                    </span>
                    <span className='font-light text-base'>
                    profesional en computación e informática, apasionado por la tecnología y la programación web.
                    </span>
                    <p className='font-light text-base hidden sm:block pt-8'>
                    Me gusta estar en constante aprendizaje de las últimas tecnologías, como la ciencia de datos, el aprendizaje automático
                    y la web 3.0 <span className='text-red-400'>¡El futuro lo hacen los desarrolladores!</span>
                    </p>
                </div> 
                <p className='text-left'>
                    Algunas tecnologías que manejo son:
                </p>
                <p>
                    <div>
                        FrontEnd:
                    </div>
                    <div>
                        HTML | CSS | JS | React | Tailwind | Typescript | React Native
                    </div>
                </p>
                <p >
                    <div>
                        Backend:
                    </div>
                    <div>
                        Node JS | SQL | Express | Python
                    </div>
                </p>
            </div>
        </div>
    </section>
    )
}

export default Hero