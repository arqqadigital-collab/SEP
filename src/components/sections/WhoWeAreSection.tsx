import React from "react";

const WhoWeAreSection: React.FC = () => (
  <section className="relative py-32 px-6 overflow-hidden bg-[#0c468b] z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-8 md:-mt-12">
    <div className="absolute inset-0 z-0">
      <img
        src="https://res.cloudinary.com/dcjufshrh/image/upload/v1771840689/img_zinrl4.png"
        alt="Who We Are Background"
        className="w-full h-full object-cover object-center md:object-right opacity-30 mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c468b] via-[#0c468b]/80 to-transparent"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-white">Who we are</h2>
        <p className="text-blue-100 mb-6 leading-relaxed">
          SEP-System House Factory for Electrical Panels was established in 2006.
        </p>
        <p className="text-blue-100 mb-8 leading-relaxed">
          Centrally situated in the Kingdom's capital, Riyadh, SEP is a leading ISO certified, Aramco and Saudi Electricity Company (SEC) approved manufacturer for supplying of relay, control, automation and distribution panels from its 8000sqm weather protected industrial unit.
        </p>
        <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-[#0c468b] transition-colors rounded-sm uppercase tracking-wider text-sm font-semibold">
          Learn More
        </button>
      </div>
      <div className="hidden md:block"></div>
    </div>
  </section>
);

export default WhoWeAreSection;
