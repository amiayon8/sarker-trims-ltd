"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const images = [
  '/media/carousel1.png',
  '/media/carousel2.png',
  '/media/carousel3.png',
  '/media/carousel4.png'
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative bg-slate-900 h-[400px] lg:h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            fill
            src={images[currentIndex]}
            alt="Factory"
            className="opacity-60 w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center bg-gradient-to-t from-slate-950 via-transparent to-transparent">
        <div className="mx-auto px-4 container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="mb-6 font-bold text-white text-4xl lg:text-7xl">
              Precision Engineering in <span className="text-red-500">RMG Accessories</span>
            </h1>
            <p className="mb-10 text-slate-300 text-xl leading-relaxed">
              Leading manufacturer of quality elastics, woven labels, and packaging solutions since 2016. High-tech machinery meets artisanal craftsmanship.
            </p>
            <div className="flex gap-4">
              <button className="bg-red-700 hover:bg-red-800 shadow-lg hover:shadow-red-900/40 px-8 py-4 rounded-full font-bold text-white transition-all">
                Explore Products
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-4 border border-white/30 rounded-full font-bold text-white transition-all">
                View Factory
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="top-1/2 left-4 z-10 absolute bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full text-white transition-all -translate-y-1/2"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="top-1/2 right-4 z-10 absolute bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full text-white transition-all -translate-y-1/2"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="bottom-10 left-1/2 absolute flex gap-3 -translate-x-1/2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-12 h-1 rounded-full transition-all ${currentIndex === i ? 'bg-red-600 w-20' : 'bg-white/40'
              }`}
          />
        ))}
      </div>
    </section>
  );
};
