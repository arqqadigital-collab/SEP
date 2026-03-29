import React from "react";
import { Search, Globe, ChevronDown } from "lucide-react";
import { products, services } from "@/data/content";

const Navbar: React.FC = () => (
  <nav className="fixed w-full z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-[#0c468b]/90 text-white border-b border-white/10 transition-all duration-300">
    <div className="flex items-center gap-2">
      <img src="https://res.cloudinary.com/dcjufshrh/image/upload/v1771839054/Logo_hlhg8w.png" alt="SEP Logo" className="h-10 object-contain brightness-0 invert" />
    </div>

    <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
      {/* Products Dropdown */}
      <div className="relative group">
        <div className="flex items-center gap-1 hover:text-blue-200 transition-colors cursor-pointer py-2">
          <span>Our Products</span>
          <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
        </div>
        <div className="absolute top-full left-0 mt-0 w-72 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col border border-gray-100 py-2 text-left">
          {products.map((product, idx) => (
            <a key={`nav-prod-${idx}`} href="#" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0c468b] transition-colors border-b border-gray-50 last:border-0 font-normal leading-snug">
              {product.title}
            </a>
          ))}
        </div>
      </div>

      {/* Services Dropdown */}
      <div className="relative group">
        <div className="flex items-center gap-1 hover:text-blue-200 transition-colors cursor-pointer py-2">
          <span>Our Services</span>
          <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
        </div>
        <div className="absolute top-full left-0 mt-0 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col border border-gray-100 py-2 text-left">
          {services.map((service, idx) => (
            <a key={`nav-serv-${idx}`} href="#" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0c468b] transition-colors border-b border-gray-50 last:border-0 font-normal leading-snug">
              {service.title}
            </a>
          ))}
        </div>
      </div>

      <a href="#" className="hover:text-blue-200 transition-colors py-2">About Us</a>
      <a href="#" className="hover:text-blue-200 transition-colors py-2">Clients</a>
      <a href="#" className="hover:text-blue-200 transition-colors py-2">Careers</a>
      <a href="#" className="hover:text-blue-200 transition-colors py-2">Contact Us</a>
    </div>

    <div className="flex items-center gap-6">
      <div className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-blue-200">
        <Globe size={16} />
        <span>EN</span>
      </div>
      <Search size={20} className="cursor-pointer hover:text-blue-200" />
    </div>
  </nav>
);

export default Navbar;
