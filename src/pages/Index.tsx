import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import LocationsSection from "@/components/sections/LocationsSection";
import CtaSection from "@/components/sections/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden selection:bg-[#582C83] selection:text-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <WhoWeAreSection />
      <ProductsSection />
      <ServicesSection />
      <ProjectsSection />
      <ClientsSection />
      <LocationsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
