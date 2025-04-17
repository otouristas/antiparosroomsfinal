import React from 'react';
import { FaCheck } from 'react-icons/fa';

const OwnerSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Owner information */}
          <div>
            <h2 className="section-title">Meet Your Host</h2>
            
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full bg-[#e8c39e] mr-4 relative overflow-hidden">
                {/* Placeholder for owner photo - replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-[#1a5f7a] text-sm">
                  Owner Photo
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#1a5f7a]">Fotios Koukakis</h3>
                <p className="text-[#57534e]">Apartment Manager</p>
              </div>
            </div>
            
            <div className="bg-[#f9f5eb] p-6 rounded-md mb-8 border-l-4 border-[#e8c39e]">
              <p className="text-[#333333] italic">
                &ldquo;Welcome to Antiparos Rooms! We&apos;re a family-run business offering authentic Cycladic hospitality. Let us make your stay unforgettable.&rdquo;
              </p>
            </div>
            
            <p className="text-[#333333]">
              Our family has been welcoming guests to Antiparos for over 20 years. We take pride in providing comfortable accommodations and personalized service to ensure you have a memorable island experience.
            </p>
          </div>
          
          {/* Highlights */}
          <div className="bg-[#f9f5eb] p-8 rounded-md shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-[#1a5f7a]">Highlights</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#1a5f7a] rounded-full p-2 text-white mr-4 flex-shrink-0">
                  <FaCheck />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-[#1a5f7a]">Smart Key</h4>
                  <p className="text-[#57534e]">Easy Key Receival</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#1a5f7a] rounded-full p-2 text-white mr-4 flex-shrink-0">
                  <FaCheck />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-[#1a5f7a]">Store Luggage</h4>
                  <p className="text-[#57534e]">Your Luggage is Safe</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#1a5f7a] rounded-full p-2 text-white mr-4 flex-shrink-0">
                  <FaCheck />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-[#1a5f7a]">Disinfection</h4>
                  <p className="text-[#57534e]">Always after Check-out</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#1a5f7a] rounded-full p-2 text-white mr-4 flex-shrink-0">
                  <FaCheck />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-[#1a5f7a]">Local Recommendations</h4>
                  <p className="text-[#57534e]">Insider tips for the best experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
