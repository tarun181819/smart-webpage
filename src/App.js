import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import StoreSection from './components/StoreSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { categories, products } from './data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (!existingItem) return prevCart;
      if (existingItem.quantity === 1) return prevCart.filter((item) => item.id !== productId);
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-[#F2F4F7] font-sans text-gray-900 flex flex-col overflow-x-hidden selection:bg-green-100">
      <Navbar cartCount={totalItems} onCartClick={() => setIsCartOpen(true)} />

      <main className="max-w-7xl mx-auto w-full px-3 md:px-10 py-4 md:py-8 flex-1">
        
        {/* Mobile Banner: Single & Impactful */}
        <div className="mb-6 md:mb-10">
          <div className="h-36 md:h-56 rounded-2xl bg-[#1D3557] p-6 flex items-center justify-between text-white shadow-lg overflow-hidden relative">
            <div className="z-10">
              <h2 className="text-xl md:text-4xl font-black italic leading-tight uppercase">50% OFF</h2>
              <p className="text-[10px] md:text-base font-bold opacity-80 uppercase tracking-widest">On First 3 Orders</p>
            </div>
            <span className="text-7xl md:text-9xl absolute right-[-10px] bottom-[-20px] opacity-20">🛒</span>
          </div>
        </div>

        {/* Categories: Horizontal Scroll with No Scrollbar */}
        <div className="mb-8 overflow-hidden">
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-base md:text-xl font-black">Categories</h2>
            <button className="text-green-600 text-xs font-bold md:hidden">See All</button>
          </div>
          <div className="flex md:grid md:grid-cols-8 gap-3 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1">
            {categories.map((cat) => (
              <div key={cat.id} className="flex-shrink-0 w-[70px] md:w-auto flex flex-col items-center">
                <div className="bg-white rounded-xl md:rounded-2xl p-4 mb-2 shadow-sm border border-gray-100 active:scale-90 transition-transform">
                  <span className="text-2xl md:text-4xl">{cat.img}</span>
                </div>
                <p className="text-[9px] md:text-[11px] font-bold text-center leading-tight truncate w-full">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>

        <StoreSection />

        {/* Product Grid: 2 Columns with Tight Spacing on Mobile */}
        <div className="mb-24 mt-8">
          <h2 className="text-lg md:text-2xl font-black mb-6 px-1">Trending Near You</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 md:gap-6">
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
      </main>

      {/* Floating Action Bar (Mobile Only) */}
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div 
            initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-50 md:hidden flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-center gap-3">
               <div className="bg-green-100 p-2 rounded-lg text-green-700">
                  <ShoppingBag size={20} />
               </div>
               <div>
                 <p className="text-[10px] font-bold text-gray-400 leading-none">{totalItems} ITEMS</p>
                 <p className="text-base font-black italic">₹{totalPrice}</p>
               </div>
            </div>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="bg-[#0C831F] text-white px-6 py-3 rounded-xl font-black text-sm flex items-center gap-2"
            >
              VIEW CART <ArrowRight size={16}/>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cart} onAdd={addToCart} onRemove={removeFromCart} />
    </div>
  );
}

export default App;