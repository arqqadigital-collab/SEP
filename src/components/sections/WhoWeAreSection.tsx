import React from "react";

const WhoWeAreSection: React.FC = () => (
  <section className="py-24 px-6 overflow-hidden bg-gray-900 relative z-10">
    <div className="absolute inset-0 z-0">
      <img
        src="https://res.cloudinary.com/dcjufshrh/image/upload/v1772710799/who_we_are_lo34aa.png"
        alt="Who We Are Background"
        className="w-full h-full object-cover object-center md:object-right"
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-3 text-white">Who we are</h2>
        <p className="text-blue-100 mb-8 leading-relaxed">
          SEP-System House Factory for Electrical Panels was established in 2006. Centrally situated in the Kingdom's capital, Riyadh, SEP is a leading ISO certified, Aramco and Saudi Electricity Company (SEC) approved manufacturer for supplying of relay, control, automation and distribution panels from its 8000sqm weather protected industrial unit.
        </p>
        <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-[#0c468b] transition-colors rounded-lg uppercase tracking-wider text-sm font-semibold">
          Learn More
        </button>
      </div>
      <div className="hidden md:block"></div>
    </div>
  </section>
);

export default WhoWeAreSection;
