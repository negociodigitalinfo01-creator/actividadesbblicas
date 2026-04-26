import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar, Hero } from "../components/LandingSections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Hero />
      {/* Add other sections here later */}
    </div>
  );
}
