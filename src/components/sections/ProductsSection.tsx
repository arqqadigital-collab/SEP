import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/content";

const ProductsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const activeProduct = products[currentSlide];
  const nextProduct = products[(currentSlide + 1) % products.length];

  const nextSlide = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
      setIsFading(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
      setIsFading(false);
    }, 300);
  };

  return (
    <section className="py-24 relative bg-white z-10">
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl font-bold mb-4 text-[#0c468b]">Our Products</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Discover our comprehensive range of high-quality products designed to meet the rigorous demands of industrial and utility sectors.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_2fr_1fr] gap-8 items-center min-h-[500px]">
        {/* Active Product Info */}
        <div className="flex flex-col gap-6">
          <div className={`space-y-2 transition-all duration-300 ease-in-out ${isFading ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
            <h3 className="text-2xl font-bold text-[#0c468b]">{activeProduct.title}</h3>
            <p className="text-gray-800 text-sm leading-relaxed line-clamp-2">
              {activeProduct.description}
            </p>
          </div>
          <div className={`transition-all duration-300 ease-in-out delay-75 ${isFading ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
            <button className="px-8 py-3 border border-[#0c468b] text-[#0c468b] hover:bg-[#0c468b] hover:text-white transition-colors rounded-lg uppercase tracking-wider text-sm font-semibold">
              Read More
            </button>
          </div>
          <div className="flex gap-4 pt-2">
            <button
              onClick={prevSlide}
              disabled={isFading}
              className="w-10 h-10 rounded-full border border-gray-300 text-[#0c468b] flex items-center justify-center hover:bg-[#0c468b] hover:text-white hover:border-[#0c468b] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              disabled={isFading}
              className="w-10 h-10 rounded-full border border-gray-300 text-[#0c468b] flex items-center justify-center hover:bg-[#0c468b] hover:text-white hover:border-[#0c468b] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative flex justify-center w-full">
          <img
            src={activeProduct.image}
            alt={activeProduct.title}
            className={`relative z-10 rounded-xl shadow-2xl w-full aspect-[4/3] object-cover object-center border border-gray-200 transition-all duration-300 ease-in-out ${isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
          />
        </div>

        {/* Next Product Preview */}
        <div className={`hidden md:block opacity-50 space-y-2 pl-8 border-l border-gray-300 transition-all duration-300 ease-in-out ${isFading ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
          <h3 className="text-xl font-semibold text-[#0c468b]">{nextProduct.title}</h3>
          <p className="text-sm line-clamp-2 text-gray-700">{nextProduct.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
