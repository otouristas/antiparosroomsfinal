import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FaShuttleVan, FaPlane, FaShip, FaGlassCheers, FaCheck, FaUserTie, FaClock } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'VIP Transfers | Antiparos Rooms',
  description: 'Luxury transfer services between Paros and Antiparos. Door-to-door service for weddings, events, airport & port transfers with 9-seater vans.',
  keywords: 'Antiparos transfers, Paros airport transfer, Antiparos port transfer, Antiparos wedding transfer, Antiparos VIP transfer',
  alternates: {
    canonical: 'https://antiparosrooms.com/antiparos-transfers',
  },
};

const TransfersPage = () => {
  // Transfer services
  const transferServices = [
    { 
      icon: <FaPlane />, 
      name: 'Airport Transfers', 
      description: 'Comfortable transfers from Paros Airport to Antiparos, including ferry tickets and luggage assistance.'
    },
    { 
      icon: <FaShip />, 
      name: 'Port Transfers', 
      description: 'Meet and greet service at Paros Port with direct transportation to your accommodation in Antiparos.'
    },
    { 
      icon: <FaGlassCheers />, 
      name: 'Wedding & Event Transfers', 
      description: 'Luxury transportation for weddings, special events, and group excursions across Paros and Antiparos.'
    }
  ];

  // Benefits
  const benefits = [
    { icon: <FaUserTie />, title: 'Professional Drivers', text: 'Experienced, English-speaking drivers with excellent knowledge of the islands' },
    { icon: <FaClock />, title: 'Punctuality', text: 'We monitor flight and ferry arrivals to ensure timely pickups, even with delays' },
    { icon: <FaShuttleVan />, title: 'Modern Fleet', text: 'Comfortable, air-conditioned 9-seater vans with ample luggage space' }
  ];

  return (
    <>
      {/* Hero section */}
      <section className="relative h-[50vh] bg-blue-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('/images/transfers-hero.jpg')", 
            filter: "brightness(0.7)"
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Antiparos VIP Transfers
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Luxury door-to-door transfer services between Paros and Antiparos
            </p>
            <a 
              href="https://antiparostransfer.gr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Book a Transfer
            </a>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Premium Transfer Services
            </h2>
            <p className="text-lg text-gray-700">
              Our VIP transfer service offers seamless transportation between Paros and Antiparos, 
              ensuring a stress-free start and end to your vacation. We provide door-to-door service 
              with professional drivers, comfortable vehicles, and attention to every detail of your journey.
            </p>
          </div>

          {/* Transfer services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {transferServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
              >
                <div className="bg-blue-600 text-white p-6 flex justify-center">
                  <div className="text-5xl">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-center">{service.name}</h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">How It Works</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h4 className="text-xl font-semibold mb-2">Book Your Transfer</h4>
                <p className="text-gray-600">
                  Reserve your transfer online, by phone, or through your accommodation booking.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h4 className="text-xl font-semibold mb-2">Meet Your Driver</h4>
                <p className="text-gray-600">
                  Your driver will meet you at the airport, port, or your accommodation with a name sign.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h4 className="text-xl font-semibold mb-2">Enjoy Your Ride</h4>
                <p className="text-gray-600">
                  Relax in our comfortable vehicle as we take you safely to your destination.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Why Choose Our Transfer Service</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-center">{benefit.title}</h4>
                  <p className="text-gray-600 text-center">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Fleet</h3>
              <p className="text-gray-700 mb-6">
                Our modern fleet consists of comfortable 9-seater vans equipped with:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2"><FaCheck /></span>
                  <span>Air conditioning</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2"><FaCheck /></span>
                  <span>Ample luggage space</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2"><FaCheck /></span>
                  <span>Child seats (upon request)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2"><FaCheck /></span>
                  <span>Wi-Fi (upon request)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2"><FaCheck /></span>
                  <span>Bottled water</span>
                </li>
              </ul>
              <p className="text-gray-700">
                All vehicles are regularly maintained and cleaned to ensure your comfort and safety.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Transfer Routes</h3>
              <p className="text-gray-700 mb-6">
                We offer transfers between:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2"><FaCheck /></span>
                  <span>Paros Airport to Antiparos (any location)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2"><FaCheck /></span>
                  <span>Parikia Port to Antiparos (any location)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2"><FaCheck /></span>
                  <span>Naoussa to Antiparos (any location)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2"><FaCheck /></span>
                  <span>Any location in Paros to Antiparos</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2"><FaCheck /></span>
                  <span>Antiparos to any location in Paros</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2"><FaCheck /></span>
                  <span>Custom routes for events and excursions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Transfer Rates</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left">Route</th>
                    <th className="p-4 text-center">1-4 Persons</th>
                    <th className="p-4 text-center">5-9 Persons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Paros Airport to Antiparos</td>
                    <td className="p-4 text-center">€80</td>
                    <td className="p-4 text-center">€120</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Parikia Port to Antiparos</td>
                    <td className="p-4 text-center">€70</td>
                    <td className="p-4 text-center">€110</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Naoussa to Antiparos</td>
                    <td className="p-4 text-center">€90</td>
                    <td className="p-4 text-center">€130</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Wedding/Event Service (4 hours)</td>
                    <td className="p-4 text-center">€200</td>
                    <td className="p-4 text-center">€250</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              * All prices include ferry tickets, luggage handling, and VAT.
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Book Your Transfer Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start your Antiparos vacation with our seamless door-to-door transfer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://antiparostransfer.gr" 
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

export default TransfersPage;
