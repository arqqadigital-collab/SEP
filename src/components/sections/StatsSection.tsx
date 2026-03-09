import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Counter from "@/components/ui/Counter";
import { useSlider } from "@/hooks/useSlider";
import { statsSlides } from "@/data/content";

const StatsSection: React.FC = () => {
  const { current, next, prev } = useSlider(statsSlides.length);

  return (
    <section className="py-24 w-full bg-gray-50 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-[#0c468b] text-3xl md:text-4xl font-extrabold mb-2 tracking-wide">Driving Performance</h2>
          <h3 className="text-[#0c468b] text-lg md:text-xl font-medium">Across Critical Infrastructure</h3>
        </div>

        <div className="flex items-center justify-between relative group">
          <button
            onClick={prev}
            className="hidden md:flex absolute -left-4 lg:-left-12 w-12 h-12 rounded-full border border-[#0c468b]/20 items-center justify-center hover:bg-[#0c468b] hover:text-white transition-all z-10 bg-white shadow-lg cursor-pointer text-[#0c468b]"
          >
            <ChevronLeft size={24} />
          </button>

          <div key={current} className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-8 animate-in fade-in zoom-in-95 duration-500">
            {statsSlides[current].map((stat, index) => (
              <div key={stat.title + index} className="text-left">
                <div className="text-4xl md:text-5xl font-bold mb-4 text-[#0c468b]">
                  <Counter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="h-[2px] w-full bg-[#0c468b]/20 mb-4"></div>
                <div className="text-sm text-[#0c468b] font-semibold tracking-wide">
                  {stat.title}
                  {stat.subtitle && <><br /><span className="text-xs text-[#0c468b]/70 font-medium">{stat.subtitle}</span></>}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="hidden md:flex absolute -right-4 lg:-right-12 w-12 h-12 rounded-full border border-[#0c468b]/20 items-center justify-center hover:bg-[#0c468b] hover:text-white transition-all z-10 bg-white shadow-lg cursor-pointer text-[#0c468b]"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-4 mt-12 md:hidden">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#0c468b]/20 flex items-center justify-center hover:bg-[#0c468b] hover:text-white transition-all bg-white shadow-md text-[#0c468b]"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#0c468b]/20 flex items-center justify-center hover:bg-[#0c468b] hover:text-white transition-all bg-white shadow-md text-[#0c468b]"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
