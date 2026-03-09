import React, { useState } from "react";
import { MapPin } from "lucide-react";

const locationTabs = [
  { id: "head-office", label: "Head Office" },
  { id: "location-01", label: "Location 01" },
  { id: "location-02", label: "Location 02" },
] as const;

const locationDetails: Record<string, {
  title: string;
  address1: string;
  address2: string;
  email: string;
  pinPos: string;
}> = {
  'head-office': {
    title: 'Head Office',
    address1: '2nd Industrial City-Riyadh, KSA',
    address2: 'P.O Box: 355950, 11383-Riyadh',
    email: 'info@sep-engineering.com',
    pinPos: 'top-[45%] left-[55%]'
  },
  'location-01': {
    title: 'Al Gihaz Holding – Jeddah branch',
    address1: 'Prince Mohammed Bin Abdulaziz',
    address2: 'St, Al-Andalus, Jeddah 23326, Saudi Arabia',
    email: 'info@sep-engineering.com',
    pinPos: 'top-[55%] left-[35%]'
  },
  'location-02': {
    title: 'Location 02',
    address1: 'King Fahd Road, Olaya District',
    address2: 'Riyadh, KSA',
    email: 'info@sep-engineering.com',
    pinPos: 'top-[38%] left-[58%]'
  }
};

const LocationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("head-office");
  const activeLoc = locationDetails[activeTab];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0c468b] z-10">
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl font-bold mb-4 text-white">Our Locations</h2>
        <p className="text-blue-100 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {locationTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${activeTab === tab.id ? 'bg-white text-[#0c468b] shadow-md' : 'border border-white text-white hover:bg-white/10'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Map Area */}
        <div className="relative w-full h-[400px] md:h-[500px] max-w-5xl mx-auto rounded-3xl bg-[#0c468b] overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dcjufshrh/image/upload/v1773052378/maapp_dtmiry.png"
            alt="Locations Map"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Moving Pin */}
          <div className={`absolute transition-all duration-700 ease-in-out z-30 ${activeLoc.pinPos}`}>
            <div className="relative flex items-center justify-center drop-shadow-2xl text-white transform -translate-x-1/2 -translate-y-full">
              <svg width="40" height="52" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 transition-transform duration-300 hover:scale-110">
                <path d="M12 0C5.373 0 0 5.373 0 12C0 21 12 34 12 34C12 34 24 21 24 12C24 5.373 18.627 0 12 0Z" fill="currentColor"/>
                <circle cx="12" cy="12" r="4.5" fill="#0c468b"/>
              </svg>
            </div>
          </div>

          {/* Floating Info Card */}
          <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 bg-[#0f192b]/95 backdrop-blur-sm p-5 rounded-2xl shadow-2xl w-[260px] md:w-[280px] z-20 border border-white/10 transition-all duration-300 pointer-events-auto">
            <div className="flex items-start gap-3">
              <div className="text-white mt-1 shrink-0">
                <MapPin size={20} strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <h4 className="text-base md:text-lg font-bold mb-2 text-white">
                  {activeLoc.title}
                </h4>
                <p className="text-xs text-gray-300 mb-1 leading-relaxed">
                  {activeLoc.address1}
                </p>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {activeLoc.address2}
                </p>
                <div className="mt-4 text-xs font-semibold text-white/80">
                  {activeLoc.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
