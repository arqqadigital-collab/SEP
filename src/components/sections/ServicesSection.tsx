import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/data/content";

const ServicesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const activeService = services[currentSlide];

  const nextSlide = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
      setIsFading(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
      setIsFading(false);
    }, 300);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#0c468b] z-10">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-12 px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Our Services</h2>
        <p className="text-blue-100 max-w-2xl mx-auto">
          Providing end-to-end services from initial design to final commissioning and ongoing maintenance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[450px] p-6 md:p-10 rounded-3xl transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:ring-1 hover:ring-white/30 cursor-pointer group">
          <div className="order-2 md:order-1 flex flex-col justify-center h-full">
            <div className={`space-y-6 transition-all duration-300 ease-in-out ${isFading ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
              <h3 className="text-3xl font-bold text-white group-hover:text-blue-100 transition-colors">{activeService.title}</h3>
              <p className="text-blue-50 leading-relaxed text-lg">
                {activeService.description}
              </p>
            </div>
            <div className="flex gap-4 pt-8">
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                disabled={isFading}
                className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#0c468b] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                disabled={isFading}
                className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#0c468b] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Services Image Container - Stacked for instant switching */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 group-hover:border-white/30 transition-colors duration-300 bg-[#082d5a]">
              {services.map((service, idx) => (
                <img
                  key={`service-img-${idx}`}
                  src={service.image}
                  alt={service.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 ${idx === currentSlide && !isFading ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
