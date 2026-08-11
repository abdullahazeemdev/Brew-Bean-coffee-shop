function Navbar() {
    return (
        <nav className="absolute top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

                <a href="#" className="text-2xl font-bold tracking-wide text-[#F5E6D3]">
                    Brew<span className="text-[#C89B5C]"> & Bean</span>
                </a>



                <ul className="item-center gap-8 md:flex ">

                    <li>
                        <a
                            href="#home"
                            className="text-sm text-white/80 transition hover:text-[#C89B5C]">
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#menu"
                            className="text-sm text-white/80 transition hover:text-[#C89B5C]">
                            Menu
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="text-sm text-white/80 transition hover:text-[#C89B5C]">
                            About
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#contact"
                        className="text-sm text-white/80 transition hover:text-[#C89B5C]">
                        Contact      
                        </a>
                    </li>

                </ul>

                <button className="rounded-full border border-[#C89B5C] px-5 py-2 text-sm 
                text-[#F5E6D3] transition hover:bg-[#C89B5C] hover:text-[#0C0806]">
                    Order Now
                </button>

            </div>

        </nav>
    );
};

export default Navbar;