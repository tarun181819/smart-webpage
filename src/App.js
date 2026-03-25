import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import StoreSection from './components/StoreSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { categories, products } from './data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Shield, RotateCcw } from 'lucide-react';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- 1. Add to Cart / Increase Quantity ---
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // --- 2. Remove from Cart / Decrease Quantity ---
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (!existingItem) return prevCart;

      if (existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  // --- Calculations ---
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-[#F8F8F8] font-sans text-gray-900 flex flex-col overflow-x-hidden">
      
      {/* Navbar Section */}
      <Navbar cartCount={totalItems} onCartClick={() => setIsCartOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-6 md:py-10 flex-1">
        
        {/* Hero Banners: Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="h-44 md:h-56 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 p-8 flex flex-col justify-center text-white shadow-xl cursor-pointer"
          >
            <h2 className="text-2xl md:text-4xl font-black leading-tight italic">FASTEST <br /> DELIVERY.</h2>
            <p className="mt-2 font-bold opacity-90 text-sm md:text-base">Freshness at your door in 8 mins</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex h-56 rounded-3xl bg-[#1D3557] p-8 flex flex-col justify-center text-white shadow-xl relative overflow-hidden cursor-pointer"
          >
            <h2 className="text-3xl font-black italic tracking-tighter uppercase">Mega Savings</h2>
            <p className="mt-2 font-bold text-yellow-400">Get up to 50% OFF on Snacks</p>
            <span className="absolute right-[-20px] bottom-[-20px] text-9xl opacity-10 select-none">🍿</span>
          </motion.div>
        </div>

        {/* Categories: Horizontal Scroll on Mobile */}
        <div className="mb-12">
          <h2 className="text-xl font-black mb-6 flex items-center gap-2">
            Shop by Category <span className="h-[1px] flex-1 bg-gray-200 ml-4"></span>
          </h2>
          <div className="flex md:grid md:grid-cols-8 gap-4 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat, index) => (
              <motion.div 
                key={cat.id} 
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-24 md:w-auto flex flex-col items-center cursor-pointer group"
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-2 shadow-sm group-hover:bg-green-50 group-hover:border-green-200 transition-all">
                  <span className="text-3xl md:text-4xl">{cat.img}</span>
                </div>
                <p className="text-[11px] font-bold text-center leading-tight text-gray-700">{cat.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mid-Page Promotion Section */}
        <StoreSection />

        {/* Main Product Grid: 2 Columns on Mobile */}
        <div className="mb-24 mt-16">
          <div className="flex justify-between items-end mb-8">
             <div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight">Trending Near You 🔥</h2>
                <p className="text-sm text-gray-500 font-medium">Top picks from OLD Farmer</p>
             </div>
             <button className="text-[#0C831F] font-bold hover:underline underline-offset-4 text-sm md:text-base">See All Items</button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8">
            {products.map(prod => (
              <ProductCard 
                key={prod.id} 
                product={prod} 
                cartItems={cart} 
                onAdd={addToCart} 
                onRemove={removeFromCart} 
              />
            ))}
          </div>
        </div>

        {/* Modern Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16 border-t border-gray-200 mt-20">
           <div className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="bg-green-100 p-4 rounded-xl text-green-700"><Zap size={24} fill="currentColor"/></div>
              <div><p className="font-black text-sm uppercase italic">8 Min Delivery</p><p className="text-xs text-gray-400">Fastest in Gurugram</p></div>
           </div>
           <div className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="bg-yellow-100 p-4 rounded-xl text-yellow-700"><Shield size={24} fill="currentColor"/></div>
              <div><p className="font-black text-sm uppercase italic">Best Quality</p><p className="text-xs text-gray-400">Fresh from the Farm</p></div>
           </div>
           <div className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="bg-blue-100 p-4 rounded-xl text-blue-700"><RotateCcw size={24} /></div>
              <div><p className="font-black text-sm uppercase italic">Easy Returns</p><p className="text-xs text-gray-400">No questions asked</p></div>
           </div>
        </div>
      </main>

      {/* Floating Mobile Cart Bar: Blinkit Style */}
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div 
            initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
            className="fixed bottom-6 left-4 right-4 bg-[#0C831F] text-white p-4 rounded-2xl flex items-center justify-between shadow-2xl z-50 md:hidden"
            onClick={() => setIsCartOpen(true)}
          >
            <div className="flex items-center gap-3 border-r border-white/20 pr-4">
               <div className="leading-none text-left">
                 <p className="text-[10px] font-bold uppercase opacity-80">{totalItems} ITEMS</p>
                 <p className="text-base font-black italic">₹{totalPrice}</p>
               </div>
            </div>
            <button className="flex items-center gap-2 font-black text-sm uppercase tracking-wide">
              View Cart <ArrowRight size={18}/>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Section */}
      <Footer />

      {/* Cart Slider */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart}
        onAdd={addToCart}
        onRemove={removeFromCart}
      />
    </div>
  );
}

export default App;