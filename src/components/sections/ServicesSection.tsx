import React from "react";
import SlideNavButtons from "@/components/ui/SlideNavButtons";
import { useSlider } from "@/hooks/useSlider";
import { services } from "@/data/content";

const ServicesSection: React.FC = () => {
  const { current, next, prev } = useSlider(services.length);
  const activeService = services[current];

  return (
    <section className="pt-24 md:pt-32 pb-24 relative overflow-hidden bg-[#0c468b] z-40 rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-8 md:-mt-12">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-16 px-6 relative z-30">
        <h2 className="text-3xl font-bold mb-4 text-white">Our Services</h2>
        <p className="text-blue-100 max-w-2xl mx-auto">
          Providing end-to-end services from initial design to final commissioning and ongoing maintenance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-30 min-h-[450px]">
        <div key={`service-info-${current}`} className="order-2 md:order-1 space-y-6 fade-in animate-in slide-in-from-left-4 duration-500">
          <h3 className="text-3xl font-bold text-white">{activeService.title}</h3>
          <p className="text-blue-50 leading-relaxed text-lg">{activeService.description}</p>
          <SlideNavButtons onPrev={prev} onNext={next} variant="white" className="pt-6" />
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <img
            key={`service-img-${current}`}
            src={activeService.image}
            alt={activeService.title}
            className="rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full h-[350px] md:h-[450px] object-cover border border-white/10 animate-in fade-in zoom-in-95 duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
