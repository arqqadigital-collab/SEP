import React from "react";
import { ChevronDown } from "lucide-react";

const HeroSection: React.FC = () => (
  <section className="relative h-screen flex flex-col items-center justify-center text-center pt-20 bg-[#0c468b]">
    <div className="absolute inset-0 z-0">
      <img
        src="https://res.cloudinary.com/dcjufshrh/image/upload/v1771839137/header_mcjjkx.png"
        alt="Header Background"
        className="w-full h-full object-cover opacity-60 mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c468b] via-[#0c468b]/40 to-[#0c468b]/80" />
    </div>

    <div className="relative z-10 max-w-4xl px-6 text-white">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
        Tomorrow's Solution Today
      </h1>
      <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
        We are building the infrastructure to power the future of your enterprise.
      </p>

      <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#0c468b] transition-colors rounded-sm uppercase tracking-wider text-sm font-semibold mb-12">
        Learn More
      </button>

      <div className="animate-bounce cursor-pointer flex justify-center mt-8">
        <ChevronDown size={32} className="text-white" />
      </div>
    </div>
  </section>
);

export default HeroSection;
