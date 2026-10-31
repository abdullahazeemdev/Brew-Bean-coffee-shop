import { useState } from 'react';
import Input from '../components/input';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/config';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from '../components/GoogleLogin';

const auth = getAuth(app);

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (value, field) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    const { email, password } = form;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userName = user.displayName || "User";

        toast.success(`Welcome back, ${userName}!`);

        setTimeout(() => {
          navigate('/');
        }, 1500);
      })
      .catch((error) => {
        console.log(error.code, error.message);
        toast.error("Invalid email or password.");
      });
  };

  return (
    <div className="min-h-screen bg-[#1c120d] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#d6a15d]">
            Brew & Bean
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-stone-400">
            Welcome back, coffee lover
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-[#4a3023] bg-[#281a13] p-5 sm:p-7 shadow-2xl">

          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Login
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-stone-400">
              Sign in to continue to your account
            </p>
          </div>

          <form className="space-y-4" onSubmit={loginHandler}>

            <div>
              <Input
                handler={handleChange}
                field="email"
                label="Email Address"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <Input
                handler={handleChange}
                field="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
              <div className="text-right mt-1">
                <button
                  type="button"
                  className="text-xs sm:text-sm text-[#d6a15d] transition hover:text-[#e9bd7d]"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#d6a15d] py-3 text-sm sm:text-base font-semibold text-[#1c120d] transition hover:bg-[#e9bd7d] active:scale-[0.98] mt-2"
            >
              Login
            </button>

          </form>

          {/* Divider */}
          <div className="relative my-6 flex items-center justify-center">
            <div className="w-full border-t border-[#4a3023]"></div>
            <span className="absolute bg-[#281a13] px-3 text-xs text-stone-400 uppercase tracking-wider">
              OR
            </span>
          </div>

          {/* Responsive Google Button Component */}
          <GoogleButton />

          {/* Footer Link */}
          <div className="mt-6 border-t border-[#4a3023] pt-5 text-center">
            <p className="text-xs sm:text-sm text-stone-400">
              Don't have an account?{" "}
              <Link to="/signup">
                <span className="cursor-pointer font-semibold text-[#d6a15d] hover:text-[#e9bd7d]">
                  Sign up
                </span>
              </Link>
            </p>
          </div>

        </div>

      </div>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </div>
  );
};

export default Login;