import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0c0a09] text-[#f5f0e8] border-t border-[#3a2c25]">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-[#d6a06a]">
              Brew & Bean
            </h2>

            <p className="mt-4 text-[#a8a29e] leading-7">
              Freshly brewed coffee, delicious flavors, and a cozy
              experience made just for you.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full
                bg-[#1c1714] border border-[#3a2c25]
                hover:bg-[#d6a06a] hover:text-black transition"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full
                bg-[#1c1714] border border-[#3a2c25]
                hover:bg-[#d6a06a] hover:text-black transition"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full
                bg-[#1c1714] border border-[#3a2c25]
                hover:bg-[#d6a06a] hover:text-black transition"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full
                bg-[#1c1714] border border-[#3a2c25]
                hover:bg-[#d6a06a] hover:text-black transition"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-[#d6a06a]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-[#a8a29e]">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#d6a06a] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/menu"
                  className="hover:text-[#d6a06a] transition"
                >
                  Coffee Menu
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-[#d6a06a] transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#d6a06a] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-[#d6a06a]">
              Customer Care
            </h3>

            <ul className="space-y-3 text-[#a8a29e]">
              <li>
                <a href="#" className="hover:text-[#d6a06a] transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#d6a06a] transition">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#d6a06a] transition">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#d6a06a] transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-[#d6a06a]">
              Contact Us
            </h3>

            <div className="space-y-4 text-[#a8a29e]">

              <p className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot text-[#d6a06a] mt-1"></i>
                <span>Karachi, Pakistan</span>
              </p>

              <p className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-[#d6a06a]"></i>
                <span>+92 300 1234567</span>
              </p>

              <p className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-[#d6a06a]"></i>
                <span>hello@brewandbean.com</span>
              </p>

              <p className="flex items-center gap-3">
                <i className="fa-solid fa-clock text-[#d6a06a]"></i>
                <span>Mon - Sun: 8AM - 11PM</span>
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#3a2c25]">

        <div className="max-w-7xl mx-auto px-6 py-5
          flex flex-col md:flex-row
          items-center justify-between gap-3">

          <p className="text-sm text-[#78716c]">
            © 2026 Brew & Bean. All rights reserved.
          </p>

          <p className="text-sm text-[#78716c]">
            Made with <span className="text-red-500">♥</span> and coffee ☕
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

