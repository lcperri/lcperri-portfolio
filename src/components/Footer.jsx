import React from "react";
import {
    FaLinkedinIn,
    FaTwitter,
    FaGithub,
    FaStackOverflow,
    FaInstagram,
    FaYoutube,
    FaFacebookF,
    FaWhatsapp,
} from "react-icons/fa";


const Footer = () => {
return (
    <footer className="bg-black text-white py-10 flex flex-col items-center justify-center gap-8 text-xs">
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 text-2xl">
            <a href="https://linkedin.com" className="hover:text-gray-400 transition-colors">
                <FaLinkedinIn />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400 transition-colors">
                <FaTwitter />
            </a>
            <a href="https://github.com" className="hover:text-gray-400 transition-colors">
                <FaGithub />
            </a>
            <a href="https://stackoverflow.com" className="hover:text-gray-400 transition-colors">
                <FaStackOverflow />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400 transition-colors">
                <FaInstagram />
            </a>
            <a href="https://youtube.com" className="hover:text-gray-400 transition-colors">
                <FaYoutube />
            </a>
            <a href="https://facebook.com" className="hover:text-gray-400 transition-colors">
                <FaFacebookF />
            </a>
            <a href="https://whatsapp.com" className="hover:text-gray-400 transition-colors">
                <FaWhatsapp />
            </a>
        </div>

        <p className="text-gray-400 text-center px-4">
            © 2025 <span className="italic text-white">Luis Carlos Per Ri. &nbsp;</span>
            Hecho con <span className="text-pink-600">❤</span> desde Perú.
        </p>

    </footer>
    );
};


export default Footer;