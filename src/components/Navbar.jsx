function Navbar() {
    return (
        <nav className="absolute top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

                <a href="#" className="text-2x1 font-bold tracking-wide text-[#F5E6D3]">
                    Brew<span>& Bean</span>
                </a>

        

                <ul>

                    <li>Home</li>
                    <li>Menu</li>
                    <li>About</li>
                    <li>Contact</li>

                </ul>

            </div>

        </nav>
    );
};

export default Navbar;