import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, X } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cartItems, onAdd, onRemove }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-black">My Cart ({cartItems.length})</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <AnimatePresence>
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                    <span className="text-6xl mb-4">🛒</span>
                    <p className="font-bold">Your cart is empty</p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <motion.div 
                      key={item.id} layout
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, x: 50 }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100"
                    >
                      <div className="text-3xl bg-white p-3 rounded-xl shadow-sm">{item.img}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm text-gray-800">{item.name}</h4>
                        <p className="text-xs text-gray-500 font-bold mb-2">₹{item.price}</p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 bg-white border border-gray-200 w-fit rounded-lg px-2 py-1">
                          <button onClick={() => onRemove(item.id)} className="text-green-700 hover:bg-green-50 p-1 rounded">
                            {item.quantity === 1 ? <Trash2 size={14} className="text-red-500" /> : <Minus size={14} />}
                          </button>
                          <span className="text-xs font-black w-4 text-center">{item.quantity}</span>
                          <button onClick={() => onAdd(item)} className="text-green-700 hover:bg-green-50 p-1 rounded">
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-black text-sm">₹{item.price * item.quantity}</p>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Footer / Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between font-black text-xl mb-6">
                  <span>Grand Total</span>
                  <span className="text-green-700">₹{totalPrice}</span>
                </div>
                <button className="w-full bg-[#0C831F] py-4 rounded-2xl text-white font-black text-lg shadow-lg shadow-green-900/20 active:scale-[0.98] transition-all">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;