import { createUserWithEmailAndPassword, getAuth, updateProfile, } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import app from "../../Firebase/config";
import GoogleButton from "../components/GoogleLogin";
import Input from "../components/input";

const auth = getAuth(app);

const Signup = () => {

    const [isAgreed, setIsAgreed] = useState(false)

    const [signupForm, setSignupForm] = useState({
        name: "",
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
    });

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
            toast.error("Please enter your name");
            return;
        }

        if (!email.trim()) {
            toast.error("Please enter your email");
            return;
        }

        if (!age) {
            toast.error("Please enter your age");
            return;
        }

        if (Number(age) < 13 || Number(age) > 100) {
            toast.error("Age must be between 13 and 100");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Password does not match");
            return;
        }

        if (!isAgreed) {
            toast.error("Please accept Terms & Conditions")
            return;
        }

        try {
            const { user } = await createUserWithEmailAndPassword(auth, signupForm.email, signupForm.password)

            await updateProfile(user, {
                displayName: name,
            });

            console.log("User:", user);
            console.log("Age:", age);

            toast.success("Account created successfully!");


                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;


                console.log(errorCode, errorMessage);

                if (error.code === "auth/email-already-in-use") {
                    toast("This email is already registered");
                } else if (error.code === "auth/weak-password") {
                    toast("Password should be at least 6 characters");
                } else if (error.code === "auth/invalid-email") {
                    toast("Please enter a valid email");
                } else {
                    toast(error.message || "An unexpected error occurred. Please try again.");
                    console.error("Unhandled Error:", error);
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
                                    checked={isAgreed}
                                    onChange={(e) => setIsAgreed(e.target.checked)}
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

                            {/* CDN Based Google Button */}
                            <GoogleButton onClick={() => console.log("Google Clicked")} />

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
