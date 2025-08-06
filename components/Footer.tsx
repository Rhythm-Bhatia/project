'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gray-300">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-red-500 fill-current" />
            </motion.div>
            <span className="text-gray-300">by Rhythm Bhatia</span>
          </div>
          
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved. Built with Next.js, TypeScript, and Framer Motion.
          </p>
          
          <div className="mt-6 flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-8 h-8 border-2 border-dashed border-blue-500/30 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}