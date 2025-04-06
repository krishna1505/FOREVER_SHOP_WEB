import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-12">
      {/* Page Title */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Contact Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left - Contact Image */}
        <img 
          className="w-full md:w-[50%] rounded-lg shadow-lg" 
          src={assets.contact_img} 
          alt="Contact Us" 
        />

        {/* Right - Contact Form */}
        <div className="flex flex-col w-full md:w-[50%] bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Get in Touch
          </h2>
          
          <form className="flex flex-col gap-4">
            {/* Name */}
            <input 
              type="text" 
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" 
              placeholder="Your Name" 
              required 
            />

            {/* Email */}
            <input 
              type="email" 
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" 
              placeholder="Your Email" 
              required 
            />

            {/* Message */}
            <textarea 
              rows="4" 
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" 
              placeholder="Your Message" 
              required
            ></textarea>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="bg-black text-white py-2 px-6 rounded-md text-lg font-medium hover:bg-gray-800 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Newsletter Box - Added Proper Padding */}
      <div className="pt-20">
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default Contact;
