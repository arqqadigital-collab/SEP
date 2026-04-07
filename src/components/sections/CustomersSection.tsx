import React from "react";
import { customerLogos } from "@/data/content";

const CustomersSection: React.FC = () => (
  <section className="py-24 overflow-hidden bg-white relative z-10 border-t border-gray-100">
    <div className="text-center mb-12 px-6">
      <h2 className="text-3xl font-bold text-[#0c468b]">Our Customer</h2>
    </div>

    <div className="relative w-full max-w-7xl mx-auto flex items-center">
      <div className="flex animate-marquee gap-12 md:gap-20 px-4 items-center" style={{ animationDirection: 'reverse' }}>
        {[...customerLogos, ...customerLogos].map((logo, index) => {
          const isNeedsUpscale = logo.includes('neom') || logo.includes('WTTCO');

          return (
            <div
              key={`customer-logo-${index}`}
              className="w-40 h-24 md:w-48 md:h-28 flex-shrink-0 flex items-center justify-center cursor-pointer group bg-transparent"
            >
              <img
                src={logo}
                alt={`Customer Logo ${index + 1}`}
                className={`max-w-full max-h-full object-contain transition-transform duration-300 mix-blend-multiply brightness-110 contrast-125 ${
                  isNeedsUpscale
                    ? 'scale-[1.5] md:scale-[1.6] group-hover:scale-[1.65]'
                    : 'scale-100 group-hover:scale-110'
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default CustomersSection;
