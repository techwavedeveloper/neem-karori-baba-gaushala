import React from 'react';
import { BookOpen, Heart, Leaf, Users, ShieldCheck, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

const areas = [
  {
    icon: <Heart size={32} />,
    title: 'Cow Protection',
    description: 'Providing a safe and healthy environment for abandoned and old cows with proper medical care.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: <Leaf size={32} />,
    title: 'Organic Farming',
    description: 'Using cow dung and urine to produce organic fertilizers and pesticides for sustainable agriculture.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: <Users size={32} />,
    title: 'Gau Seva',
    description: 'Encouraging community participation in serving cows and understanding their spiritual importance.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'A2 Dairy Products',
    description: 'Producing pure A2 milk and ghee using traditional bilona methods for health and wellness.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <GraduationCap size={32} />,
    title: 'Vedic Education',
    description: 'Teaching the importance of cows in Indian culture and the science of Panchagavya.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: <BookOpen size={32} />,
    title: 'Research & Development',
    description: 'Developing new products from cow-derived materials to make Gaushalas self-sustainable.',
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function FocusAreas() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-semibold tracking-widest uppercase text-sm mb-4">Our Mission</h2>
          <p className="text-4xl md:text-5xl font-bold text-brand-green mb-6">Gaushala Initiatives</p>
          <p className="text-stone-600 text-lg">
            Our work goes beyond just sheltering cows; we aim to create a sustainable ecosystem based on Vedic principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-xl hover:border-transparent transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {area.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">{area.title}</h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                {area.description}
              </p>
              <a href="#" className="text-brand-orange font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <span className="text-lg">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
