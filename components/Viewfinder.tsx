
import React from 'react';

const Viewfinder: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[80] hidden md:block">
      {/* Top Left */}
      <div className="absolute top-8 left-8 border-t-2 border-l-2 border-[var(--accent)] opacity-40 w-12 h-12 transition-colors duration-300"></div>
      {/* Top Right */}
      <div className="absolute top-8 right-8 border-t-2 border-r-2 border-[var(--accent)] opacity-40 w-12 h-12 transition-colors duration-300"></div>
      {/* Bottom Left */}
      <div className="absolute bottom-8 left-8 border-b-2 border-l-2 border-[var(--accent)] opacity-40 w-12 h-12 transition-colors duration-300"></div>
      {/* Bottom Right */}
      <div className="absolute bottom-8 right-8 border-b-2 border-r-2 border-[var(--accent)] opacity-40 w-12 h-12 transition-colors duration-300"></div>
    </div>
  );
};

export default Viewfinder;
