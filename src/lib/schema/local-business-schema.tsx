import React from 'react';
import { LocalBusiness, WithContext } from 'schema-dts';

export const LocalBusinessSchema = (): React.JSX.Element => {
  const schema: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Antiparos Rooms',
    image: 'https://antiparosrooms.com/images/antiparos-rooms-logo.jpg',
    '@id': 'https://antiparosrooms.com',
    url: 'https://antiparosrooms.com',
    telephone: '+30 6980151068',
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
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '09:00',
      closes: '21:00'
    },
    sameAs: [
      'https://antiparosrentacar.com',
      'https://antiparostransfer.gr'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
