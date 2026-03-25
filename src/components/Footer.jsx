import React from 'react';
// Sirf basic icons jo har version mein hote hain
import { Globe, Mail, Phone, Shield, ArrowRight, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-gray-400 py-16 px-6 md:px-20 mt-20 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="bg-green-600 p-1.5 rounded-lg">
                <Zap size={20} fill="white" />
              </div>
              <span className="text-2xl font-black tracking-tighter">OLD<span className="text-green-500">Farmer</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-6 opacity-70">
              Redefining the way you shop for daily essentials. Experience speed, quality, and convenience at your fingertips.
            </p>
            <div className="flex gap-3">
              {[Globe, Mail, Phone].map((Icon, i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all cursor-pointer">
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-green-500 cursor-pointer transition-colors">Browse Products</li>
              <li className="hover:text-green-500 cursor-pointer transition-colors">Weekly Deals</li>
              <li className="hover:text-green-500 cursor-pointer transition-colors">Personalized Kits</li>
              <li className="hover:text-green-500 cursor-pointer transition-colors">Store Locator</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-green-500 cursor-pointer transition-colors">Our Story</li>
              <li className="hover:text-green-500 cursor-pointer transition-colors">Sustainability</li>
              <li className="hover:text-green-500 cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-green-500 cursor-pointer transition-colors">Terms of Service</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Stay Updated</h4>
            <p className="text-xs mb-4 opacity-60">Get exclusive offers and news directly in your inbox.</p>
            <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 focus-within:border-green-600 transition-all">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-none outline-none px-3 text-xs w-full text-white"
              />
              <button className="bg-green-600 p-2 rounded-lg text-white hover:bg-green-500 transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-40">
            <Shield size={12} /> Secure Checkout Guaranteed
          </div>
          <p className="text-[10px] font-medium opacity-40 uppercase tracking-[0.2em]">
            © 2026 OLDFarmer Ecosystems. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase">
             <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
             <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;