import React from 'react';
import { FaUtensils, FaUmbrellaBeach, FaMapMarkedAlt } from 'react-icons/fa';

const NearbyAttractionsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Nearby Attractions</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-[#333333] mb-10 text-center">
            Discover the culinary wonders and top attractions awaiting you in Antiparos! Treat your taste buds to the freshest seafood delicacies at local tavernas like Elia Kafenes, Captain Pipinos and Sifneiko. Don&apos;t miss the island&apos;s famous cave, pristine beaches, and charming Chora with its Venetian castle.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dining */}
            <div className="feature-card text-center">
              <div className="text-[#1a5f7a] text-4xl mb-4 flex justify-center">
                <FaUtensils />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-[#1a5f7a]">Local Dining</h3>
              
              <p className="text-[#57534e]">
                Savor authentic Greek cuisine at tavernas serving fresh seafood and local specialties. Try the octopus, fresh fish, and traditional mezedes.
              </p>
            </div>
            
            {/* Beaches */}
            <div className="feature-card text-center">
              <div className="text-[#1a5f7a] text-4xl mb-4 flex justify-center">
                <FaUmbrellaBeach />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-[#1a5f7a]">Beautiful Beaches</h3>
              
              <p className="text-[#57534e]">
                Relax on stunning beaches with crystal-clear waters. Soros, Agios Georgios, and Panagia are just a short distance from our accommodations.
              </p>
            </div>
            
            {/* Attractions */}
            <div className="feature-card text-center">
              <div className="text-[#1a5f7a] text-4xl mb-4 flex justify-center">
                <FaMapMarkedAlt />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-[#1a5f7a]">Must-See Sights</h3>
              
              <p className="text-[#57534e]">
                Explore the famous Antiparos Cave, wander through the charming streets of Chora, and visit the Venetian Castle dating back to the 15th century.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-[#f9f5eb] p-6 rounded-md border-l-4 border-[#e8c39e]">
            <h3 className="text-xl font-semibold mb-3 text-[#1a5f7a]">Local Tip</h3>
            <p className="text-[#333333] italic">
              &ldquo;For the best sunset views, head to Sifneiko Beach Bar in the evening. Order a cocktail and watch as the sun paints the sky in spectacular colors over the Aegean Sea.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyAttractionsSection;
