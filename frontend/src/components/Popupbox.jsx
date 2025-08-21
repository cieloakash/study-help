import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
const Popupbox = ({ text }) => {
  const [isOpen, setIsOpen] = useState(true);
  const closeDialog = () => setIsOpen(false);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-100 backdrop-blur-md bg-black/30">
      <div
        className="relative bg-gray-300/80 rounded-xl max-w-[90vw] max-h-[80vh] w-full sm:w-[600px] overflow-hidden
        border border-white/50 backdrop-blur-lg
        transform-style-preserve-3d perspective-1000
        hover:rotate-x-[3deg] hover:rotate-y-[2deg] hover:translate-z-[20px]
        hover:shadow-[6px_6px_0px_0px_rgba(0,0,0)] hover:-translate-x-[4px] hover:-translate-y-[4px] transition-all duration-500 "
      >
        {/* Content container */}
        <div className="relative z-10 p-6 h-full transform translate-z-[15px]">
          <button
            onClick={closeDialog}
            className="absolute top-3 right-3 rounded-full bg-white/30 hover:bg-white/40 cursor-pointer pointer-events-auto flex items-center justify-center "
            aria-label="Close"
          >
           <IoMdCloseCircle/>
          </button>

          {/* Dialog content with floating effect */}
          <div className="text-black transform hover:translate-z-[2px] transition-transform">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 drop-shadow-[0_2px_4px_rgba(255,255,255,0.5)]">
              3D Mirror Dialog
            </h2>
            <p className="text-gray-800 leading-relaxed">
              This enhanced dialog features realistic 3D depth with interactive
              hover effects. The glass morphism effect combines with subtle
              shadows and reflections to create a floating panel that responds
              to user attention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popupbox;
