import React from 'react';
import { FaGithub, FaLinkedin, FaInstagramSquare, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            
            {/* Company Info */}
            <div className="text-center md:text-left space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaCode className="text-red-500 text-xl" />
                <h2 className="font-bold text-2xl bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Software Developer
                </h2>
              </div>
              <p className="text-gray-300 max-w-md">
                Innovative software solutions for modern businesses. Transforming ideas into digital reality.
              </p>
            
            </div>

            {/* Social Links & Contact */}
            <div className="space-y-6">
              <div className="space-y-3 text-center md:text-right">
                <ul className="flex items-center justify-center md:justify-end space-x-5">
                  {/* GitHub */}
                  <li>
                    <a
                      href="https://gitlab.com/vk643478"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="GitHub Profile" 
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </li>

                  {/* LinkedIn */}
                  <li>
                    <a
                      href="https://www.linkedin.com/in/vikash-chaudhary-3b3926285/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-900 hover:bg-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  </li>

                  {/* Instagram */}
                  <li>
                    <a
                      href="https://www.instagram.com/yourusername/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-700 hover:bg-pink-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="Instagram Profile"
                    >
                      <FaInstagramSquare className="text-xl" />
                    </a>
                  </li>

                  {/* Email */}
                  <li>
                    <a 
                      href="mailto:vk643478@gmail.com"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-red-700 hover:bg-red-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
                      aria-label="Send Email"
                    >
                      <FaEnvelope className="text-xl" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Supportive Partner */}
              <div className="text-center md:text-right">
                <p className="text-gray-300">
                  Supportive Partner: 
                  <strong className="text-red-400 ml-1">Er. Mohit.CH</strong>
                </p>
                <div className="flex items-center justify-center md:justify-end mt-2 text-sm text-gray-400">
                  <span>Made with</span>
                  <FaHeart className="text-red-500 mx-1" />
                  <span>by Vikash Chaudhary</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Border */}
          <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-center space-y-3 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Transforming businesses through innovative technology solutions.
            </p>
            <p className="text-gray-400 text-sm">
              Ready to start your project? <a href="mailto:vk643478@gmail.com" className="text-red-400 hover:text-red-300 transition-colors">Get in touch</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}