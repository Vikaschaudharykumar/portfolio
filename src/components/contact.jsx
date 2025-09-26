import React, { useState } from "react";
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzdSPS-mA1FyGHEon-qeCoAUsJkZl6EXIwvJxE1LXC4n7GhF2Oo2xwBmnrdbJzANb3V/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: "no-cors",
      });

      setResponseMessage("✅ Message sent successfully! I'll get back to you soon.");
      setFormData({ fullName: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage("❌ There was an error. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="CONTACTS" className="max-w-screen-2xl mx-auto px-6 md:px-16 lg:px-24 py-2 md:py-16">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Have a project in mind or want to collaborate? Feel free to reach out - I'd love to hear from you!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Contact Information */}
        <div className="lg:w-2/5 space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Let's Talk</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaEnvelope className="text-blue-600 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-800">vk643478@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaUser className="text-green-600 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Availability</p>
                  <p className="font-medium text-gray-800">Open for projects</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FaComment className="text-purple-600 text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Response Time</p>
                  <p className="font-medium text-gray-800">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-sm text-yellow-800">
              💡 Please provide detailed information about your project for a better response.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-3/5 w-full">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
            
            {responseMessage && (
              <div className={`p-4 rounded-lg mb-6 text-center font-medium ${
                responseMessage.includes("✅") 
                  ? "bg-green-100 text-green-700 border border-green-200" 
                  : "bg-red-100 text-red-700 border border-red-200"
              }`}>
                {responseMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="flex items-center gap-2 font-medium text-gray-700">
                  <FaUser className="text-blue-600" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center gap-2 font-medium text-gray-700">
                  <FaEnvelope className="text-blue-600" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center gap-2 font-medium text-gray-700">
                  <FaComment className="text-blue-600" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  rows="3"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1"
                } text-white shadow-lg`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}