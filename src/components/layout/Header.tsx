"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="relative h-12 w-40">
              <Image 
                src="/images/logo/antiparos-rooms-logo.png" 
                alt="Antiparos Rooms Logo" 
                fill 
                style={{ objectFit: 'contain' }}
                className={isScrolled ? 'brightness-100' : 'brightness-0 invert'}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/rooms" className="nav-link">Rooms</Link>
            <Link href="/aggelos-rent-a-car-antiparos-paros" className="nav-link">Rentals</Link>
            <Link href="/antiparos-transfers" className="nav-link">Transfers</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/contact" className="btn-primary">
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-blue focus:outline-none z-10" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="container-custom pt-24 pb-8">
          <nav className="flex flex-col space-y-6">
            <Link 
              href="/" 
              className="nav-link text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/rooms" 
              className="nav-link text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rooms
            </Link>
            <Link 
              href="/aggelos-rent-a-car-antiparos-paros" 
              className="nav-link text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rentals
            </Link>
            <Link 
              href="/antiparos-transfers" 
              className="nav-link text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Transfers
            </Link>
            <Link 
              href="/contact" 
              className="nav-link text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-6 border-t border-neutral-200">
              <div className="flex items-center mb-4">
                <FaPhone className="text-primary-blue mr-3" />
                <a href="tel:+306944585818" className="text-neutral-800 hover:text-primary-blue">+30 694 458 5818</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-primary-blue mr-3" />
                <a href="mailto:info@antiparosrooms.com" className="text-neutral-800 hover:text-primary-blue">info@antiparosrooms.com</a>
              </div>
            </div>
            
            <Link 
              href="/contact" 
              className="btn-primary w-full text-center mt-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
