import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      {/* Main Footer Content */}
      <div className="footer max-w-7xl mx-auto p-10 flex flex-col md:flex-row justify-between gap-10">
        <aside className="max-w-xs">
          <Logo />
          <p className="mt-4 opacity-70 leading-relaxed">
            Premium educational toys designed for cognitive development. Making
            learning a joyful adventure for every child.
          </p>
          <div className="flex gap-4 mt-6">
            <a className="text-2xl hover:text-primary transition-colors cursor-pointer">
              <FaFacebook />
            </a>
            <a className="text-2xl hover:text-primary transition-colors cursor-pointer">
              <FaInstagram />
            </a>
            <a className="text-2xl hover:text-primary transition-colors cursor-pointer">
              <FaTwitter />
            </a>
            <a className="text-2xl hover:text-primary transition-colors cursor-pointer">
              <FaYoutube />
            </a>
          </div>
        </aside>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title opacity-100 font-bold text-white mb-2">
              Shop
            </h6>
            <Link
              href="/products"
              className="link link-hover opacity-70 hover:opacity-100 transition-opacity"
            >
              Educational Toys
            </Link>
            <Link
              href="/products"
              className="link link-hover opacity-70 hover:opacity-100 transition-opacity"
            >
              Puzzle Sets
            </Link>
            <Link
              href="/products"
              className="link link-hover opacity-70 hover:opacity-100 transition-opacity"
            >
              Creative Art
            </Link>
            <Link
              href="/products"
              className="link link-hover opacity-70 hover:opacity-100 transition-opacity"
            >
              New Arrivals
            </Link>
          </nav>

          <nav className="flex flex-col gap-2">
            <h6 className="footer-title opacity-100 font-bold text-white mb-2">
              Support
            </h6>
            <Link
              href="/contact"
              className="link link-hover opacity-70 hover:opacity-100 transition-opacity"
            >
              Contact Us
            </Link>
            <Link
              href="/blogs"
              className="link link-hover opacity-70 hover:opacity-100 transition-opacity"
            >
              Parenting Blog
            </Link>
            <Link
              href="/faq"
              className="link link-hover opacity-70 hover:opacity-100 transition-opacity"
            >
              FAQs
            </Link>
            <Link
              href="/shipping"
              className="link link-hover opacity-70 hover:opacity-100 transition-opacity"
            >
              Shipping Info
            </Link>
          </nav>

          <nav className="flex flex-col gap-2">
            <h6 className="footer-title opacity-100 font-bold text-white mb-2">
              Legal
            </h6>
            <Link
              href="/terms"
              className="link link-hover opacity-70 hover:opacity-100 transition-opacity"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              className="link link-hover opacity-70 hover:opacity-100 transition-opacity"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="link link-hover opacity-70 hover:opacity-100 transition-opacity"
            >
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="border-t border-white/5 bg-neutral-focus">
        <div className="max-w-7xl mx-auto px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-50 font-medium">
          <p>© {new Date().getFullYear()} Kids Zone. All rights reserved.</p>
          <div className="flex gap-6">
            <p>Built with ❤️ for little explorers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
