import { Link } from "react-router-dom";

function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden"
        >
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/coffee-bg.mp4" type="video/mp4" />
            </video>

            {/* Pehle Wale Exact Overlays */}
            <div className="absolute inset-0 bg-black/65"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0806]/95 via-[#0C0806]/70 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6 lg:px-10">
                <div className="max-w-3xl">

                    {/* Subtitle Badge */}
                    <p className="mb-4 mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#d6a15d] sm:text-sm sm:tracking-[0.35em]">
                        Welcome to Brew & Bean
                    </p>

                    {/* Main Hero Title */}
                    <h1 className="text-4xl font-bold leading-tight text-[#F5E6D3] sm:text-6xl md:text-7xl lg:text-8xl">
                        Fresh Coffee,
                        <br />
                        <span className="italic text-[#d6a15d]">
                            Fresh Mood.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                        Discover the perfect cup crafted with premium beans,
                        passion, and a little bit of magic.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/menu"
                            className="w-full sm:w-auto rounded-xl bg-[#d6a15d] px-8 py-3.5 text-center font-semibold text-[#1c120d] transition-all hover:bg-[#e9bd7d] active:scale-[0.98] shadow-lg shadow-[#d6a15d]/20"
                        >
                            Explore Menu
                        </Link>

                        <Link
                            to="/about"
                            className="w-full sm:w-auto rounded-xl border border-white/30 px-8 py-3.5 text-center font-semibold text-white transition-all hover:border-[#d6a15d] hover:text-[#d6a15d] hover:bg-white/5 active:scale-[0.98]"
                        >
                            Our Story
                        </Link>
                    </div>

                </div>
            </div>

            {/* Pehle Wala Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#0C0806] to-transparent"></div>
        </section>
    );
}

export default Hero;