import { useState } from 'react'
import Input from '../components/input';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../env/Config';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const auth = getAuth(app);
const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (value, field) => {
    // console.log(value)

    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const navigate = useNavigate()

  

  const notify = (massage) => toast(massage);


  const loginHandler = (e) => {

    e.preventDefault();

    const { email, password } = form;

    signInWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {

        const user = userCredential.user;

        console.log(userCredential.user);
        
        const userName = user.displayName

        toast.success(`Welcome back, ${userName}!`);

        setTimeout(() => {

          navigate('/')

        }, 2000)

      })
      .catch((error) => {

        console.log(error.code, error.message);

        toast("Invalid email or password.");

      });
  };




  return (
    <div className="min-h-screen bg-[#1c120d] flex items-center justify-center px-4 py-10">

      <div className='w-full max-w-md'>

        {/* logo */}
        <div className='mb-8 text-center'>

          <h1 className='text-4xl font-bold text-[#d6a15d]'>
            Brew & Bean
          </h1>

          <p className="mt-2 text-sm text-stone-400">
            Welcome back, coffee lover
          </p>
        </div>

        {/* login card */}

        <div className="rounded-2xl border border-[#4a3023] bg-[#281a13] p-7 shadow-2xl">


          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white">
              Login
            </h2>

            <p className="mt-1 text-sm text-stone-400">
              Sign in to continue to your account
            </p>
          </div>

          <form className="space-y-5" onSubmit={loginHandler}>

            {/* Email */}

            <div>
              <Input
                handler={handleChange}
                field="email"
                label="Email Address"
                type="email"
                placeholder="you@example.com"
              />


              <Input
                handler={handleChange}
                field="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
              />


              <button
                type="button"
                className="text-sm text-[#d6a15d] transition hover:text-[#e9bd7d] mt-2"
              >
                Forgot password?
              </button>

              <button
                type="submit"
                className="w-full mt-4 rounded-xl bg-[#d6a15d] py-3 font-semibold text-[#1c120d] transition hover:bg-[#e9bd7d] active:scale-[0.98]"
              >
                Login
              </button>
            </div>

          </form>

          <div className="mt-7 border-t border-[#4a3023] pt-6 text-center">
            <p className="text-sm text-stone-400">
              Don't have an account?{" "}
              <Link to="/signup">
                <span className="cursor-pointer font-semibold text-[#d6a15d] hover:text-[#e9bd7d]">
                  Sign up
                </span></Link>
            </p>
          </div>


        </div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
