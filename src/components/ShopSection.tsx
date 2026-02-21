import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart, Product } from '../context/CartContext';

const products: Product[] = [
  {
    id: '1',
    name: 'Pure A2 Desi Cow Ghee',
    price: 1200,
    category: 'Dairy',
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '2',
    name: 'Gomaya Incense Sticks',
    price: 150,
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1602848597941-0d3d3a2c1241?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '3',
    name: 'Panchagavya Herbal Soap',
    price: 85,
    category: 'Personal Care',
    image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '4',
    name: 'Organic Cow Dung Fertilizer',
    price: 250,
    category: 'Agriculture',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '5',
    name: 'Gomutra Ark (Distilled)',
    price: 180,
    category: 'Health',
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '6',
    name: 'Handmade Cow Dung Diyas',
    price: 120,
    category: 'Decor',
    image: 'https://images.unsplash.com/photo-1573408302185-9146fe634ad0?auto=format&fit=crop&w=400&q=80',
  },
];

export default function ShopSection() {
  const { addToCart } = useCart();

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
