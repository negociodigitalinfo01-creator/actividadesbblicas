import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar, Hero, WhatYouWillReceive } from "../components/LandingSections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Hero />
      <WhatYouWillReceive />
    </div>
  );
}
