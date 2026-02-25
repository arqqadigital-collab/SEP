import React from "react";
import SlideNavButtons from "@/components/ui/SlideNavButtons";
import { useSlider } from "@/hooks/useSlider";
import { products } from "@/data/content";

const ProductsSection: React.FC = () => {
  const { current, next, prev } = useSlider(products.length);
  const activeProduct = products[current];
  const nextProduct = products[(current + 1) % products.length];

  return (
    <section className="pt-24 md:pt-32 pb-24 relative bg-white z-30 rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-8 md:-mt-12">
      <div className="text-center mb-16 px-6 relative z-30">
        <h2 className="text-3xl font-bold mb-4 text-[#582C83]">Our Products</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Discover our comprehensive range of high-quality products designed to meet the rigorous demands of industrial and utility sectors.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_2fr_1fr] gap-8 items-center min-h-[500px] relative z-30">
        <div key={`info-${current}`} className="space-y-6 fade-in animate-in slide-in-from-left-4 duration-500">
          <h3 className="text-2xl font-bold text-[#582C83]">{activeProduct.title}</h3>
          <p className="text-gray-800 text-sm leading-relaxed">{activeProduct.description}</p>
          <button className="px-6 py-2 border border-[#582C83] text-[#582C83] hover:bg-[#582C83] hover:text-white transition-colors rounded-sm uppercase tracking-wider text-xs font-semibold">
            Read More
          </button>
          <SlideNavButtons onPrev={prev} onNext={next} variant="purple" className="pt-4" />
        </div>

        <div className="relative flex justify-center w-full">
          <img
            key={`img-${current}`}
            src={activeProduct.image}
            alt={activeProduct.title}
            className="relative z-10 rounded-xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover object-center border border-gray-200 animate-in fade-in zoom-in-95 duration-500"
          />
        </div>

        <div key={`preview-${current}`} className="hidden md:block opacity-50 space-y-4 pl-8 border-l border-gray-300 animate-in slide-in-from-right-4 duration-500">
          <h3 className="text-xl font-semibold text-[#582C83]">{nextProduct.title}</h3>
          <p className="text-sm line-clamp-3 text-gray-700">{nextProduct.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
