import React from 'react'
import { assets } from '../assets/assets'
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='px-5 sm:px-10 md:px-20 lg:px-40'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Forever Store - Fashion that fits your lifestyle. Quality products at affordable prices.
          </p>

          <div className='flex gap-3 mt-5 text-gray-600 text-lg'>
            <a href='https://instagram.com' target='_blank'><FaInstagram /></a>
            <a href='https://youtube.com' target='_blank'><FaYoutube /></a>
            <a href='https://facebook.com' target='_blank'><FaFacebookF /></a>
            <a href='https://twitter.com' target='_blank'><FaTwitter /></a>
            <a href='https://linkedin.com' target='_blank'><FaLinkedinIn /></a>
          </div>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91 8888223344</li>
            <li>foreveryou@gmail.com</li>
            <li>www.foreverstore.com</li>
          </ul>
        </div>

      </div>

      <hr />
      <p className='py-5 text-sm text-center'>© 2025 Forever Store - All Rights Reserved</p>
    </div>
  )
}

export default Footer
