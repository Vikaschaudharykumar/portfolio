import React from 'react';

export default function Experience() {
  return (
    <div name="EXPERIENCE" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-4'>
      <h1 className='text-2xl font-bold mb-3'>Experience</h1>
      <p className='text-sm md:text-md text-justify'>
        I am currently working at a reputable <strong className='text-red-600'>[ INextErp Solution Pvt ltd ]</strong> where I contribute to various software development projects. 
        I specialize in web development, working with technologies such as PHP, JavaScript, React, and Laravel. 
        My role involves collaborating with cross-functional teams to create robust and scalable applications. 
        With a focus on improving user experience and optimizing performance, I am constantly learning and applying new technologies. 
        My passion for problem-solving drives me to deliver innovative solutions while working in an agile environment.
      </p>
      
      <ul className='list-disc pl-5 mt-4 space-y-2'>
        <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Collaborating with developers, designers, and stakeholders</li>
        <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Developing and maintaining web applications</li>
        <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Optimizing website performance and scalability</li>
        <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Learning and integrating new technologies into projects</li>
        <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Ensuring high-quality standards through testing and debugging</li>
      </ul>
      <br />
      <hr />
    </div>
  );
}
