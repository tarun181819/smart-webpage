import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const ProductCard = ({ product, cartItems, onAdd, onRemove }) => {
  // Check if this product is in cart to show quantity
  const cartItem = cartItems.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white border border-gray-200 rounded-2xl p-3 flex flex-col hover:shadow-xl transition-all group"
    >
      <div className="h-32 bg-gray-50 rounded-xl flex items-center justify-center text-5xl mb-3 relative overflow-hidden">
        <span className="group-hover:scale-110 transition-transform duration-300">{product.img}</span>
        <div className="absolute top-2 left-2 bg-white px-2 py-0.5 rounded shadow-sm">
          <span className="text-[10px] font-bold tracking-tighter">⏱️ 8 MINS</span>
        </div>
      </div>
      
      <h3 className="text-[13px] font-bold text-gray-800 line-clamp-2 h-10 mb-1 leading-tight">
        {product.name}
      </h3>
      <p className="text-xs text-gray-500 mb-4">{product.weight}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="font-black text-sm">₹{product.price}</span>

        {/* --- Quantity Toggle Logic --- */}
        <div className="w-20 h-8 relative">
          <AnimatePresence mode="wait">
            {quantity === 0 ? (
              <motion.button
                key="add-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => onAdd(product)}
                className="w-full h-full border border-[#0C831F] text-[#0C831F] rounded-lg font-black text-xs hover:bg-green-50 transition-colors bg-white shadow-sm"
              >
                ADD
              </motion.button>
            ) : (
              <motion.div
                key="qty-btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-full h-full bg-[#0C831F] text-white rounded-lg flex items-center justify-between px-2 shadow-md"
              >
                <button 
                  onClick={() => onRemove(product.id)} // Corrected Function Name
                  className="hover:scale-120 transition-transform p-1"
                >
                  <Minus size={14} strokeWidth={3} />
                </button>
                <span className="text-xs font-black">{quantity}</span>
                <button 
                  onClick={() => onAdd(product)} 
                  className="hover:scale-120 transition-transform p-1"
                >
                  <Plus size={14} strokeWidth={3} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;