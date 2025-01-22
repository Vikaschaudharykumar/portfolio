import React from 'react';

export default function About() {
  return (
    <div name="ABOUT" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-4'>
      <h1 className='text-2xl font-bold mb-3'>About</h1>
      <p>
        "Hello, my name is Vikas Kumar, and I am from Ghaziabad. I have completed my Polytechnic studies and am currently pursuing my Bachelor's in Technology (B.Tech). I am passionate about learning new technologies and growing my skills in the field of engineering and development."
      </p>

      <br />
      <h2 className='text-green-500 font-semibold text-xl'>[Education & Training]</h2> <br />
      <ul className="list-disc pl-5 space-y-3">
        <li>
            <strong className='text-yellow-500'>10th and 12th from JS Inter College, Aligarh :</strong><br />
            Completing your 10th and 12th exams from JS Inter College means you have a solid foundation, which is typically required to pursue higher education like a Polytechnic or B.Tech. Depending on your stream in 12th, your options will differ:
            <ul className="list-inside pl-4">
            <li>If you completed <strong>Science with Mathematics</strong> in 12th, you are eligible for engineering-related courses like Polytechnic and B.Tech.</li>
            </ul>
        </li>
        <li>
        <strong className='text-yellow-500'>Polytechnic (Completed in 2024) :</strong><br />
            Polytechnic courses typically offer practical skills in technical fields such as engineering, computer science, and electronics. These are generally 3-year diploma programs that give foundational knowledge in engineering. After completing the Polytechnic, you might get a diploma, which could help you gain entry-level jobs or bridge the gap to a full engineering degree like B.Tech.
        </li>
        <li>
        <strong className='text-yellow-500'>Full Stack Development Course from Ducat :</strong><br />
            Full Stack Development refers to the skill of handling both front-end (user interface) and back-end (server-side) development of web applications. This program can teach skills like:
            <ul className="list-inside pl-4">
            <li>Frontend: HTML, CSS, JavaScript, React.js</li>
            <li>Backend: Node.js, PHP, databases (MySQL)</li>
            <li>Version control (Git), Deployment, and Cloud services</li>
            </ul>
            This course is aimed at both beginners and people looking to enhance their coding skills, helping you build real-world projects and prepare for a career in software development.
        </li>
        <li>
        <strong className='text-yellow-500'>Pursuing B.Tech (CS) :</strong><br />
            A B.Tech (Bachelor of Technology) is a 4-year undergraduate degree in engineering or technology. It provides in-depth knowledge of subjects related to your chosen field <span className='text-red-600'>Computer Science</span>. If you've completed your Polytechnic, you can go for **Lateral Entry** to the 2nd year of a B.Tech program, saving one year compared to the standard route.
        </li>
    </ul>
    <br />
<hr />
    </div>
  );
}
