import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart, Product } from '../context/CartContext';

// Static products removed, now fetching from backend

export default function ShopSection() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-24 text-center bg-stone-50">
        <div className="animate-pulse text-brand-green font-medium">Loading organic products...</div>
      </div>
    );
  }

  return (
    <section id="shop" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-semibold tracking-widest uppercase text-sm mb-4">Our Products</h2>
          <p className="text-4xl md:text-5xl font-bold text-brand-green mb-6">Organic Gaushala Products</p>
          <p className="text-stone-600 text-lg">
            Every purchase supports the maintenance and care of our cows at Neem Karori Baba Gaushala.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="product-card group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-green shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-stone-800">{product.name}</h3>
                  <div className="flex items-center text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="text-xs font-bold ml-1">4.9</span>
                  </div>
                </div>
                <p className="text-2xl font-serif font-bold text-brand-green mb-6">₹{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
