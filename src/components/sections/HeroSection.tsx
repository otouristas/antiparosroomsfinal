import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-image.jpg" 
          alt="Antiparos Rooms - Sea view accommodations" 
          fill 
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="brightness-[0.85]"
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center container-custom">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-4 text-shadow">
            Experience the Magic of Antiparos
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl text-shadow">
            Discover our sea view accommodations in the heart of the Cyclades, where authentic Greek hospitality meets modern comfort.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/rooms" className="btn-primary">
              Explore Our Rooms
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
          
          {/* Feature highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-white text-lg font-medium mb-1">Prime Location</div>
              <div className="text-white/80 text-sm">Just steps from the beach</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-white text-lg font-medium mb-1">Sea Views</div>
              <div className="text-white/80 text-sm">Wake up to the Aegean</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-white text-lg font-medium mb-1">Authentic Experience</div>
              <div className="text-white/80 text-sm">Live like a local</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
