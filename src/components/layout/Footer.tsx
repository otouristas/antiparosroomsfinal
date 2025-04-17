import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTripadvisor } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and about */}
          <div>
            <div className="mb-6 relative h-16 w-48">
              <Image 
                src="/images/logo/antiparos-rooms-logo.png" 
                alt="Antiparos Rooms Logo" 
                fill 
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} 
              />
            </div>
            <p className="text-neutral-300 mb-6">
              Experience authentic Cycladic hospitality in our sea view accommodations on the beautiful island of Antiparos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-blue w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-blue-dark transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-blue w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-blue-dark transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://tripadvisor.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-blue w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-blue-dark transition-colors"
                aria-label="TripAdvisor"
              >
                <FaTripadvisor />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-neutral-300 hover:text-white transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/aggelos-rent-a-car-antiparos-paros" className="text-neutral-300 hover:text-white transition-colors">
                  Rentals
                </Link>
              </li>
              <li>
                <Link href="/antiparos-transfers" className="text-neutral-300 hover:text-white transition-colors">
                  Transfers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary-blue mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-300">
                  Antiparos 840 07, Cyclades, Greece
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary-blue mr-3 flex-shrink-0" />
                <a href="tel:+306944585818" className="text-neutral-300 hover:text-white transition-colors">
                  +30 694 458 5818
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary-blue mr-3 flex-shrink-0" />
                <a href="mailto:info@antiparosrooms.com" className="text-neutral-300 hover:text-white transition-colors">
                  info@antiparosrooms.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-medium mb-6">Newsletter</h3>
            <p className="text-neutral-300 mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-primary-blue hover:bg-primary-blue-dark text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-400 text-sm mb-4 md:mb-0">
            {currentYear} Antiparos Rooms. All rights reserved.
          </div>
          <div className="text-neutral-400 text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
