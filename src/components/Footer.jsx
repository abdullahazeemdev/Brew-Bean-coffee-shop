function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[#080503] px-6 pt-16 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Footer Main */}
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl text-[#F5E6D3]">
              Brew<span className="text-[#C89B5C]"> & Bean</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
              Your cozy corner for freshly brewed coffee,
              delicious flavors, and unforgettable moments.
            </p>

            <button className="mt-6 rounded-full bg-[#C89B5C] px-6 py-3 text-sm font-medium text-[#0C0806] transition hover:bg-[#F5E6D3]">
              Visit Us
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg text-[#F5E6D3]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a
                  href="#home"
                  className="transition hover:text-[#C89B5C]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#menu"
                  className="transition hover:text-[#C89B5C]"
                >
                  Our Menu
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition hover:text-[#C89B5C]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-[#C89B5C]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg text-[#F5E6D3]">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm text-white/50">
              <li>123 Coffee Street</li>
              <li>Karachi, Pakistan</li>
              <li>+92 300 1234567</li>
              <li>hello@brewandbean.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Brew & Bean. All Rights Reserved.
          </p>

          <p>
            Crafted with passion & coffee.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;