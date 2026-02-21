import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CreditCard, ShieldCheck, CheckCircle2, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'donation' | 'shop';
  amount?: number;
}

export default function CheckoutModal({ isOpen, onClose, type, amount }: CheckoutModalProps) {
  const { total, clearCart } = useCart();
  const [step, setStep] = useState<'details' | 'payment' | 'processing' | 'success'>('details');
  const finalAmount = type === 'donation' ? amount : total;

  const handleProcess = () => {
    setStep('processing');
    setTimeout(() => {
      setStep('success');
      if (type === 'shop') clearCart();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-stone-400 hover:text-stone-600 z-10"
          >
            <X size={24} />
          </button>

          <div className="p-8">
            {step === 'details' && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-brand-green">Checkout Details</h3>
                  <p className="text-stone-500">Please provide your information</p>
                </div>
                <div className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-green outline-none" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-green outline-none" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-green outline-none" />
                  <textarea placeholder="Shipping Address" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-green outline-none h-24" />
                </div>
                <button
                  onClick={() => setStep('payment')}
                  className="w-full btn-primary py-4 text-lg"
                >
                  Continue to Payment (₹{finalAmount})
                </button>
              </div>
            )}

            {step === 'payment' && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-brand-green">Payment Method</h3>
                  <p className="text-stone-500">Secure Payment Gateway</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 border-2 border-brand-green rounded-2xl bg-green-50 flex flex-col items-center gap-2 cursor-pointer">
                    <CreditCard className="text-brand-green" />
                    <span className="text-xs font-bold">Card / UPI</span>
                  </div>
                  <div className="p-4 border-2 border-stone-100 rounded-2xl flex flex-col items-center gap-2 cursor-pointer opacity-50">
                    <CreditCard className="text-stone-400" />
                    <span className="text-xs font-bold">Net Banking</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <input type="text" placeholder="Card Number" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-green outline-none" />
                    <div className="absolute right-4 top-3.5 flex gap-2">
                      <div className="w-8 h-5 bg-stone-200 rounded" />
                      <div className="w-8 h-5 bg-stone-200 rounded" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-green outline-none" />
                    <input type="text" placeholder="CVV" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-green outline-none" />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-stone-400 text-xs justify-center">
                  <ShieldCheck size={16} />
                  <span>Your payment is secured with 256-bit encryption</span>
                </div>

                <button
                  onClick={handleProcess}
                  className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-3"
                >
                  Pay Now ₹{finalAmount}
                </button>
              </div>
            )}

            {step === 'processing' && (
              <div className="py-20 flex flex-col items-center text-center">
                <Loader2 className="animate-spin text-brand-green mb-6" size={64} />
                <h3 className="text-2xl font-bold text-stone-800 mb-2">Processing Payment</h3>
                <p className="text-stone-500">Please do not refresh or close the window...</p>
              </div>
            )}

            {step === 'success' && (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-bold text-stone-800 mb-2">Payment Successful!</h3>
                <p className="text-stone-500 mb-8">
                  {type === 'donation' 
                    ? 'Thank you for your generous donation to Neem Karori Baba Gaushala.' 
                    : 'Your order has been placed successfully. You will receive an email confirmation shortly.'}
                </p>
                <button
                  onClick={onClose}
                  className="btn-primary px-10"
                >
                  Back to Home
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
