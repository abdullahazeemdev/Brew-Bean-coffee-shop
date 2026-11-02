
import { NavLink, Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../Firebase/config";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const auth = getAuth(app);

function Navbar() {
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out from your account.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Logout",
            cancelButtonText: "No",
            confirmButtonColor: "#C89B5C",
            cancelButtonColor: "#555",
            background: "#0C0806",
            color: "#F5E6D3",
        });

        if (result.isConfirmed) {
            try {
                await signOut(auth);
                setMenuOpen(false);

                Swal.fire({
                    title: "Logged Out!",
                    text: "You have been successfully logged out.",
                    icon: "success",
                    confirmButtonColor: "#C89B5C",
                    background: "#0C0806",
                    color: "#F5E6D3",
                });
            } catch (error) {
                console.log("Logout Error:", error);
            }
        }
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const navLinkClass = ({ isActive }) =>
        `block text-sm sm:text-base font-medium transition-all duration-200 hover:text-[#C89B5C] ${
            isActive
                ? "text-[#C89B5C] font-semibold"
                : "text-white/80"
        }`;

    return (
        <nav className="absolute top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

                {/* Main Navbar */}
                <div className="flex items-center justify-between py-4 sm:py-5">

                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="text-xl sm:text-2xl font-bold tracking-wide text-[#F5E6D3]"
                    >
                        Brew<span className="text-[#C89B5C]"> & Bean</span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
                        <li>
                            <NavLink to="/" className={navLinkClass}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu" className={navLinkClass}>
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={navLinkClass}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={navLinkClass}>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile" className={navLinkClass}>
                                Profile
                            </NavLink>
                        </li>
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        {user ? (
                            <button
                                onClick={handleLogout}
                                className="rounded-xl border border-[#C89B5C] px-5 py-2 text-sm font-semibold text-[#F5E6D3] transition-all hover:bg-[#C89B5C] hover:text-[#0C0806] active:scale-[0.98] shadow-md"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="rounded-xl border border-white/30 px-5 py-2 text-sm font-semibold text-[#F5E6D3] transition-all hover:border-[#C89B5C] hover:text-[#C89B5C] active:scale-[0.98]"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/menu"
                                    className="rounded-xl border border-[#C89B5C] bg-[#C89B5C] px-5 py-2 text-sm font-semibold text-[#0C0806] transition-all hover:bg-transparent hover:text-[#F5E6D3] active:scale-[0.98] shadow-md"
                                >
                                    Order Now
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C89B5C]/50 text-[#F5E6D3] transition-all hover:bg-[#C89B5C] hover:text-[#0C0806] md:hidden"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <i className="fa-solid fa-xmark text-lg"></i>
                        ) : (
                            <i className="fa-solid fa-bars text-lg"></i>
                        )}
                    </button>

                </div>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <div className="border-t border-white/10 py-6 md:hidden animate-fadeIn">
                        <ul className="flex flex-col gap-4 text-center">
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={closeMenu}
                                    className={navLinkClass}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/menu"
                                    onClick={closeMenu}
                                    className={navLinkClass}
                                >
                                    Menu
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    onClick={closeMenu}
                                    className={navLinkClass}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    onClick={closeMenu}
                                    className={navLinkClass}
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/profile"
                                    onClick={closeMenu}
                                    className={navLinkClass}
                                >
                                    Profile
                                </NavLink>
                            </li>
                        </ul>

                        {/* Mobile Action Buttons */}
                        <div className="mt-6 flex flex-col gap-3 px-2">
                            {user ? (
                                <button
                                    onClick={handleLogout}
                                    className="w-full rounded-xl border border-[#C89B5C] py-3 text-center text-sm font-semibold text-[#F5E6D3] transition-all hover:bg-[#C89B5C] hover:text-[#0C0806]"
                                >
                                    Logout
                                </button>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        onClick={closeMenu}
                                        className="block w-full rounded-xl border border-white/30 py-3 text-center text-sm font-semibold text-[#F5E6D3] transition-all hover:border-[#C89B5C] hover:text-[#C89B5C]"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        to="/menu"
                                        onClick={closeMenu}
                                        className="block w-full rounded-xl border border-[#C89B5C] bg-[#C89B5C] py-3 text-center text-sm font-semibold text-[#0C0806] transition-all hover:bg-transparent hover:text-[#F5E6D3]"
                                    >
                                        Order Now
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
