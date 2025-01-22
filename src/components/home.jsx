import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped,Typed } from "react-typed";
import pic from "../../public/new.jpg"; 
import { FaHtml5 } from "react-icons/fa";

export default function home() {
    return (
        <div name="HOME" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-4'>
            <div className='flex flex-col md:flex-row '>
                <div className='md:w-1/2  md:mt-12 space-y-2 order-2 md:order-1'>
                    <span className='text-xl'>Welcome In My Feed</span>
                    <div className='flex space-x-1 text-2xl md:text-4xl'>
                        <h1>Hello I'm a </h1>
                        {/* <span className='text-red-700 font-bold'>  Developer</span> */}
                        <ReactTyped
                            className='text-green-700 font-bold'
                            strings={["Developer",'Programmer','Coder']}
                            typeSpeed={50}
                            loop={true}
                            />

                    </div>
                    <br />
                    <span className='text-sm md:text-md  text-align: justify;
                        text-justify: inter-word;'>I am a skilled developer with extensive experience in PHP,
                         Laravel, React, and various other technologies. I have a strong foundation in building dynamic,
                          responsive web applications, with a focus on performance and user experience.
                          <span className='font-bold text-red-500'> In PHP and Laravel, I excel at creating robust 
                            back-end systems, RESTful APIs, and scalable applications.</span> With React, I have built
                             interactive, high-performance front-end interfaces. I am also proficient in modern development
                              practices like version control, testing, and <span className='font-bold text-red-700'>Laravel/CI 
                                </span>. My passion for continuous learning and problem-solving drives me to stay updated 
                                with the latest tech trends, ensuring the delivery of innovative solutions.
                    </span>
                    <br />
                    {/* social media icons */}
                   <div className='flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0'>
                        <div className='space-y-2 mt-10'>
                                <h1 className='font-bold text-center text-red-800'>Available on</h1>
                                <ul className='flex space-x-4'>
                                    <li><a href='https://www.facebook.com/vikashchaudhary.vikashchaudhary.790693' target='_blank'><FaFacebook className='text-2xl cursor-pointer'/></a></li>
                                    <li><a href='' target='_blank'><FaInstagramSquare className='text-2xl cursor-pointer'/></a></li>
                                    <li><a href='https://www.linkedin.com/in/vikash-chaudhary-3b3926285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'> <FaLinkedin className='text-2xl cursor-pointer'/></a></li>
                                    <li><a href='' target='_blank'><FaTelegram className='text-2xl cursor-pointer'/></a></li>
                                </ul>
                            </div>
                            <div >
                                <h1 className='font-bold mt-10 text-red-800 text-center'>Currently Working On</h1>
                                <ul className='flex space-x-4'>
                                    <li>{}<SiPhp className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
                                    <li>{}<FaLaravel className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
                                    <li>{}<FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
                                    <li>{}<FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
                                    <li>{}<FaHtml5 className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
                                </ul>
                            </div>
                        
                    </div>
                </div>
                <div className='md:w-1/2 md:ml-20 md:mt-10 order-1 '>
                <img src={pic} className='rounded-full w-[500px] md:h-[430] shadow-2xl' alt="" />
                </div>
            </div>
            <br />
            <br />
            <hr />
        </div>
    )
}
