import React from 'react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white py-4">
      <div className="bg-gradient-to-r from-green-600 to-emerald-400 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-green-100 relative">
        
        {/* Left Content */}
        <div className="z-10 text-center md:text-left">
          <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Instant Delivery
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 leading-tight">
            Freshness <br /> 
            <span className="text-yellow-300 underline decoration-wavy decoration-2 underline-offset-8">at your door.</span>
          </h2>
          <p className="text-green-50 mt-6 text-lg font-medium opacity-90 max-w-md">
            Order your daily essentials and get them delivered in less than 12 minutes.
          </p>
          <button className="mt-8 bg-white text-green-700 px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-yellow-300 hover:text-black transition-all transform hover:-translate-y-1 active:scale-95">
            Shop Now
          </button>
        </div>

        {/* Decorative Glass Circle */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        {/* Right Image Placeholder (Professional Look) */}
        <div className="mt-8 md:mt-0 relative">
           <div className="w-64 h-64 md:w-80 md:h-80 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 flex items-center justify-center shadow-inner">
              <span className="text-8xl transform -rotate-12 drop-shadow-2xl">🛒</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;