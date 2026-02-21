import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white">
                <Heart size={24} fill="currentColor" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight uppercase">Neem Karori Baba Gaushala</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              A Sammaan Foundation initiative dedicated to the protection and welfare of cows in Noida 144.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              {['About Us', 'Our Projects', 'Get Involved', 'Media Center', 'Success Stories', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-brand-orange transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-orange shrink-0" size={20} />
                <span>Noida, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-orange shrink-0" size={20} />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-orange shrink-0" size={20} />
                <span>info@hindrise.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/60 mb-6">Subscribe to get updates on our latest projects and impact.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
              />
              <button className="btn-primary w-full">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Neem Karori Baba Gaushala. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
