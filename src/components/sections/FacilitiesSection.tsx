import React from 'react';
import { FaWifi, FaTv, FaUtensils, FaSnowflake, FaBed, FaShower, FaParking, FaConciergeBell } from 'react-icons/fa';

const FacilitiesSection = () => {
  // Facility items with icons for visual appeal and better UX
  const facilities = [
    { icon: <FaWifi />, name: 'Free Wi-Fi' },
    { icon: <FaTv />, name: 'Satellite TV' },
    { icon: <FaUtensils />, name: 'Fully Equipped Kitchen' },
    { icon: <FaSnowflake />, name: 'Air Conditioning' },
    { icon: <FaBed />, name: 'Luxury Bedding' },
    { icon: <FaShower />, name: 'Modern Bathroom' },
    { icon: <FaParking />, name: 'Free Parking' },
    { icon: <FaConciergeBell />, name: 'Concierge Service' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section title with keyword-rich heading for SEO */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Antiparos Hotels – Antiparos Apartment Facilities
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700">
            Experience unparalleled comfort and convenience during your stay in our Antiparos and Paros apartments. 
            Each thoughtfully designed space features modern amenities to enhance your relaxation and enjoyment, 
            including fully equipped kitchens, spacious living areas, and private balconies with breathtaking views.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Stay connected with complimentary Wi-Fi, unwind with satellite TV, and rejuvenate with luxurious bedding 
            and bath amenities. Additionally, our attentive staff is available to assist with any requests, ensuring 
            a seamless and memorable stay from start to finish. Welcome to your home away from home in Antiparos and Paros!
          </p>
        </div>
        
        {/* Facilities grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 text-3xl mb-4">
                {facility.icon}
              </div>
              <h3 className="text-lg font-semibold">{facility.name}</h3>
            </div>
          ))}
        </div>
        
        {/* Additional amenities highlight */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-center">Additional Amenities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-600">In Your Apartment</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Private balcony with sea view</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Refrigerator and cooking facilities</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Dining area</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Premium linens and towels</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Coffee and tea making facilities</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-600">Services</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Daily housekeeping (on request)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Luggage storage</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Island information and recommendations</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Car and bike rental assistance</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Transfer arrangements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
