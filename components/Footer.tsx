import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#102a22] text-white py-16 pb-0 text-xs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-white/95 rounded-xl p-2.5 shadow-sm"
              aria-label="Homepage"
            >
              <Image
                src="/media/logo.png"
                alt="Sarker Trims Logo"
                width={200}
                height={45}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 max-w-52">
              B2B manufacturer of garment trims, accessories and leather goods in Dhaka, Bangladesh.
            </p>
            <div className="flex gap-x-4 text-slate-400">
              <a
                href="https://www.facebook.com/tubatrims"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tareq-chy"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>

          <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="mb-4 uppercase tracking-widest font-semibold text-slate-200">
                Quick Links
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link className="hover:text-white transition-colors" href="/gallery">
                    Product Gallery
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/faq">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/contact">
                    Request a Sample
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 uppercase tracking-widest font-semibold text-slate-200">
                Products
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link className="hover:text-white transition-colors" href="/gallery/belt">
                    Leather &amp; PU Belts
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/gallery/woven_belt">
                    Woven Belts
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/gallery/patch">
                    Patches &amp; Badges
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition-colors" href="/gallery/zipper_puller">
                    Zipper Pullers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 uppercase tracking-widest font-semibold text-slate-200">
                Contact
              </p>
              <div className="space-y-3 text-slate-400">
                <div className="flex items-start space-x-2">
                  <MapPin className="size-4 shrink-0 mt-0.5" />
                  <address className="not-italic">
                    <span>30/31 Purana Mugotuli, </span>
                    <br />
                    Dhaka, Bangladesh
                  </address>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="size-4 shrink-0" />
                  <span>+880 1302-250001</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="size-4 shrink-0" />
                  <a
                    href="mailto:info@tubatrims.com"
                    className="hover:text-white transition-colors"
                  >
                    info@tubatrims.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 border-t border-slate-800 py-6 text-center text-slate-400">
          <p>© 2026 Tuba Trims. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
