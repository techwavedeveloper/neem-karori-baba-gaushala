import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#fdfcfb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1597113366853-9a93ad3eff2a?auto=format&fit=crop&w=800&q=80"
                alt="Cow care at Sammaan Gaushala"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-green/10 rounded-full blur-3xl" />
            
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
              <p className="text-4xl font-bold text-brand-orange">10+</p>
              <p className="text-stone-600 font-medium">Years of Experience</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand-orange font-semibold tracking-widest uppercase text-sm mb-4">About the Gaushala</h2>
              <p className="text-4xl md:text-5xl font-bold text-brand-green mb-8 leading-tight">
                Dedicated to <span className="text-brand-orange italic">Gau Seva</span> and Protection.
              </p>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                Neem Karori Baba Gaushala, an initiative by Sammaan Foundation, is located in Noida Sector 144. We provide a safe haven for cows, ensuring they receive the best care, nutrition, and medical attention.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'Pure A2 Milk and Ghee Production',
                  'Organic Farming and Fertilizers',
                  'Spiritual and Peaceful Environment',
                  'Community Awareness Programs'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-green" size={24} />
                    <span className="text-stone-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-6">
                <button className="btn-primary">Our Full Story</button>
                <button className="btn-secondary">Meet Our Team</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
