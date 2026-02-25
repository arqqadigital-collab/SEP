import React from "react";
import { clientLogos } from "@/data/content";

const ClientsSection: React.FC = () => (
  <section className="py-20 overflow-hidden bg-white relative z-50">
    <div className="text-center mb-12 px-6 relative z-20">
      <h2 className="text-3xl font-bold text-[#582C83]">Our Clients</h2>
    </div>

    <div className="relative w-full max-w-7xl mx-auto flex items-center py-4">
      <div className="flex animate-marquee gap-12 md:gap-20 px-4 items-center">
        {[...clientLogos, ...clientLogos].map((logo, index) => (
          <div
            key={`client-logo-${index}`}
            className="w-40 h-24 md:w-48 md:h-28 flex-shrink-0 flex items-center justify-center transition-transform cursor-pointer group"
          >
            <img
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110 mix-blend-multiply"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
