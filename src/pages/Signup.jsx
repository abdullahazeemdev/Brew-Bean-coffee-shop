import { useState } from "react"
import Input from "../components/input"


const Signup = () => {
    const [signupForm, setSignupForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (value, filed) => {
        setSignupForm((prev) => ({ ...prev, [filed]: value, }))
    }

    const signupHandler = (e) => {
        e.preventDefault();
        console.log("signup user", signupForm)

    }
    return (

        <div className="min-h-screen bg-[#1c120d] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-[#d6a15d]">
                        Brew & Bean
                    </h1>

                    <p className="mt-2 text-sm text-stone-400">
                        Create your coffee account
                    </p>
                </div>

                <div className="rounded-2xl border border-[#4a3023] bg-[#281a13] p-7 shadow-2xl">
                    {/* Heading */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-white">
                            Create Account
                        </h2>

                        <p className="mt-1 text-sm text-stone-400">
                            Sign up to start your coffee journey
                        </p>
                    </div>

                    <form className="space-y-5 " onSubmit={signupHandler}>

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
                        <div className="flex items-start gap-3 pt-1">
                            <input
                                type="checkbox"
                                className="mt-1 h-4 w-4 accent-[#d6a15d]"
                            />

                            <p className="text-xs leading-5 text-stone-400">
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
                            className="w-full rounded-xl bg-[#d6a15d] py-3 font-semibold text-[#1c120d] transition hover:bg-[#e9bd7d] active:scale-[0.98]"
                        >
                            Create Account
                        </button>

                    </form>

                    {/* Login */}
                    <div className="mt-7 border-t border-[#4a3023] pt-6 text-center">
                        <p className="text-sm text-stone-400">
                            Already have an account?{" "}
                            <span className="cursor-pointer font-semibold text-[#d6a15d] transition hover:text-[#e9bd7d]">
                                Login
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup