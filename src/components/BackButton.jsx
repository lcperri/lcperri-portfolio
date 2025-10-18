import { useNavigate } from 'react-router-dom';
const BackButton = () => {
    const navigate = useNavigate()

    return (
        <button
        onClick={() => navigate(-1)}
        className="cursor-pointer fixed bottom-6 right-6 bg-gradient-to-r from-cyan-200 via-pink-200
        hover:bg-cyan-600 text-white p-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105
        flex items-center justify-center backdrop-blur-md" aria-label="Volver atrás"        
        >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        </button>
    )
}

export default BackButton