import React from 'react';

const categories = [
  { name: 'Vegetables', icon: '🥦' },
  { name: 'Dairy & Bread', icon: '🥛' },
  { name: 'Munchies', icon: '🍿' },
  { name: 'Cold Drinks', icon: '🥤' },
  { name: 'Meat & Eggs', icon: '🥩' },
  { name: 'Breakfast', icon: '☕' },
  { name: 'Pet Care', icon: '🐾' },
  { name: 'Cleaning', icon: '🧹' }, // Added a few more for better scrolling
  { name: 'Baby Care', icon: '👶' },
];

const CategoryBar = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex gap-4 overflow-x-auto py-6 no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <div key={cat.name} className="flex-shrink-0 group cursor-pointer text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm group-hover:shadow-md group-hover:border-green-200 group-hover:bg-white flex items-center justify-center text-3xl transition-all duration-300 transform group-hover:-translate-y-1">
                {cat.icon}
              </div>
              <span className="text-[11px] md:text-xs font-bold text-gray-600 mt-3 block group-hover:text-green-700 transition-colors tracking-tight">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBar;