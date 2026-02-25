import React from "react";
import { Facebook, Twitter, Linkedin, ArrowUp } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="relative pt-24 pb-8 px-6 bg-[#0c468b] z-[80] rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-12 md:-mt-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-white">
      <div className="space-y-6">
        <div className="flex flex-col items-start">
          <img src="https://res.cloudinary.com/dcjufshrh/image/upload/v1771839054/Logo_hlhg8w.png" alt="SEP Logo" className="h-12 object-contain object-left brightness-0 invert" />
        </div>
        <p className="text-sm text-blue-100 leading-relaxed pr-4">
          Providing cutting-edge engineering and infrastructure solutions globally. Dedicated to quality, safety, and sustainable development.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#0c468b] transition-colors">
            <Facebook size={16} />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#0c468b] transition-colors">
            <Twitter size={16} />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#0c468b] transition-colors">
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6 text-white">Support</h4>
        <ul className="space-y-4 text-sm text-blue-100">
          <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
        <ul className="space-y-4 text-sm text-blue-100">
          <li>info@sep-engineering.com</li>
          <li>+1 (555) 123-4567</li>
          <li className="leading-relaxed">
            123 Business Avenue, Tech District<br />
            Cairo, Egypt
          </li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/20 text-xs text-blue-200">
      <p>© 2024 SEP Engineering. All rights reserved.</p>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#0c468b] transition-colors">
        <ArrowUp size={16} />
      </button>
    </div>
  </footer>
);

export default Footer;
