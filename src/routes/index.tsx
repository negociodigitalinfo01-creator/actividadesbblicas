import { createFileRoute } from "@tanstack/react-router";
import { 
  AnnouncementBar, 
  Hero, 
  WhatYouWillReceive, 
  WhyChoose, 
  BonusDetails, 
  Pricing, 
  TestimonialsCarousel,
  FAQ,
  Author, 
  Footer 
} from "../components/LandingSections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Hero />
      <WhatYouWillReceive />
      <WhyChoose />
      <BonusDetails />
      <Pricing />
      <TestimonialsCarousel />
      <FAQ />
      <Author />
      <Footer />
    </div>
  );
}
