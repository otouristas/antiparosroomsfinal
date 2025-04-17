import React from 'react';
import { LodgingBusiness, WithContext } from 'schema-dts';

export const LodgingSchema = (): React.JSX.Element => {
  const schema: WithContext<LodgingBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Antiparos Rooms',
    description: 'Sea view apartments with modern amenities in Antiparos. Stay near top beaches, enjoy offers, rentals & transfers.',
    url: 'https://antiparosrooms.com',
    telephone: '+30 6980151068',
    email: 'info@antiparosrooms.com',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Central Road',
      addressLocality: 'Antiparos',
      addressRegion: 'Cyclades',
      postalCode: '84007',
      addressCountry: 'GR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.041372,
      longitude: 25.0817439
    },
    image: [
      'https://antiparosrooms.com/images/hero-image.jpg',
      'https://antiparosrooms.com/images/apartment-view.jpg',
      'https://antiparosrooms.com/images/room-interior.jpg'
    ],
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Wi-Fi',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Sea View',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Kitchen',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Air Conditioning',
        value: true
      }
    ],
    starRating: {
      '@type': 'Rating',
      ratingValue: '4.8'
    },
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'AGGELOS ANTIPAROS APARTMENT WITH VIEW',
        description: 'Sea view apartment with modern amenities in Antiparos',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '100',
          priceCurrency: 'EUR',
          validFrom: '2025-05-01'
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LodgingSchema;
