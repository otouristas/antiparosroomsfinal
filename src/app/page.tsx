import HeroSection from '@/components/sections/HeroSection';
import RoomsSection from '@/components/sections/RoomsSection';
import OwnerSection from '@/components/sections/OwnerSection';
import SummerOffersSection from '@/components/sections/SummerOffersSection';
import FacilitiesSection from '@/components/sections/FacilitiesSection';
import NearbyAttractionsSection from '@/components/sections/NearbyAttractionsSection';
import ContactSection from '@/components/sections/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Antiparos Rooms | Sea View Apartments in Antiparos',
  description: 'Book Antiparos Rooms – Sea view apartments with modern amenities in Antiparos. Stay near top beaches, enjoy offers, rentals & transfers. Book now!',
  keywords: 'Antiparos Rooms, Sea view apartments Antiparos, Antiparos accommodation, Antiparos hotels, Antiparos apartments, Antiparos rentals, Paros hotels',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <RoomsSection />
      <OwnerSection />
      <SummerOffersSection />
      <FacilitiesSection />
      <NearbyAttractionsSection />
      <ContactSection />
    </>
  );
}
