import React from "react";

const CtaSection: React.FC = () => (
  <section className="pt-24 md:pt-32 pb-40 px-6 text-center relative z-[70] bg-white rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-8 md:-mt-12">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0c468b]">Empowering Your Business Growth</h2>
    <p className="text-lg text-[#0c468b] max-w-3xl mx-auto mb-10 leading-relaxed">
      We deliver ISO-certified electrical, protection, control, and automation solutions for the energy and infrastructure sectors, providing reliable, high-performance systems built to the highest industry standards.
    </p>
    <button className="px-10 py-4 bg-transparent border-2 border-[#0c468b] text-[#0c468b] hover:bg-[#0c468b] hover:text-white transition-colors font-bold text-lg rounded-sm uppercase tracking-wider">
      Contact Us
    </button>
  </section>
);

export default CtaSection;
