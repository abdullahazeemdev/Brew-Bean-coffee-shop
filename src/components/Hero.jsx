function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden"
        >
            {/* background video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/coffee-bg.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/65"></div>

           
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0806]/95 via-[#0C0806]/70 to-transparent"></div>

            {/* content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 sm:px-8 lg:px-10">
                <div className="max-w-3xl">

                  
                    <p className="mb-4 mt-4 text-xs font-medium uppercase tracking-[0.25em] text-[#C89B5C] sm:text-sm sm:tracking-[0.35em]">
                        Welcome to Brew & Bean
                    </p>

                   
                    <h1 className="text-4xl font-semibold leading-tight text-[#F5E6D3] sm:text-6xl md:text-7xl lg:text-8xl">
                        Fresh Coffee,
                        <br />
                        <span className="italic text-[#C89B5C]">
                            Fresh Mood.
                        </span>
                    </h1>

                   
                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                        Discover the perfect cup crafted with premium beans,
                        passion, and a little bit of magic.
                    </p>

                    
                    <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">

                        <a
                            href="#menu"
                            className="w-full rounded-full bg-[#C89B5C] px-7 py-3 text-center font-medium text-[#0C0806] transition hover:bg-[#F5E6D3] sm:w-auto"
                        >
                            Explore Menu
                        </a>

                        <a
                            href="#about"
                            className="w-full rounded-full border border-white/30 px-7 py-3 text-center font-medium text-white transition hover:border-[#C89B5C] hover:text-[#C89B5C] sm:w-auto"
                        >
                            Our Story
                        </a>

                    </div>
                </div>
            </div>

            
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#0C0806] to-transparent"></div>
        </section>
    );
}

export default Hero;