import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section title with keyword-rich heading for SEO */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Reservation</h3>
              
              <div className="space-y-4">
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
              
              <h3 className="text-2xl font-semibold mt-8 mb-6">Information</h3>
              
              <a 
                href="mailto:info@antiparosrooms.com" 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FaEnvelope className="mr-3 text-blue-600" />
                <span>info@antiparosrooms.com</span>
              </a>
              
              <div className="mt-8">
                <div className="flex items-start text-gray-700">
                  <FaMapMarkerAlt className="mr-3 mt-1 text-blue-600" />
                  <address className="not-italic">
                    Central Road<br />
                    Antiparos 84007<br />
                    Cyclades, Greece
                  </address>
                </div>
              </div>
            </div>
            
            {/* Connected services */}
            <div className="mt-8 bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Our Services</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium mb-2">Aggelos Rentals</h4>
                  <p className="text-gray-600 mb-3">
                    Car, Scooter, ATV, and Bicycle rentals in Antiparos and Paros
                  </p>
                  <a 
                    href="https://antiparosrentacar.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors"
                  >
                    Book Now
                  </a>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-2">Antiparos Transfers</h4>
                  <p className="text-gray-600 mb-3">
                    VIP luxury transfer services between Paros and Antiparos
                  </p>
                  <a 
                    href="https://antiparostransfer.gr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
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
                  Email Address
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
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
