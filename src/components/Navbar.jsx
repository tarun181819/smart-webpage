import React from 'react';
import { Search, ShoppingCart, MapPin, ChevronDown, User } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="sticky top-0 z-[60] bg-white border-b border-gray-100 shadow-sm transition-all">
      {/* 1. Desktop & Mobile Top Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Location (Hidden on super small mobile for location) */}
        <div className="flex items-center gap-3 md:gap-8">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter cursor-pointer leading-none">
              <span className="text-[#F7E135]">OLD</span><span className="text-black">Farmer</span>
            </h1>
            <span className="text-[8px] font-bold text-gray-400 tracking-[0.2em] uppercase md:hidden">Freshness Delivered</span>
          </div>

          {/* Location Picker: Premium Look */}
          <div className="hidden sm:flex items-center gap-2 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-100 cursor-pointer transition-all">
            <div className="text-green-600 bg-green-50 p-1 rounded-md">
                <MapPin size={16} />
            </div>
            <div className="flex flex-col">
              <p className="font-black text-[11px] leading-tight flex items-center gap-1">
                8 mins <ChevronDown size={10} />
              </p>
              <p className="text-[10px] text-gray-500 font-bold truncate max-w-[120px]">Sector 45, Gurugram</p>
            </div>
          </div>
        </div>

        {/* Desktop Search (Only visible on MD screens up) */}
        <div className="hidden md:flex flex-1 max-w-lg bg-gray-100 border border-gray-200 rounded-xl items-center px-4 py-2.5 focus-within:bg-white focus-within:ring-2 focus-within:ring-green-100 transition-all">
          <Search size={18} className="text-gray-400" />
          <input 
            type="text" 
            placeholder='Search "atta", "dal" or "fruits"' 
            className="w-full bg-transparent outline-none px-3 text-sm font-bold"
          />
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-2 md:gap-5">
          <button className="p-2 text-gray-700 hover:bg-gray-50 rounded-full md:hidden">
            <User size={22} />
          </button>
          <button className="hidden md:block font-black text-sm text-gray-700 hover:text-green-700">Login</button>
          
          {/* Cart: Floating Badge Style */}
          <button 
            onClick={onCartClick}
            className="bg-[#0C831F] text-white px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-green-900/20 active:scale-95 transition-all"
          >
            <div className="relative">
                <ShoppingCart size={18} />
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[9px] font-black h-4 w-4 rounded-full flex items-center justify-center border-2 border-[#0C831F]">
                        {cartCount}
                    </span>
                )}
            </div>
            <span className="hidden sm:inline font-black text-sm">₹{cartCount > 0 ? '450' : '0'}</span>
          </button>
        </div>
      </div>

      {/* 2. Mobile Location & Search Bar (Visible only on mobile) */}
      <div className="md:hidden px-4 pb-3 flex flex-col gap-2">
        {/* Mobile Location Row */}
        <div className="flex items-center gap-1 text-gray-600">
            <MapPin size={12} className="text-green-600" />
            <p className="text-[11px] font-bold">Delivery in <span className="text-black">8 mins</span> to <span className="text-black border-b border-dotted border-black">Sector 45...</span></p>
        </div>
        
        {/* Mobile Full-Width Search */}
        <div className="bg-gray-100 rounded-xl flex items-center px-4 py-3 shadow-inner border border-gray-200/50">
          <Search size={16} className="text-gray-400" />
          <input 
            type="text" 
            placeholder='Search for "fresh vegetables"' 
            className="w-full bg-transparent outline-none px-3 text-xs font-bold text-gray-800 placeholder:text-gray-400"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;