import React from 'react';
import { Search, ShoppingCart, MapPin } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 md:px-20 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-10">
        <h1 className="text-3xl font-black text-[#F7E135] tracking-tighter cursor-pointer">
          <span className="text-[#F7E135]">OLD</span><span className="text-black text-sm">Farmer</span>
        </h1>
        <div className="hidden lg:block border-l pl-6 border-gray-200">
          <p className="font-extrabold text-[15px] flex items-center gap-1">
            Delivery in 8 minutes <MapPin size={16} className="text-green-600"/>
          </p>
          <p className="text-xs text-gray-500">Gurugram, Haryana, India</p>
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-10 bg-gray-50 border border-gray-200 rounded-xl flex items-center px-4 py-2.5 group focus-within:bg-white focus-within:shadow-md transition-all">
        <Search size={18} className="text-gray-400" />
        <input 
          type="text" 
          placeholder='Search "egg", "chips" or "milk"' 
          className="w-full bg-transparent outline-none px-3 text-sm font-medium"
        />
      </div>

      <div className="flex items-center gap-8">
        <button className="font-bold text-gray-700 hover:text-green-700 transition-colors">Login</button>
        <button 
          onClick={onCartClick}
          className="bg-[#0C831F] text-white px-5 py-3 rounded-xl flex items-center gap-3 hover:bg-[#0a6d1a] transition-all shadow-lg shadow-green-900/20"
        >
          <ShoppingCart size={20} />
          <div className="text-left leading-none">
            <p className="text-[10px] font-bold uppercase opacity-80">{cartCount} Items</p>
            <p className="text-sm font-black">View Cart</p>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;