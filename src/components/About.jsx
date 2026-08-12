function About() {
  return (
    <section
      id="about"
      className="bg-[#0C0806] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=80"
              alt="Brew and Bean coffee shop"
              className="h-[450px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Small badge */}
          <div className="absolute -bottom-6 right-6 rounded-2xl border border-[#C89B5C]/30 bg-[#1A0F0A] px-6 py-4 shadow-2xl">
            <p className="text-2xl font-semibold text-[#C89B5C]">
              10+
            </p>

            <p className="text-xs text-white/50">
              Coffee Varieties
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#C89B5C]">
            Our Story
          </p>

          <h2 className="text-5xl leading-tight text-[#F5E6D3]">
            More Than Just
            <br />
            <span className="italic text-[#C89B5C]">
              A Cup of Coffee
            </span>
          </h2>

          <p className="mt-6 leading-8 text-white/60">
            At Brew & Bean, we believe every cup tells a story.
            We carefully select premium coffee beans and craft
            every drink with passion and attention to detail.
          </p>

          <p className="mt-4 leading-8 text-white/60">
            Whether you're starting your morning, catching up
            with friends, or simply taking a break, we're here
            to make your coffee moment special.
          </p>

          {/* Features */}
          <div className="mt-8 grid grid-cols-2 gap-5">

            <div className="border-l-2 border-[#C89B5C] pl-4">
              <h3 className="text-lg text-[#F5E6D3]">
                Premium Beans
              </h3>
              <p className="mt-1 text-sm text-white/40">
                Carefully selected
              </p>
            </div>

            <div className="border-l-2 border-[#C89B5C] pl-4">
              <h3 className="text-lg text-[#F5E6D3]">
                Freshly Brewed
              </h3>
              <p className="mt-1 text-sm text-white/40">
                Made with passion
              </p>
            </div>

          </div>

          <button className="mt-8 rounded-full border border-[#C89B5C] px-7 py-3 text-sm font-medium text-[#C89B5C] transition duration-300 hover:bg-[#C89B5C] hover:text-[#0C0806]">
            Discover Our Story
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;