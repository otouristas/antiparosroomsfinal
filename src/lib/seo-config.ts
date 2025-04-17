// SEO Configuration for Antiparos Rooms
export const defaultSEO = {
  titleTemplate: '%s | Sea View Apartments in Antiparos',
  defaultTitle: 'Antiparos Rooms | Sea View Apartments in Antiparos',
  description: 'Book Antiparos Rooms – Sea view apartments with modern amenities in Antiparos. Stay near top beaches, enjoy offers, rentals & transfers. Book now!',
  canonical: 'https://antiparosrooms.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://antiparosrooms.com',
    siteName: 'Antiparos Rooms',
    title: 'Antiparos Rooms | Sea View Apartments in Antiparos',
    description: 'Book Antiparos Rooms – Sea view apartments with modern amenities in Antiparos. Stay near top beaches, enjoy offers, rentals & transfers. Book now!',
    images: [
      {
        url: 'https://antiparosrooms.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Antiparos Rooms Sea View Apartments',
      },
    ],
  },
  twitter: {
    handle: '@antiparosrooms',
    site: '@antiparosrooms',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'Antiparos Rooms, Sea view apartments Antiparos, Antiparos accommodation, Antiparos hotels, Antiparos apartments, Antiparos rentals, Paros hotels, Aggelos apartment Antiparos, Antiparos car rental, Antiparos transfers',
    },
    {
      name: 'author',
      content: 'Fotios Koukakis',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'Antiparos Rooms | Sea View Apartments in Antiparos',
    description: 'Book Antiparos Rooms – Sea view apartments with modern amenities in Antiparos. Stay near top beaches, enjoy offers, rentals & transfers. Book now!',
    canonical: 'https://antiparosrooms.com',
  },
  rooms: {
    title: 'Rooms & Apartments | Antiparos Rooms',
    description: 'Discover our sea view apartments in Antiparos with modern amenities. Comfortable rooms with balconies, fully equipped kitchens, and stunning views.',
    canonical: 'https://antiparosrooms.com/rooms',
  },
  rentals: {
    title: 'Aggelos Rent a Car | Antiparos Rooms',
    description: 'Rent cars, scooters, ATVs, and bicycles in Antiparos & Paros. Explore the islands with our reliable vehicles and excellent service.',
    canonical: 'https://antiparosrooms.com/aggelos-rent-a-car-antiparos-paros',
  },
  transfers: {
    title: 'VIP Transfers | Antiparos Rooms',
    description: 'Luxury transfer services between Paros and Antiparos. Door-to-door service for weddings, events, airport & port transfers with 9-seater vans.',
    canonical: 'https://antiparosrooms.com/antiparos-transfers',
  },
  contact: {
    title: 'Contact Us | Antiparos Rooms',
    description: 'Contact Antiparos Rooms for bookings, information, and special requests. We offer personalized service to make your stay unforgettable.',
    canonical: 'https://antiparosrooms.com/contact',
  },
};
