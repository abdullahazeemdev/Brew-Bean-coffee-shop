function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen item-center overflow-hidden"
        >

            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="../public/coffe-bg.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/65"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0806]/95 via-[#0C0806]/60 to-transparent"></div>

            {/* {content} */}

            <div className="relative z-10 mx-auto w-full max-w-7x1 px-6 pt-20 lg:px-10">
                <div className="max-w-3x1">

                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#C89B5C] mt-4">
                        Welcome to Brew & Bean
                    </p>

                    <h1 className="text-6x1 leading-tight text-[#F5E6D3] sm:text-7xl lg:text-8xl">
                        Fresh Coffee,
                        <br />
                        <span className="italic text-[#C89B5C]">
                            Fresh Mood.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-x1 text-base leading-8 text-white/70 sm:text-lg">
                        Discover the perfect cup crafted with premium beans,
                        passion, and a little bit of magic.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#menu"
                            className="rounded-full bg-[#C89B5C] px-7 py-3 font-medium text-[#0C0806] transition hover:bg-[#F5E6D3]"
                        >
                            Explore Menu

                        </a>

                        <a
                            href="#about"
                            className="rounded-full border border-white/30 px-7 py-3 font-medium text-white transition hover:border-[#C89B5C] hover:text-[#C89B5C]"
                        >
                            Our Story
                        </a>


                    </div>


                </div>

            </div>

            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#0C0806] to-transparent"></div>





        </section>
    );
};

export default Hero