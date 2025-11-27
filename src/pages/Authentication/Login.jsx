import { useState } from "react";
import { Link } from "react-router";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../components/common/Logo";
import Register from "./Register";
import { X } from "lucide-react";

const Login = ({setIsLoginModalOpen, setShowLoginModal, onClose, isModal = false}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError(true);
      return;
    }

    console.log("Login submitted", form);
  };

  const handleGoogleSignIn = () => {
    console.log("Google Login clicked");
  };

  return (
    <div className={isModal ? "" : "min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4"}>
      <form
        onSubmit={onSubmit}
        className={isModal ? "w-full" : "bg-white rounded-lg shadow-lg p-8 w-full max-w-md"}
      >
        <div className="mb-6">
          <Logo></Logo>
        </div>

        <h2 className="text-xl font-bold mb-1 text-gray-800">Welcome back</h2>
        <p className="text-gray-600 mb-6">Please enter your details</p>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-red-600 text-xs">Incorrect Email</p>}

        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </div>
        {error && <p className="text-red-600 text-xs">Incorrect Password</p>}

        <div className="flex justify-between items-center mb-6 text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <Link to="/reset" className="text-blue-600 hover:underline">
            Forgot password
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
        >
          Sign in
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-xl mr-2" />
          Sign in with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => {
              setIsRegisterModalOpen(true);
              setIsLoginModalOpen(false);
            }}
          >
            Sign up
          </span>
        </p>
      </form>

      {isRegisterModalOpen && (
        <div className="absolute inset-0 bg-white rounded-lg p-4 sm:p-6">
          <button
            onClick={() => setIsRegisterModalOpen(false)}
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 z-10"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
          <Register
            setIsRegisterModalOpen={setIsRegisterModalOpen}
            setIsLoginModalOpen={setIsLoginModalOpen}
            isModal={true}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
