import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=1920&q=80"
          alt="Desi Cow at Gaushala"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-sm font-semibold mb-6 backdrop-blur-sm border border-brand-orange/30">
              By Sammaan Foundation • Noida 144
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              Neem Karori Baba <span className="text-brand-orange italic">Gaushala</span>.
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              Serving the sacred cow with love and devotion. Explore our range of organic, handmade products that support cow protection and welfare.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#shop" className="btn-primary flex items-center gap-2 group">
                Shop Our Products
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="flex items-center gap-3 text-white font-medium hover:text-brand-orange transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm transition-transform hover:scale-110">
                  <Play size={20} fill="currentColor" />
                </div>
                View Gaushala
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white"
        >
          <div className="flex gap-10">
            <div>
              <p className="text-3xl font-bold text-brand-orange">50k+</p>
              <p className="text-sm text-white/60">Lives Impacted</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div>
              <p className="text-3xl font-bold text-brand-orange">200+</p>
              <p className="text-sm text-white/60">Projects Done</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
