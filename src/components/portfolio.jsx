import React from 'react'
import php from "../../public/php.png"
import html from "../../public/html.jpg"
import react_logo from "../../public/react.png"
import js from "../../public/js.png"

export default function portfolio() {
    const cardimage = [
        {
            id: 1,
            logo: php,
            name: "PHP"
        },
        {
            id: 2,
            logo: html,
            name: "HTML"
        },
        {
            id: 3,
            logo: react_logo,
            name: "React"
        },
        {
            id: 4,
            logo: js,
            name: "JavaScript"
        }
    ];

    return (
        <div name="PORTFOLIO" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-4'>
            <div>
                <h1 className='text-2xl font-bold mb-3'>Portfolio</h1>
                {/* Flex or Grid layout for responsive card display */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        cardimage.map(({ id, logo, name }) => (
                            <div className='text-center p-4 border-[2px] rounded-lg shadow-lg' key={id}>
                                {/* Centering the image using flexbox */}
                                <div className="flex justify-center items-center mb-4">
                                    <img src={logo} className='w-[150px] h-[100px] p-1 rounded-full border-[2px]' alt={name} />
                                </div>
                                <div>
                                    <div className="font-bold">{name}</div>
                                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, unde.</p>
                                </div>
                                <div className="mt-4 space-x-2 flex justify-center">
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 hover:scale-110 transition-all text-sm">
                                        Video
                                    </button>

                                    <button className="px-4 py-2 bg-green-500 text-white hover:bg-green-700 hover:scale-110 transition-all text-sm rounded">
                                        Code
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
