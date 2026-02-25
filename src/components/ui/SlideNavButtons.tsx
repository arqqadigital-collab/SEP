import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideNavButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  variant?: "blue" | "purple" | "white";
  className?: string;
}

const styles = {
  blue: "border-[#0c468b]/20 text-[#0c468b] hover:bg-[#0c468b] hover:text-white bg-white shadow-lg",
  purple: "border-gray-300 text-[#582C83] hover:bg-[#582C83] hover:text-white hover:border-[#582C83]",
  white: "border-white/20 text-white hover:bg-white hover:text-[#0c468b]",
};

const SlideNavButtons: React.FC<SlideNavButtonsProps> = ({ onPrev, onNext, variant = "blue", className = "" }) => (
  <div className={`flex gap-4 ${className}`}>
    <button
      onClick={onPrev}
      className={`w-10 h-10 rounded-full border flex items-center justify-center transition cursor-pointer ${styles[variant]}`}
    >
      <ChevronLeft size={20} />
    </button>
    <button
      onClick={onNext}
      className={`w-10 h-10 rounded-full border flex items-center justify-center transition cursor-pointer ${styles[variant]}`}
    >
      <ChevronRight size={20} />
    </button>
  </div>
);

export default SlideNavButtons;
