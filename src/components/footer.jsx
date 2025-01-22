import React from 'react'
import {FaFacebook,FaTwitch,FaInstagram,FaLinkedin} from "react-icons/fa6";

export default function footer() {
  return <>
    <hr />
    <footer>
        <div className='py-12'>
           <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-4'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-3'>
                    <FaFacebook size={20}/>
                    <FaTwitch size={20}/>
                    <FaInstagram size={20}/>
                    <FaLinkedin size={20}/>
                </div>
                <div className='mt-5 border-t border-gray-700 pt-8 flex-col items-center'>
                    <p>
                        &copy;2025 INextErp Solution-pvt-ltd                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                    </p>
                    <p> - Supportive Partner <strong className='text-red-700'>Er. Mohit.CH</strong> - </p>
                </div>                          
            </div>
           </div>               
        </div>
    </footer>                                                                                                                           
  </>
}
                                                                                                                                                            