import React from 'react';

export default function Experience() {
  return (
    <section
      id="EXPERIENCE"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-8"
    >
      {/* Section Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 border-l-4 border-blue-500 pl-3 md:pl-4">
        Experience
      </h1>

      {/* Intro Card */}
      <div className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm mb-6">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          I am currently working at a reputable{" "}
          <strong className="text-red-600">INextErp Solution Pvt Ltd</strong> where I contribute to various software development projects.
          I specialize in web development, working with technologies such as PHP, JavaScript, React, and Laravel.
          My role involves collaborating with cross-functional teams to create robust and scalable applications.
          With a focus on improving user experience and optimizing performance, I am constantly learning and applying new technologies.
          My passion for problem-solving drives me to deliver innovative solutions while working in an agile environment.
        </p>
      </div>

      {/* Experience Points */}
      <ul className="space-y-3">
        <li className="bg-white p-4 md:p-5 rounded-lg shadow-sm border-l-4 border-blue-400 text-gray-700 hover:bg-blue-50 transition-all duration-200 cursor-pointer">
          Collaborating with developers, designers, and stakeholders
        </li>
        <li className="bg-white p-4 md:p-5 rounded-lg shadow-sm border-l-4 border-blue-400 text-gray-700 hover:bg-blue-50 transition-all duration-200 cursor-pointer">
          Developing and maintaining web applications
        </li>
        <li className="bg-white p-4 md:p-5 rounded-lg shadow-sm border-l-4 border-blue-400 text-gray-700 hover:bg-blue-50 transition-all duration-200 cursor-pointer">
          Optimizing website performance and scalability
        </li>
        <li className="bg-white p-4 md:p-5 rounded-lg shadow-sm border-l-4 border-blue-400 text-gray-700 hover:bg-blue-50 transition-all duration-200 cursor-pointer">
          Learning and integrating new technologies into projects
        </li>
        <li className="bg-white p-4 md:p-5 rounded-lg shadow-sm border-l-4 border-blue-400 text-gray-700 hover:bg-blue-50 transition-all duration-200 cursor-pointer">
          Ensuring high-quality standards through testing and debugging
        </li>
      </ul>

      <br />
      <hr className="border-gray-300" />
    </section>
  );
}
