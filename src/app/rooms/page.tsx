import React from 'react';
import type { Metadata } from 'next';
import { FaWifi, FaTv, FaUtensils, FaSnowflake, FaBed, FaShower, FaParking, FaCheck } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Rooms & Apartments | Antiparos Rooms',
  description: 'Discover our sea view apartments in Antiparos with modern amenities. Comfortable rooms with balconies, fully equipped kitchens, and stunning views.',
  keywords: 'Antiparos Rooms, Sea view apartments Antiparos, Antiparos accommodation, Antiparos hotels, Antiparos apartments, Antiparos rentals',
  alternates: {
    canonical: 'https://antiparosrooms.com/rooms',
  },
};

const RoomsPage = () => {
  // Room amenities
  const amenities = [
    { icon: <FaWifi />, name: 'Free Wi-Fi' },
    { icon: <FaTv />, name: 'Satellite TV' },
    { icon: <FaUtensils />, name: 'Fully Equipped Kitchen' },
    { icon: <FaSnowflake />, name: 'Air Conditioning' },
    { icon: <FaBed />, name: 'Luxury Bedding' },
    { icon: <FaShower />, name: 'Modern Bathroom' },
    { icon: <FaParking />, name: 'Free Parking' },
  ];

  return (
    <>
      {/* Hero section */}
      <section className="relative h-[50vh] bg-blue-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('/images/rooms-hero.jpg')", 
            filter: "brightness(0.7)"
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Antiparos Rooms & Apartments
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Discover our comfortable sea view accommodations in the heart of Antiparos
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Sea View Apartments in Antiparos
            </h2>
            <p className="text-lg text-gray-700">
              Our Antiparos apartments offer the perfect blend of comfort, convenience, and stunning views. 
              Each accommodation is thoughtfully designed to provide a relaxing retreat after a day of 
              exploring the beautiful island of Antiparos.
            </p>
          </div>

          {/* Featured Room */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto bg-blue-900 flex items-center justify-center text-white">
                {/* Placeholder for actual image */}
                <p className="text-lg font-medium">Apartment Sea View Image</p>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">AGGELOS ANTIPAROS APARTMENT WITH VIEW</h3>
                <p className="text-gray-600 mb-6">
                  Experience the beauty of Antiparos from our premium sea view apartment. This spacious accommodation 
                  features a private balcony overlooking the Aegean Sea, a fully equipped kitchen, comfortable 
                  living area, and modern amenities to ensure a memorable stay.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Apartment Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2"><FaCheck /></span>
                      <span>Sea view balcony</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2"><FaCheck /></span>
                      <span>Fully equipped kitchen</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2"><FaCheck /></span>
                      <span>Air conditioning</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2"><FaCheck /></span>
                      <span>Free Wi-Fi</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2"><FaCheck /></span>
                      <span>Satellite TV</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2"><FaCheck /></span>
                      <span>Modern bathroom</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2"><FaCheck /></span>
                      <span>Quality linens & towels</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2"><FaCheck /></span>
                      <span>Cleaning service</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+306980151068" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors text-center"
                  >
                    Book Now: +30 6980151068
                  </a>
                  <a 
                    href="mailto:info@antiparosrooms.com" 
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded transition-colors text-center"
                  >
                    Email for Availability
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Room amenities */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">All Our Rooms Include</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {amenities.map((amenity, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center"
                >
                  <div className="text-blue-600 text-2xl mb-3">
                    {amenity.icon}
                  </div>
                  <h4 className="font-medium">{amenity.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Booking information */}
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold mb-4">Booking Information</h3>
            <p className="text-gray-700 mb-6">
              For reservations and availability, please contact us directly by phone or email. 
              We offer special rates for extended stays and returning guests.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Check-in / Check-out</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span>Check-in: 14:00 - 20:00</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span>Check-out: By 11:00</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span>Early check-in and late check-out available upon request</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Policies</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span>No smoking inside apartments</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span>Pets allowed upon request</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span>Children of all ages welcome</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Antiparos?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay at Antiparos Rooms and enjoy our comfortable sea view apartments, 
            excellent location, and authentic Cycladic hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+306980151068" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Call to Book
            </a>
            <a 
              href="mailto:info@antiparosrooms.com" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomsPage;
