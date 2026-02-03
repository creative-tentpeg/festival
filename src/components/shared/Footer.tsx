import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#125427] text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <Image
              src="/images/Celtic-Logo-All-white-2-1024x1024.png"
              alt="Cabarrus Celtic Logo"
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="text-white/80 leading-relaxed">
              Celebrating culture, community, and fun in Cabarrus County through
              exceptional festivals and events.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-heading">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/festivals"
                  className="text-white/80 hover:text-white transition-colors flex items-center hover:translate-x-1"
                >
                  → Festivals
                </Link>
              </li>
              <li>
                <Link
                  href="/calendar"
                  className="text-white/80 hover:text-white transition-colors flex items-center hover:translate-x-1"
                >
                  → Calendar
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors flex items-center hover:translate-x-1"
                >
                  → About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors flex items-center hover:translate-x-1"
                >
                  → Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-heading">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                <span>info@cabarruscelticfestival.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                <span>704.997.1964</span>
              </li>
              <li className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>Concord, NC</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-heading">
              Stay Updated
            </h4>
            <p className="text-white/80 mb-4 text-sm">
              Subscribe for festival updates and news.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-white text-green-700 font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/70 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Cabarrus Festivals. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
