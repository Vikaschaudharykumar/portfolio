import React from 'react'
import { SiPhp, SiNextdotjs } from "react-icons/si";
import { FaLaravel, FaReact, FaNodeJs, FaGithub, FaLinkedin, FaInstagramSquare, FaEnvelope, FaCode, FaDatabase, FaServer } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../../public/new.jpg";

export default function Home() {
    return (
        <section id="HOME" className="max-w-screen-2xl container mx-auto px-6 md:px-16 py-8 md:py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">

                {/* Left Section */}
                <div className="md:w-1/2 space-y-6 order-2 md:order-1">
                    {/* Welcome Text with Animation */}
                    <div className="animate-fade-in-up">
                        <span className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400">
                            Welcome to My Portfolio
                        </span>
                    </div>

                    {/* Main Heading with Typed Animation */}
                    <div className="animate-fade-in-up animation-delay-200">
                        <div className="flex flex-wrap items-center gap-2 text-xl md:text-3xl font-bold">
                            <h1 className="text-gray-800 dark:text-white">Hi, I'm</h1>
                            <span className="text-blue-600">Vikash</span>
                            <span className="text-gray-800 dark:text-white">-</span>
                            <ReactTyped
                                className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                                strings={["Full Stack Developer"]}
                                typeSpeed={60}
                                backSpeed={40}
                                loop={true}
                                cursorChar="|"
                            />
                        </div>
                    </div>


                    {/* Description */}
                    <div className="animate-fade-in-up animation-delay-400">
                        <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                            I am a passionate developer with expertise in {" "}
                            <span className="font-bold text-blue-600 dark:text-blue-400">PHP, Laravel, React, Node.js, Next.js, MySQL, and MSSQL</span>.
                            I specialize in building dynamic, responsive applications with exceptional performance and user experience.
                        </p>

                        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-lg">
                            <p className="font-bold text-red-700 dark:text-red-300 text-sm md:text-base">
                                💻 Skilled in back-end systems, RESTful APIs, and scalable solutions using Laravel/CI.
                            </p>
                        </div>

                        <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                            I follow modern development practices including version control, testing, and secure data management.
                            Passionate about continuous learning and delivering innovative solutions that make a difference.
                        </p>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="animate-fade-in-up animation-delay-600">
                        <div className="flex flex-wrap gap-3 mt-6">
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-700">
                                Laravel
                            </span>
                            <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-medium border border-cyan-200 dark:border-cyan-700">
                                React.js
                            </span>
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium border border-green-200 dark:border-green-700">
                                Node.js
                            </span>
                            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium border border-purple-200 dark:border-purple-700">
                                Next.js
                            </span>
                            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium border border-orange-200 dark:border-orange-700">
                                MySQL
                            </span>
                        </div>
                    </div>

                    {/* Social + Tech Icons */}


                </div>

                {/* Right Section - Image */}
                <div className="md:w-1/2 flex justify-center order-1 md:order-2">
                    <div className="relative group">
                        {/* Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 opacity-30 group-hover:opacity-50 animate-pulse"></div>

                        {/* Profile Image */}
                        <img
                            src={pic}
                            className="relative rounded-full w-74 h-74 md:w-96 md:h-96 object-cover shadow-2xl border-4 border-white dark:border-gray-800 transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-2 z-10"
                            alt="Vikash Chaudhary - Full Stack Developer"
                        />


                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="mt-12 md:mt-16 animate-fade-in">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
            </div>

            {/* Custom CSS for Animations */}
            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                .animation-delay-200 {
                    animation-delay: 0.2s;
                    opacity: 0;
                }
                .animation-delay-400 {
                    animation-delay: 0.4s;
                    opacity: 0;
                }
                .animation-delay-600 {
                    animation-delay: 0.6s;
                    opacity: 0;
                }
                .animation-delay-800 {
                    animation-delay: 0.8s;
                    opacity: 0;
                }
                .animation-delay-1000 {
                    animation-delay: 1s;
                    opacity: 0;
                }
                .text-gradient {
                    background-size: 200% 200%;
                    animation: gradient-shift 3s ease infinite;
                }
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </section>
    )
}