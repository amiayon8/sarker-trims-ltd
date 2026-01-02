import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 py-20 border-slate-900 border-t text-slate-400">
      <div className="mx-auto px-4 container">
        <div className="gap-12 grid md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div>
            {/* Brand */}
            <Link href="/">
              <Image src="/media/logo.png" width={300} height={50} alt='Sarker Trims Limited' className='brightness-0 invert my-auto w-auto h-10 sm:h-14 filter' />
            </Link>

            <p className="mb-6 leading-relaxed">
              Global leaders in RMG accessory solutions. Delivering excellence, reliability, and precision to the garment industry since 2016.
            </p>
            <div className="flex gap-4">
              <div className="flex justify-center items-center bg-slate-900 hover:bg-red-700 rounded-full w-10 h-10 hover:text-white transition-all cursor-pointer">
                <Facebook size={18} />
              </div>
              <div className="flex justify-center items-center bg-slate-900 hover:bg-red-700 rounded-full w-10 h-10 hover:text-white transition-all cursor-pointer">
                <Twitter size={18} />
              </div>
              <div className="flex justify-center items-center bg-slate-900 hover:bg-red-700 rounded-full w-10 h-10 hover:text-white transition-all cursor-pointer">
                <Linkedin size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-bold text-white text-lg">Navigations</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about-us' },
                { name: 'Board', href: '/board-of-directors' },
                { name: 'Products', href: '/product-range' },
                { name: 'Machineries', href: '/machineries' },
                { name: 'Service', href: '/our-service' },
                { name: 'Policy', href: '/our-policy' },
                { name: 'Contact', href: '/contact-us' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="flex items-center gap-2 hover:text-red-500 transition-colors">
                    <ChevronRight size={14} className="text-red-600" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div>
            <h4 className="mb-6 font-bold text-white text-lg">Corporate Office</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-red-600 shrink-0" size={20} />
                <span>House # 9, Road # 12, Sector # 11, Uttara, Dhaka-1230, Bangladesh</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-red-600 shrink-0" size={20} />
                <span>+8801xxxxxxxxx</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-red-600 shrink-0" size={20} />
                <span>sarkertrims@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <Globe className="text-red-600 shrink-0" size={20} />
                <span>www.sarkertrims.com</span>
              </li>
            </ul>
          </div>

          {/* Contact Person Summary */}
          <div>
            <h4 className="mb-6 font-bold text-white text-lg">Management</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="bg-slate-900/50 p-4 border border-slate-800 rounded-xl w-full">
                  <p className="mb-1 font-bold text-white">Mr. Nitya Gopal Sarker</p>
                  <p className="mb-4 font-bold text-red-500 text-xs uppercase tracking-tighter">Managing Director</p>
                  <div className="flex items-center gap-2 mb-1">
                    <Mail className="text-slate-600 shrink-0" size={16} />
                    <span>gopal8824@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="text-slate-600 shrink-0" size={16} />
                    <span>+8801xxxxxxxxx</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center gap-4 pt-10 border-slate-900 border-t text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Sarker Trims Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/our-policy" className="hover:text-white transition-colors">Policy</Link>
            <Link href="/about-us" className="hover:text-white transition-colors">At A Glance</Link>
          </div>
        </div>
      </div>
    </footer >
  );
};
