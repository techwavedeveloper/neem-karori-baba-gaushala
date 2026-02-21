import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

export default function Navbar({ onOpenCart }: { onOpenCart: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Gaushala', href: '#about' },
    { name: 'Our Products', href: '#shop' },
    { name: 'Donate', href: '#involved' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white shadow-lg">
              <Heart size={24} fill="currentColor" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-lg font-serif font-bold tracking-tight ${scrolled ? 'text-brand-green' : 'text-white'}`}>
                NEEM KARORI BABA
              </span>
              <span className={`text-xs font-medium tracking-[0.2em] ${scrolled ? 'text-stone-500' : 'text-white/70'}`}>
                GAUSHALA
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-green ${scrolled ? 'text-stone-600' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={onOpenCart}
              className={`relative p-2 transition-colors hover:text-brand-green ${scrolled ? 'text-stone-600' : 'text-white'}`}
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="btn-primary text-sm py-2 px-6">
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={onOpenCart}
              className={`relative p-2 ${scrolled ? 'text-stone-900' : 'text-white'}`}
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-stone-900' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-stone-100 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-stone-800 hover:text-brand-green"
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-primary w-full mt-2">
                Donate Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
