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
            confirmButtonColor: "#d6a15d",
            cancelButtonColor: "#4a3023",
            background: "#281a13",
            color: "#ffffff",
        });

        if (result.isConfirmed) {
            try {
                await signOut(auth);
                setMenuOpen(false);

                Swal.fire({
                    title: "Logged Out!",
                    text: "You have been successfully logged out.",
                    icon: "success",
                    confirmButtonColor: "#d6a15d",
                    background: "#281a13",
                    color: "#ffffff",
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
        `block text-sm sm:text-base font-medium transition duration-200 hover:text-[#d6a15d] ${
            isActive
                ? "text-[#d6a15d] font-semibold"
                : "text-stone-300"
        }`;

    return (
        <nav className="absolute top-0 left-0 z-50 w-full border-b border-[#4a3023]/40 bg-[#1c120d]/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                {/* Main Navbar */}
                <div className="flex items-center justify-between py-4 sm:py-5">

                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="text-xl sm:text-2xl font-bold tracking-wide text-white"
                    >
                        Brew<span className="text-[#d6a15d]"> & Bean</span>
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

                    {/* Desktop Button / Auth */}
                    <div className="hidden md:block">
                        {user ? (
                            <button
                                onClick={handleLogout}
                                className="rounded-xl border border-[#d6a15d] px-5 py-2 text-sm font-semibold text-[#d6a15d] transition-all hover:bg-[#d6a15d] hover:text-[#1c120d] active:scale-[0.98]"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                to="/menu"
                                className="rounded-xl bg-[#d6a15d] px-5 py-2.5 text-sm font-semibold text-[#1c120d] transition-all hover:bg-[#e9bd7d] active:scale-[0.98]"
                            >
                                Order Now
                            </Link>
                        )}
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#4a3023] bg-[#281a13] text-[#d6a15d] transition hover:bg-[#342219] md:hidden"
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
                    <div className="border-t border-[#4a3023] py-6 px-2 md:hidden bg-[#281a13] rounded-2xl mb-4 shadow-2xl animate-fadeIn">
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

                        {/* Mobile Action Button */}
                        <div className="mt-6 px-4">
                            {user ? (
                                <button
                                    onClick={handleLogout}
                                    className="w-full rounded-xl border border-[#d6a15d] py-3 text-sm font-semibold text-[#d6a15d] transition hover:bg-[#d6a15d] hover:text-[#1c120d]"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    to="/menu"
                                    onClick={closeMenu}
                                    className="block w-full rounded-xl bg-[#d6a15d] py-3 text-center text-sm font-semibold text-[#1c120d] transition hover:bg-[#e9bd7d]"
                                >
                                    Order Now
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;