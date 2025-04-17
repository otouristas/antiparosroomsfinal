import React from 'react';
import Link from 'next/link';

const RoomsSection = () => {
  return (
    <section id="rooms" className="py-16 bg-[#f9f5eb]">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">
            Discover the Best Antiparos and Paros Hotels and Apartment Rentals
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Content column */}
          <div className="space-y-6">
            <p className="text-lg text-[#333333]">
              Discover the best Antiparos and Paros hotels and apartment rentals against a backdrop of azure seas, golden sands, and captivating sunsets. Each moment spent here is a canvas waiting to be painted with memories, offering a picturesque backdrop for your unforgettable getaway.
            </p>
            
            <p className="text-lg text-[#333333]">
              Escape the ordinary with our Antiparos and Paros accommodations, providing a sanctuary where you can unwind, recharge, and immerse yourself in the islands&apos; serene atmosphere. From luxury villas to beach resorts, find your perfect haven for relaxation.
            </p>
            
            <p className="text-lg text-[#333333]">
              Experience unparalleled hospitality at our Antiparos and Paros establishment. Our dedicated team ensures your comfort and satisfaction, offering personalized attention to every detail of your stay.
            </p>
            
            <p className="text-lg text-[#333333]">
              Embark on a journey of exploration and adventure in Antiparos and Paros. Whether you&apos;re searching for budget hotels or seaside villas, these islands offer endless opportunities for leisurely strolls, thrilling dives, and culinary delights, catering to every traveler&apos;s taste and inclination.
            </p>
          </div>
          
          {/* Featured room card */}
          <div className="bg-white rounded-md shadow-sm overflow-hidden border border-[#e8c39e]">
            <div className="relative h-64 w-full">
              <div className="absolute inset-0 bg-[#1a5f7a] flex items-center justify-center text-white">
                {/* Placeholder for actual image */}
                <p className="text-lg font-medium">Apartment Sea View Image</p>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-[#1a5f7a]">AGGELOS ANTIPAROS APARTMENT WITH VIEW</h3>
              
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e8c39e] rounded-full mr-2"></span>
                  <span className="text-[#333333]">Sea view balcony</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e8c39e] rounded-full mr-2"></span>
                  <span className="text-[#333333]">Fully equipped kitchen</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e8c39e] rounded-full mr-2"></span>
                  <span className="text-[#333333]">Air conditioning</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#e8c39e] rounded-full mr-2"></span>
                  <span className="text-[#333333]">Free Wi-Fi</span>
                </li>
              </ul>
              
              <Link 
                href="/rooms" 
                className="inline-block bg-[#1a5f7a] hover:bg-[#164e65] text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#1a5f7a]">Our Accommodations</h3>
          </div>
          
          <div className="grid-gallery">
            <div className="card overflow-hidden">
              <div className="h-64 bg-[#1a5f7a] flex items-center justify-center text-white">
                <p>Room Image 1</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-[#1a5f7a]">Standard Room</h4>
                <p className="text-[#333333] text-sm">Comfortable room with all amenities</p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="h-64 bg-[#1a5f7a] flex items-center justify-center text-white">
                <p>Room Image 2</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-[#1a5f7a]">Sea View Apartment</h4>
                <p className="text-[#333333] text-sm">Stunning views of the Aegean Sea</p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="h-64 bg-[#1a5f7a] flex items-center justify-center text-white">
                <p>Room Image 3</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-[#1a5f7a]">Family Suite</h4>
                <p className="text-[#333333] text-sm">Perfect for families with children</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
