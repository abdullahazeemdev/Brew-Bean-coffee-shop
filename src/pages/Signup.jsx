import { useState } from "react";
import Input from "../components/input";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile, } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import app from "../../env/Config.js";
import { ToastContainer, toast } from "react-toastify";

const auth = getAuth(app);

const Signup = () => {
    const [signupForm, setSignupForm] = useState({
        name: "",
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
    });

    const notify = (message) => toast(message);

    const handleChange = (value, field) => {
        setSignupForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const navigate = useNavigate();

    const signupHandler = async (e) => {
        e.preventDefault();

        const {
            name,
            email,
            age,
            password,
            confirmPassword,
        } = signupForm;

        if (!name.trim()) {
            notify("Please enter your name");
            return;
        }

        if (!age) {
            notify("Please enter your age");
            return;
        }

        if (Number(age) < 13 || Number(age) > 100) {
            notify("Age must be between 13 and 100");
            return;
        }

        if (password !== confirmPassword) {
            notify("Password does not match");
            return;
        }

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)

            await updateProfile(user, {
                displayName: name,
            });

            console.log("User:", user);
            console.log("Age:", age);

            notify("Account created successfully!");

            try {
                const docRef = await addDoc(collection(db, "users"), {
                    first: "Ada",
                    last: "Lovelace",
                    born: 1815
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }

            setTimeout(() => {
                navigate("/login");
            }, 1000);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode, errorMessage);

            if (error.code === "auth/email-already-in-use") {
                notify("This email is already registered");
            } else if (error.code === "auth/weak-password") {
                notify("Password should be at least 6 characters");
            } else if (error.code === "auth/invalid-email") {
                notify("Please enter a valid email");
            } else {
                notify("Something went wrong. Please try again");
            }
        };
    };

    return (
        <div className="min-h-screen bg-[#1c120d] flex items-center justify-center px-3 sm:px-5 md:px-8 py-8 sm:py-10">

            <div className="w-full max-w-md">

                {/* Logo */}
                <div className="mb-6 sm:mb-8 text-center">

                    <h1 className="text-3xl sm:text-4xl font-bold text-[#d6a15d]">
                        Brew & Bean
                    </h1>

                    <p className="mt-2 text-xs sm:text-sm text-stone-400">
                        Create your coffee account
                    </p>

                </div>

                {/* Signup Card */}
                <div className="rounded-xl sm:rounded-2xl border border-[#4a3023] bg-[#281a13] p-5 sm:p-7 shadow-2xl">

                    {/* Heading */}
                    <div className="mb-5 sm:mb-6">

                        <h2 className="text-xl sm:text-2xl font-semibold text-white">
                            Create Account
                        </h2>

                        <p className="mt-1 text-xs sm:text-sm text-stone-400">
                            Sign up to start your coffee journey
                        </p>

                    </div>

                    {/* Form */}
                    <form
                        className="space-y-4 sm:space-y-5"
                        onSubmit={signupHandler}
                    >

                        {/* Full Name */}
                        <Input
                            label="Full Name"
                            field="name"
                            type="text"
                            placeholder="Enter your name"
                            handler={handleChange}
                        />

                        {/* Email */}
                        <Input
                            field="email"
                            label="Email Address"
                            type="email"
                            placeholder="you@example.com"
                            handler={handleChange}
                        />

                        {/* Age */}
                        <Input
                            field="age"
                            label="Age"
                            type="number"
                            placeholder="Enter your age"
                            handler={handleChange}
                        />

                        {/* Password */}
                        <Input
                            label="Password"
                            type="password"
                            field="password"
                            placeholder="Create a password"
                            handler={handleChange}
                        />

                        {/* Confirm Password */}
                        <Input
                            label="Confirm Password"
                            field="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            handler={handleChange}
                        />

                        {/* Terms */}
                        <div className="flex items-start gap-2 sm:gap-3 pt-1">

                            <input
                                type="checkbox"
                                className="mt-1 h-4 w-4 shrink-0 accent-[#d6a15d]"
                            />

                            <p className="text-[11px] sm:text-xs leading-5 text-stone-400">

                                I agree to the{" "}

                                <span className="cursor-pointer text-[#d6a15d] hover:text-[#e9bd7d]">
                                    Terms & Conditions
                                </span>{" "}

                                and{" "}

                                <span className="cursor-pointer text-[#d6a15d] hover:text-[#e9bd7d]">
                                    Privacy Policy
                                </span>

                            </p>

                        </div>

                        {/* Signup Button */}
                        <button
                            type="submit"
                            className="w-full rounded-lg sm:rounded-xl bg-[#d6a15d] py-3 text-sm sm:text-base font-semibold text-[#1c120d] transition hover:bg-[#e9bd7d] active:scale-[0.98]"
                        >
                            Create Account
                        </button>

                    </form>

                    {/* Login */}
                    <div className="mt-6 sm:mt-7 border-t border-[#4a3023] pt-5 sm:pt-6 text-center">

                        <p className="text-xs sm:text-sm text-stone-400">

                            Already have an account?{" "}

                            <Link to="/login">
                                <span className="cursor-pointer font-semibold text-[#d6a15d] transition hover:text-[#e9bd7d]">
                                    Login
                                </span>
                            </Link>

                        </p>

                    </div>

                </div>

            </div>

            <ToastContainer />

        </div>
    );
};

export default Signup;
