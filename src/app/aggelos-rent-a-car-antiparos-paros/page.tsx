import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FaCar, FaMotorcycle, FaBicycle, FaLeaf, FaCheck, FaShieldAlt, FaMapMarkedAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Aggelos Rent a Car | Antiparos Rooms',
  description: 'Rent cars, scooters, ATVs, and bicycles in Antiparos & Paros. Explore the islands with our reliable vehicles and excellent service.',
  keywords: 'Antiparos car rental, Paros car rental, Antiparos scooter rental, Antiparos ATV rental, Antiparos bicycle rental, Aggelos rentals',
  alternates: {
    canonical: 'https://antiparosrooms.com/aggelos-rent-a-car-antiparos-paros',
  },
};

const RentalsPage = () => {
  // Vehicle types
  const vehicleTypes = [
    { 
      icon: <FaCar />, 
      name: 'Cars', 
      description: 'Explore the islands comfortably with our reliable and fuel-efficient cars.',
      features: ['Air conditioning', 'Manual & automatic options', 'Child seats available', 'Insurance included']
    },
    { 
      icon: <FaMotorcycle />, 
      name: 'Scooters & ATVs', 
      description: 'Perfect for adventurous travelers looking to discover hidden beaches and scenic routes.',
      features: ['Easy to drive', 'Fuel efficient', 'Helmets provided', 'Storage space']
    },
    { 
      icon: <FaBicycle />, 
      name: 'Bicycles', 
      description: 'Eco-friendly option for exploring the islands at your own pace.',
      features: ['Mountain & city bikes', 'Helmets provided', 'Child seats available', 'Locks included']
    }
  ];

  // Benefits
  const benefits = [
    { icon: <FaCheck />, title: 'Competitive Prices', text: 'Best rates on the island with special discounts for Antiparos Rooms guests' },
    { icon: <FaShieldAlt />, title: 'Full Insurance', text: 'All vehicles come with comprehensive insurance for your peace of mind' },
    { icon: <FaMapMarkedAlt />, title: 'Free Delivery', text: 'We deliver vehicles to your accommodation at no extra cost' },
    { icon: <FaLeaf />, title: 'Eco-Friendly Options', text: 'Choose from our selection of fuel-efficient and electric vehicles' }
  ];

  return (
    <>
      {/* Hero section */}
      <section className="relative h-[50vh] bg-blue-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('/images/rentals-hero.jpg')", 
            filter: "brightness(0.7)"
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Aggelos Rent a Car Antiparos
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Explore Antiparos and Paros with our quality vehicles
            </p>
            <a 
              href="https://antiparosrentacar.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Book a Vehicle
            </a>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              About Aggelos Rentals
            </h2>
            <p className="text-lg text-gray-700">
              Aggelos Rentals is a family-owned business offering quality vehicle rentals in Antiparos and Paros 
              for over 15 years. We pride ourselves on providing excellent service, well-maintained vehicles, 
              and competitive prices to help you explore these beautiful Cycladic islands.
            </p>
          </div>

          {/* Vehicle types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {vehicleTypes.map((vehicle, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
              >
                <div className="bg-blue-600 text-white p-6 flex justify-center">
                  <div className="text-5xl">
                    {vehicle.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-center">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {vehicle.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-blue-600 mr-2"><FaCheck /></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Why Choose Aggelos Rentals</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-3 text-white mr-4 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Rental Rates</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left">Vehicle Type</th>
                    <th className="p-4 text-center">Daily Rate</th>
                    <th className="p-4 text-center">3-Day Rate</th>
                    <th className="p-4 text-center">Weekly Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Small Car</td>
                    <td className="p-4 text-center">€40</td>
                    <td className="p-4 text-center">€110</td>
                    <td className="p-4 text-center">€230</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Medium Car</td>
                    <td className="p-4 text-center">€50</td>
                    <td className="p-4 text-center">€140</td>
                    <td className="p-4 text-center">€290</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Scooter 125cc</td>
                    <td className="p-4 text-center">€25</td>
                    <td className="p-4 text-center">€65</td>
                    <td className="p-4 text-center">€140</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">ATV/Quad</td>
                    <td className="p-4 text-center">€35</td>
                    <td className="p-4 text-center">€95</td>
                    <td className="p-4 text-center">€210</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Bicycle</td>
                    <td className="p-4 text-center">€10</td>
                    <td className="p-4 text-center">€25</td>
                    <td className="p-4 text-center">€50</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Rates may vary by season. Special discounts available for Antiparos Rooms guests.
            </p>
          </div>

          {/* Sustainability */}
          <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-600 mb-16">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <FaLeaf className="text-green-600 mr-2" />
              Our Commitment to Sustainability
            </h3>
            <p className="text-gray-700 mb-4">
              At Aggelos Rentals, we are committed to reducing our environmental impact. We maintain our vehicles 
              regularly for optimal fuel efficiency, offer electric and hybrid options, and encourage bicycle 
              rentals for eco-friendly exploration of the islands.
            </p>
            <p className="text-gray-700">
              By choosing our services, you contribute to our efforts to preserve the natural beauty of 
              Antiparos and Paros for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Antiparos?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your vehicle today and discover the beauty of Antiparos and Paros at your own pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://antiparosrentacar.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Book Online
            </a>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RentalsPage;
