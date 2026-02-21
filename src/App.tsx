import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FocusAreas from './components/FocusAreas';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ShopSection from './components/ShopSection';
import CheckoutModal from './components/CheckoutModal';
import { CartProvider, useCart } from './context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ShoppingBag, X, Trash2, Plus, Minus } from 'lucide-react';

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutType, setCheckoutType] = useState<'donation' | 'shop' | null>(null);
  const [donationAmount, setDonationAmount] = useState<number>(1000);
  const { cart, total, updateQuantity, removeFromCart } = useCart();

  const handleCheckout = (type: 'donation' | 'shop') => {
    setCheckoutType(type);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        
        {/* Impact Banner */}
        <section className="bg-brand-orange py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Support Gau Seva</h3>
                <p className="text-white/80">Your contribution helps us provide better care for our sacred cows.</p>
              </div>
              <a href="#involved" className="bg-white text-brand-orange px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-all shadow-xl active:scale-95">
                Donate Now
              </a>
            </div>
          </div>
        </section>

        <AboutSection />
        <ShopSection />
        <FocusAreas />

        {/* Donation Section */}
        <section id="involved" className="py-24 bg-brand-green relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/4" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white">
                <h2 className="text-brand-orange font-semibold tracking-widest uppercase text-sm mb-4">Support Our Cause</h2>
                <p className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Every <span className="text-brand-orange italic">Contribution</span> Counts.
                </p>
                <p className="text-white/70 text-lg mb-10 leading-relaxed">
                  Join us in our journey of Gau Seva. Whether you donate your time, money, or resources, you are helping us maintain the sacred tradition of cow protection.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <Heart className="text-brand-orange mb-4" size={32} />
                    <h4 className="font-bold text-xl mb-2">Donate Money</h4>
                    <p className="text-white/50 text-sm">Secure online donations to support our Gaushala maintenance.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <Heart className="text-brand-orange mb-4" size={32} />
                    <h4 className="font-bold text-xl mb-2">Volunteer</h4>
                    <p className="text-white/50 text-sm">Visit us in Noida 144 and offer your service to the cows.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
                <h3 className="text-2xl font-bold text-brand-green mb-8">Make a Donation</h3>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[500, 1000, 2000, 5000, 10000].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setDonationAmount(amt)}
                      className={`py-3 border-2 rounded-xl font-bold transition-all ${donationAmount === amt ? 'border-brand-green bg-green-50 text-brand-green' : 'border-stone-100 text-stone-600 hover:border-brand-green'}`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                  <button className="py-3 border-2 border-stone-100 rounded-xl font-bold text-stone-600 hover:border-brand-green transition-all">
                    Other
                  </button>
                </div>
                
                <button 
                  onClick={() => handleCheckout('donation')}
                  className="btn-primary w-full py-4 text-lg mt-4"
                >
                  Donate Now (₹{donationAmount})
                </button>
                
                <p className="text-center text-stone-400 text-xs mt-6">
                  All donations are tax-exempt under section 80G.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-stone-100 flex justify-between items-center">
                <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2">
                  <ShoppingBag size={24} className="text-brand-green" />
                  Your Shopping Cart
                </h3>
                <button onClick={() => setIsCartOpen(false)} className="text-stone-400 hover:text-stone-600">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-stone-400">
                    <ShoppingBag size={64} className="mb-4 opacity-20" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                      <div className="flex-1">
                        <h4 className="font-bold text-stone-800">{item.name}</h4>
                        <p className="text-brand-green font-serif">₹{item.price}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center border border-stone-200 rounded-lg">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:text-brand-green"><Minus size={16} /></button>
                            <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:text-brand-green"><Plus size={16} /></button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600"><Trash2 size={18} /></button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-stone-100 space-y-4">
                  <div className="flex justify-between text-xl font-bold text-stone-800">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                  <button 
                    onClick={() => handleCheckout('shop')}
                    className="w-full btn-primary py-4 text-lg"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CheckoutModal 
        isOpen={checkoutType !== null} 
        onClose={() => setCheckoutType(null)} 
        type={checkoutType || 'shop'}
        amount={donationAmount}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}


