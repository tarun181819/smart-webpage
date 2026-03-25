import React from 'react';
import { motion } from 'framer-motion';

const StoreSection = () => {
  const stores = [
    { name: "Pharmacy", desc: "Medicines in 10 mins", icon: "💊", color: "bg-red-50" },
    { name: "Pet Care", desc: "Food & Toys", icon: "🐾", color: "bg-orange-50" },
    { name: "Baby Care", desc: "Diapers & More", icon: "👶", color: "bg-blue-50" },
    { name: "Stationary", desc: "Office & School", icon: "✏️", color: "bg-purple-50" }
  ];

  return (
    <section className="my-16">
      <h2 className="text-2xl font-black mb-8 italic">Curated For You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stores.map((store, i) => (
          <motion.div 
            key={i} whileHover={{ scale: 1.02 }}
            className={`${store.color} p-6 rounded-3xl border border-white shadow-sm cursor-pointer flex items-center justify-between group overflow-hidden relative`}
          >
            <div>
              <h3 className="font-black text-lg text-gray-800">{store.name}</h3>
              <p className="text-sm text-gray-600 font-medium">{store.desc}</p>
            </div>
            <span className="text-5xl group-hover:rotate-12 transition-transform">{store.icon}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StoreSection;