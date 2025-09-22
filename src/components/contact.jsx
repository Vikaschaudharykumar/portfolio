import React, { useState } from "react";

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

      setResponseMessage("Form submitted successfully!");
      setFormData({ fullName: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      setResponseMessage("There was an error while submitting the form.");
    }

    setIsSubmitting(false);
  };
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-4">
      <h1 className="text-2xl font-bold mb-3 text-center text-red-700">Contact Me</h1>
      <span className="text-md mb-4 block text-center">
        Please fill out the form below to contact me
      </span>

      {responseMessage && (
        <div className="text-center mb-4 text-lg text-green-700">{responseMessage}</div>
      )}

      <div className="flex justify-center">
        <div className="w-full max-w-md p-6 bg-gray-100 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-2 p-3 border-2 border-gray-300 rounded-md"
                placeholder="Your Full Name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 p-3 border-2 border-gray-300 rounded-md"
                placeholder="Your Email Address"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 p-3 border-2 border-gray-300 rounded-md"
                placeholder="Your Message"
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 ${isSubmitting ? "bg-gray-400" : "bg-blue-500"} text-white font-semibold rounded-md`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
