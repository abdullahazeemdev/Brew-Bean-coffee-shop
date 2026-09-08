import { NavLink, Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../env/Config";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

const auth = getAuth(app);
function Navbar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe;
    }, [])

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


    return (
        <nav className="absolute top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

                <a href="#" className="text-2xl font-bold tracking-wide text-[#F5E6D3]">
                    Brew<span className="text-[#C89B5C]"> & Bean</span>
                </a>



                <ul className="hidden item-center gap-8 md:flex ">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-sm transition hover:text-[#C89B5C] ${isActive ? "text-[#C89B5C] font-semibold" : "text-white/80"
                            }`
                        }
                    >
                        <li>Home</li>
                    </NavLink>


                    <NavLink
                        to="/menu"
                        className={({ isActive }) =>
                            `text-sm transition hover:text-[#C89B5C] ${isActive ? "text-[#C89B5C] font-semibold" : "text-white/80"
                            }`
                        }
                    >
                        <li>Menu</li>
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) => `text-sm transition hover:text-[#C89B5C] ${isActive ? "text-[#C89B5C] font-semibold" : "text-white/80"}`
                        }
                    >
                        <li>
                            About
                        </li>
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `text-sm transition hover:text-[#C89B5C] ${isActive ? "text-[#C89B5C] font-semibold" : "text-white/80"}`
                        }
                    >
                        <li>
                            Contact
                        </li>
                    </NavLink>


                </ul>

                {user ? (
                    <button
                        onClick={handleLogout}
                        className="rounded-full border border-[#C89B5C] px-5 py-2 text-sm text-[#F5E6D3] transition hover:bg-[#C89B5C] hover:text-[#0C0806]"
                    >
                        Logout
                    </button>
                ) : (
                    <Link
                        to="/menu"
                        className="rounded-full border border-[#C89B5C] px-5 py-2 text-sm text-[#F5E6D3] transition hover:bg-[#C89B5C] hover:text-[#0C0806]"
                    >
                        Order Now
                    </Link>
                )}


            </div>

        </nav>
    );
};

export default Navbar;