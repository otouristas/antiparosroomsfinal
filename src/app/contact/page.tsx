import React from 'react';
import type { Metadata } from 'next';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact Us | Antiparos Rooms',
  description: 'Contact Antiparos Rooms for bookings, information, and special requests. We offer personalized service to make your stay unforgettable.',
  keywords: 'Antiparos Rooms contact, Antiparos accommodation booking, Antiparos hotel contact, Antiparos apartments contact',
  alternates: {
    canonical: 'https://antiparosrooms.com/contact',
  },
};

const ContactPage = () => {
  return (
    <>
      {/* Hero section */}
      <section className="relative h-[40vh] bg-blue-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('/images/contact-hero.jpg')", 
            filter: "brightness(0.7)"
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl text-gray-100">
              Get in touch with Antiparos Rooms for bookings, information, and special requests
            </p>
          </div>
        </div>
      </section>

      {/* Contact information and form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h3 className="text-2xl font-semibold mb-6">Reservation</h3>
                
                <div className="space-y-4 mb-8">
                  <a 
                    href="tel:+306980151068" 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <FaPhone className="mr-3 text-blue-600" />
                    <span>+30 6980151068</span>
                  </a>
                  
                  <a 
                    href="tel:+306944950094" 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <FaPhone className="mr-3 text-blue-600" />
                    <span>+30 6944950094</span>
                  </a>
                </div>
                
                <h3 className="text-2xl font-semibold mb-6">Information</h3>
                
                <a 
                  href="mailto:info@antiparosrooms.com" 
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors mb-8"
                >
                  <FaEnvelope className="mr-3 text-blue-600" />
                  <span>info@antiparosrooms.com</span>
                </a>
                
                <h3 className="text-2xl font-semibold mb-6">Location</h3>
                
                <div className="flex items-start text-gray-700">
                  <FaMapMarkerAlt className="mr-3 mt-1 text-blue-600" />
                  <address className="not-italic">
                    Central Road<br />
                    Antiparos 84007<br />
                    Cyclades, Greece
                  </address>
                </div>
              </div>
              
              {/* Social media */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={24} />
                  </a>
                  
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name*
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address*
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject*
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message*
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                  
                  <p className="text-sm text-gray-500">
                    * Required fields
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
          
          <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.7072456095366!2d25.079555276281174!3d37.04137197125307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149865449725633b%3A0x9dd46819dc588596!2sAGGELOS%20Apartment%20With%20View%20Antiparos%20840%2007!5e0!3m2!1sen!2sgr!4v1713350000000!5m2!1sen!2sgr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="AGGELOS Apartment With View Antiparos Location"
              aria-label="Google Maps showing location of AGGELOS Apartment With View in Antiparos"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
