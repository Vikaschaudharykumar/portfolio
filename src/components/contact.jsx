import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to server)
    console.log(formData);
  };

  return (
    <div name="CONTACTS" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-4'>
      <h1 className='text-2xl font-bold mb-3 text-center text-red-700'>Contact Me </h1>
      <span className='text-md mb-4 block text-center'>
        Please fill out the form below to contact me
      </span>

      {/* Centered Contact Form */}
      <div className='flex justify-center'>
        <div className='w-full max-w-md p-6 bg-gray-100 rounded-lg shadow-lg'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            {/* Full Name */}
            <div className='flex flex-col'>
              <label htmlFor='fullName' className='font-semibold text-gray-700'>
                Full Name
              </label>
              <input
                type='text'
                id='fullName'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                className='mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Your Full Name'
                required
              />
            </div>

            {/* Email Address */}
            <div className='flex flex-col'>
              <label htmlFor='email' className='font-semibold text-gray-700'>
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Your Email Address'
                required
              />
            </div>

            {/* Message */}
            <div className='flex flex-col'>
              <label htmlFor='message' className='font-semibold text-gray-700'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='mt-2 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Your Message'
                rows='5'
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
