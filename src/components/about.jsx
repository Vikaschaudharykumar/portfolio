import React from 'react';

const About = () => {
  return (
    <section id="ABOUT" className='max-w-screen-2xl container mx-auto px-4 md:px-20 py-4'>
      <h1 className='text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800 border-l-4 border-blue-500 pl-3 md:pl-4'>
        About
      </h1>
      
      <div className='bg-gray-50 rounded-lg p-4 md:p-6 shadow-sm mb-6'>
        <p className='text-gray-700 text-base md:text-lg leading-relaxed'>
          "Hello, my name is <span className='font-semibold text-blue-600'>Vikas Kumar</span>, and I am from <span className='font-semibold'>Ghaziabad</span>. I have completed my <span className='font-semibold'>Polytechnic</span> studies and am currently pursuing my <span className='font-semibold'>Bachelor's in Technology (B.Tech)</span>. I am passionate about learning new technologies and growing my skills in the field of engineering and development."
        </p>
      </div>
      
      <h2 className='text-blue-500 font-bold text-xl md:text-2xl mb-4 flex items-center'>
        <span className='w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full mr-2'></span>
        [Education & Training]
      </h2>
      
      <ul className="space-y-4 md:space-y-6">
        <li className='bg-white p-4 md:p-5 rounded-lg shadow-sm border-l-4 border-yellow-400'>
          <strong className='text-yellow-600 font-bold text-base md:text-lg'>10th and 12th from JS Inter College, Aligarh :</strong>
          <br className="hidden md:block" />
          <p className='text-gray-700 text-sm md:text-base mt-2'>
            Completing your 10th and 12th exams from JS Inter College means you have a solid foundation, which is typically required to pursue higher education like a Polytechnic or B.Tech. Depending on your stream in 12th, your options will differ:
          </p>
          <ul className="list-disc pl-4 md:pl-6 mt-2 space-y-1">
            <li className='text-gray-700 text-sm md:text-base'>
              If you completed <strong className='text-green-600'>Science with Mathematics</strong> in 12th, you are eligible for engineering-related courses like Polytechnic and B.Tech.
            </li>
          </ul>
        </li>

        <li className='bg-white p-4 md:p-5 rounded-lg shadow-sm border-l-4 border-yellow-400'>
          <strong className='text-yellow-600 font-bold text-base md:text-lg'>Polytechnic (Completed in 2024) :</strong>
          <br className="hidden md:block" />
          <p className='text-gray-700 text-sm md:text-base mt-2'>
            Polytechnic courses typically offer practical skills in technical fields such as engineering, computer science, and electronics. These are generally 3-year diploma programs that give foundational knowledge in engineering. After completing the Polytechnic, you might get a diploma, which could help you gain entry-level jobs or bridge the gap to a full engineering degree like B.Tech.
          </p>
        </li>

        <li className='bg-white p-4 md:p-5 rounded-lg shadow-sm border-l-4 border-yellow-400'>
          <strong className='text-yellow-600 font-bold text-base md:text-lg'>Full Stack Development Course from Ducat :</strong>
          <br className="hidden md:block" />
          <p className='text-gray-700 text-sm md:text-base mt-2'>
            Full Stack Development refers to the skill of handling both front-end (user interface) and back-end (server-side) development of web applications. This program can teach skills like:
          </p>
          <ul className="list-disc pl-4 md:pl-6 mt-2 space-y-1">
            <li className='text-gray-700 text-sm md:text-base'><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js</li>
            <li className='text-gray-700 text-sm md:text-base'><strong>Backend:</strong> Node.js, PHP, databases (MySQL)</li>
            <li className='text-gray-700 text-sm md:text-base'><strong>Version control</strong> (Git), Deployment, and Cloud services</li>
          </ul>
          <p className='text-gray-700 text-sm md:text-base mt-2'>
            This course is aimed at both beginners and people looking to enhance their coding skills, helping you build real-world projects and prepare for a career in software development.
          </p>
        </li>

        <li className='bg-white p-4 md:p-5 rounded-lg shadow-sm border-l-4 border-yellow-400'>
          <strong className='text-yellow-600 font-bold text-base md:text-lg'>Pursuing B.Tech (CS) :</strong>
          <br className="hidden md:block" />
          <p className='text-gray-700 text-sm md:text-base mt-2'>
            A B.Tech (Bachelor of Technology) is a 4-year undergraduate degree in engineering or technology. It provides in-depth knowledge of subjects related to your chosen field <span className='font-semibold text-red-600'>Computer Science</span>. If you've completed your Polytechnic, you can go for <strong>Lateral Entry</strong> to the 2nd year of a B.Tech program, saving one year compared to the standard route.
          </p>
        </li>
      </ul>

      <hr className='border-gray-300 mt-6 md:mt-8' />
    </section>
  );
};

export default About;