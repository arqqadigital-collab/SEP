import React, { useState } from "react";
import { locationMaps } from "@/data/content";

const locationTabs = [
  { id: "head-office", label: "Head Office" },
  { id: "location-01", label: "Location 01" },
  { id: "location-02", label: "Location 02" },
] as const;

const LocationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("head-office");

  return (
    <section className="pt-24 md:pt-32 pb-24 relative overflow-hidden bg-[#0c468b] z-[60] rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-8 md:-mt-12">
      <div className="text-center mb-12 px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Our Locations</h2>
        <p className="text-blue-100 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {locationTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab.id ? "bg-white text-[#0c468b] shadow-lg" : "border border-white text-white hover:bg-white/10"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full rounded-2xl flex items-center justify-center overflow-hidden">
          <img
            key={activeTab}
            src={locationMaps[activeTab]}
            alt="World Map Locations"
            className="w-full h-auto object-contain animate-in fade-in duration-500 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
