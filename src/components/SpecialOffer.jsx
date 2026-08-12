function SpecialOffer() {
  return (
    <section className="bg-[#0C0806] px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-[#C89B5C]/30 bg-gradient-to-br from-[#2A1810] to-[#120B08] px-8 py-14 text-center sm:px-12">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C89B5C]/10 blur-2xl"></div>

          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#6F4E37]/20 blur-2xl"></div>

          {/* Content */}
          <div className="relative z-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#C89B5C]">
              Limited Time Offer
            </p>

            <h2 className="text-4xl text-[#F5E6D3] sm:text-5xl">
              Buy 2 Coffees
            </h2>

            <p className="mt-3 text-2xl italic text-[#C89B5C]">
              Get 1 Free
            </p>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              Share the coffee love with your friends and enjoy
              your favorite drinks together.
            </p>

            <button className="mt-8 rounded-full bg-[#C89B5C] px-8 py-3 font-medium text-[#0C0806] transition duration-300 hover:bg-[#F5E6D3] hover:scale-105">
              Claim Offer
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;