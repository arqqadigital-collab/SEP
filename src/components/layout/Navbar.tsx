import React from "react";
import { Search, Globe } from "lucide-react";

const Navbar: React.FC = () => (
  <nav className="fixed w-full z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-[#0c468b]/90 text-white border-b border-white/10 transition-all duration-300">
    <div className="flex items-center gap-2">
      <img src="https://res.cloudinary.com/dcjufshrh/image/upload/v1771839054/Logo_hlhg8w.png" alt="SEP Logo" className="h-10 object-contain brightness-0 invert" />
    </div>

    <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
      <a href="#" className="hover:text-blue-200 transition-colors">Our Products</a>
      <a href="#" className="hover:text-blue-200 transition-colors">Our Services</a>
      <a href="#" className="hover:text-blue-200 transition-colors">About Us</a>
      <a href="#" className="hover:text-blue-200 transition-colors">Clients</a>
      <a href="#" className="hover:text-blue-200 transition-colors">Careers</a>
      <a href="#" className="hover:text-blue-200 transition-colors">Contact Us</a>
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
