import React from 'react';
import Link from 'next/link';
import { FaSun, FaUmbrellaBeach, FaSwimmer } from 'react-icons/fa';

const SummerOffersSection = () => {
  return (
    <section className="py-16 bg-[#f9f5eb]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Summer Offers</h2>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg mb-6 text-[#333333]">
            Experience the ultimate summer escape with our exclusive offers for Antiparos and Paros! Dive into the crystal-clear waters, soak up the Mediterranean sun, and indulge in the finest hospitality these islands have to offer.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 my-10">
            <div className="flex items-center">
              <div className="bg-[#1a5f7a] p-3 rounded-full text-white mr-3">
                <FaSun size={24} />
              </div>
              <span className="text-[#1a5f7a] font-medium">Sunny Days</span>
            </div>
            
            <div className="flex items-center">
              <div className="bg-[#1a5f7a] p-3 rounded-full text-white mr-3">
                <FaUmbrellaBeach size={24} />
              </div>
              <span className="text-[#1a5f7a] font-medium">Beach Access</span>
            </div>
            
            <div className="flex items-center">
              <div className="bg-[#1a5f7a] p-3 rounded-full text-white mr-3">
                <FaSwimmer size={24} />
              </div>
              <span className="text-[#1a5f7a] font-medium">Water Activities</span>
            </div>
          </div>
          
          <p className="text-[#333333]">
            Book your stay between June and September to enjoy special rates and complimentary extras. Don&apos;t miss out on our early bird discounts for reservations made before April!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card">
            <h3 className="text-xl font-semibold mb-3 text-[#1a5f7a]">Early Summer Special</h3>
            <p className="text-[#57534e] mb-4">
              Book your stay in June and enjoy a 15% discount on all room types. Perfect timing to experience Antiparos before the peak season crowds!
            </p>
            <div className="text-[#e8c39e] font-bold text-xl mb-4">15% OFF</div>
            <Link 
              href="/contact" 
              className="btn-primary inline-block"
            >
              Book Now
            </Link>
          </div>
          
          <div className="feature-card">
            <h3 className="text-xl font-semibold mb-3 text-[#1a5f7a]">Family Package</h3>
            <p className="text-[#57534e] mb-4">
              Families with children under 12 receive special amenities and a complimentary welcome basket with local treats.
            </p>
            <div className="text-[#e8c39e] font-bold text-xl mb-4">Free Extras</div>
            <Link 
              href="/contact" 
              className="btn-primary inline-block"
            >
              Book Now
            </Link>
          </div>
          
          <div className="feature-card">
            <h3 className="text-xl font-semibold mb-3 text-[#1a5f7a]">Extended Stay</h3>
            <p className="text-[#57534e] mb-4">
              Stay for 7 nights or more and receive a complimentary island tour, showing you the hidden gems of Antiparos.
            </p>
            <div className="text-[#e8c39e] font-bold text-xl mb-4">Free Tour</div>
            <Link 
              href="/contact" 
              className="btn-primary inline-block"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerOffersSection;
