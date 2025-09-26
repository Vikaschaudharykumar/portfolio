import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPhp,
    FaLaravel,
    FaGitAlt,
    FaGithub,
    FaDatabase,
    FaServer,
    FaCode,
    FaCogs,
    FaCube,
} from "react-icons/fa";

export default function PortfolioAndSkills() {
    const cardData = [
        {
            id: 1,
            name: "PHP",
            icon: <FaPhp className="text-blue-600 text-5xl" />,
            desc: "Experienced in backend development, APIs, and dynamic web applications using PHP.",
        },
        {
            id: 2,
            name: "HTML5",
            icon: <FaHtml5 className="text-orange-500 text-5xl" />,
            desc: "Strong knowledge of semantic HTML5 for building accessible and SEO-friendly websites.",
        },
        {
            id: 3,
            name: "React.js",
            icon: <FaReact className="text-blue-400 text-5xl" />,
            desc: "Building interactive UIs, hooks, and state management for modern SPAs.",
        },
        {
            id: 4,
            name: "JavaScript",
            icon: <FaJs className="text-yellow-400 text-5xl" />,
            desc: "Proficient in ES6+, DOM manipulation, async programming, and frontend logic.",
        },
        {
            id: 6,
            name: "Node.js",
            icon: <FaNodeJs className="text-green-600 text-5xl" />,
            desc: "Creating scalable server-side applications and REST APIs using Node.js.",
        },
        {
            id: 7,
            name: "Laravel",
            icon: <FaLaravel className="text-red-600 text-5xl" />,
            desc: "Expertise in MVC architecture, authentication, and backend solutions with Laravel.",
        },
        {
            id: 12,
            name: "GitLab",
            icon: <FaGitAlt className="text-orange-600 text-5xl" />,
            desc: "Version control, CI/CD pipelines, and collaborative project management with GitLab.",
        },
        {
            id: 13,
            name: "GitHub",
            icon: <FaGithub className="text-black text-5xl" />,
            desc: "Managing repositories, branching strategies, and team collaboration on GitHub.",
        },
        {
            id: 14,
            name: "VS Code",
            icon: <FaCode className="text-gray-700 text-5xl" />,
            desc: "Daily driver IDE with extensions, debugging, and productivity optimization.",
        },
        {
            id: 17,
            name: "MVC Architecture",
            icon: <FaCube className="text-gray-700 text-5xl" />,
            desc: "Designing applications with proper separation of concerns using MVC.",
        },
        {
            id: 18,
            name: "Admin Panel",
            icon: <FaCogs className="text-gray-700 text-5xl" />,
            desc: "Building scalable and responsive admin dashboards with role management.",
        },
        {
            id: 19,
            name: "Responsive Design",
            icon: <FaReact className="text-blue-400 text-5xl" />,
            desc: "Crafting mobile-friendly, adaptive layouts with modern CSS and frameworks.",
        },
    ];

    return (
        <section
            id="PORTFOLIO"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-4"
        >
            <h1 className='text-2xl md:text-3xl font-bold mb-4 md:mb-2 text-gray-800 border-l-4 border-blue-500 pl-3 md:pl-4'>
                Portfolio Skills
            </h1>

            {/* Intro Card */}
            <div className='bg-gray-50 rounded-lg p-4 md:p-6 shadow-sm mb-6'>
                <p className='text-gray-700 text-base md:text-lg leading-relaxed'>
                    Here’s a showcase of the technologies and tools I work with daily.
                    These skills allow me to build scalable, responsive, and dynamic web applications.
                    Hover over each skill card to see a short description of my experience with it.
                </p>
            </div>

            {/* Portfolio Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-12">
                {cardData.map(({ id, name, icon, desc }) => (
                    <div
                        key={id}
                        className="relative group text-center p-6 border-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                        {/* Default Content */}
                        <div className="flex flex-col items-center justify-center h-full transition-opacity duration-300 group-hover:opacity-0">
                            <div className="mb-4">{icon}</div>
                            <div className="font-bold text-lg">{name}</div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-sm">{desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}
