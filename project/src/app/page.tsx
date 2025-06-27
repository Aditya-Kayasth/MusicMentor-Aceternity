import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { InfiniteCards } from "@/components/InfiniteCards";
import HowerCards from "@/components/HowerCards";
import Instructors from "@/components/Instructors";


export default function Home() {
  return (
    <main className="min-h-screen text-white bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      {/* Hero Section */}
      <div className="relative z-10">
        <HeroSection />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-zinc-950 pointer-events-none" />
      </div>

      {/* Featured Section */}
      <div className="relative z-10">
        <FeaturedSection />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0f172a] pointer-events-none" />
      </div>

      {/* Why Choose Us */}
      <div className="relative bg-[#0f172a]">
        <WhyChooseUs />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-[#0f172a] to-black pointer-events-none" />
      </div>

      {/* Testimonials */}

        <InfiniteCards />
    

      {/* Hover Cards */}
    
        <HowerCards />
    

      <div >
        <Instructors />
     
      </div>

      {/* Footer */}

    </main>
  );
}
