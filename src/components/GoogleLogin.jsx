import {GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/config.js";

const googleProvider = new GoogleAuthProvider();

const GoogleButton = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      
      const user = result.user;
      console.log("Logged in user:", user);

      toast.success("Login Successful!");

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (error) {
      console.error("Google Login Error:", error.code, error.message);

      if (error.code === "auth/popup-closed-by-user") {
        toast.info("Login popup was closed.");
      } else {
        toast.error("Google Sign-In failed!");
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      className="w-full flex items-center justify-center gap-3 rounded-lg sm:rounded-xl border border-[#4a3023] bg-[#1c120d] py-3 px-4 text-sm font-medium text-stone-200 transition-all duration-200 hover:bg-[#281a13] hover:border-[#d6a15d]/40 active:scale-[0.98] shadow-md"
    >
      <i className="fa-brands fa-google text-base text-[#d6a15d]"></i>
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleButton;