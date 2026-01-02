"use client"

import { useState, useEffect } from 'react';
// Import AnimatePresence from framer-motion to support entry/exit animations for the mobile menu
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Facebook, Twitter, Linkedin, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname(); // returns current URL path, e.g. "/about-us"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Board', href: '/board-of-directors' },
    { name: 'Products', href: '/product-range' },
    { name: 'Machineries', href: '/machineries' },
    { name: 'Service', href: '/our-service' },
    { name: 'Policy', href: '/our-policy' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-slate-900 py-2 text-white">
        <div className="flex justify-between items-center mx-auto px-4 text-sm container">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-red-500" /> +88-01880-169601</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-red-500" /> info@sarkertrims.com</span>
          </div>
          <div className="flex gap-4">
            <Facebook size={16} className="hover:text-red-500 transition-colors cursor-pointer" />
            <Twitter size={16} className="hover:text-red-500 transition-colors cursor-pointer" />
            <Linkedin size={16} className="hover:text-red-500 transition-colors cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 py-4 ${isScrolled ? 'glass-card backdrop-blur-sm shadow-lg' : 'bg-white dark:bg-slate-950'}`}
      >
        <div className="flex justify-between items-center gap-2 mx-auto px-4 container">
          <Image src="/media/logo.png" width={300} height={50} alt='Sarker Trims Limited' className='dark:brightness-0 dark:invert my-auto w-auto h-10 sm:h-14 dark:filter'></Image>

          <nav className="hidden lg:flex gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium ${isActive ? 'text-black dark:text-white' : 'text-slate-600 hover:text-red-600 dark:hover:text-red-400 dark:text-slate-400'} transition-colors`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <button
            className="lg:hidden p-2 text-slate-900 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-slate-900 dark:border-slate-800 border-t overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="pb-2 border-slate-100 dark:border-slate-800 border-b font-medium text-slate-600 dark:text-slate-300 text-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
