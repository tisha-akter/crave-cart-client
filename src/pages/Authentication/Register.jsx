import React, { useState } from "react";
import { Link } from "react-router";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Logo from "../../components/common/Logo";

const Register = ({ setIsRegisterModalOpen, setIsLoginModalOpen, setShowLoginModal, setShowRegisterModal, onClose, isModal = false }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = (data) => {
    console.log({
      ...data,
      image,
    });
  };

  const handleGoogleSignIn = () => {
    console.log("Google signup clicked");
  };

  return (
    <div className={isModal ? "" : "min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={isModal ? "w-full" : "bg-white rounded-lg shadow-lg p-8 w-full max-w-md"}
      >
        {/* Logo */}
        <div className="mb-2">
          <Logo></Logo>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">
          Create your account
        </h2>
        <p className="text-sm text-gray-600 mb-4">Please enter your details</p>

        {/* Name */}
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Full Name"
          className="w-full mb-3 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && <p className="text-red-500 mb-2 text-xs">Name is required</p>}

        {/* Photo Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full mb-3 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-3 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-blue-500 file:text-white file:cursor-pointer file:hover:bg-blue-600"
        />

        {/* Email */}
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email address"
          className="w-full mb-3 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 mb-2 text-xs">Email is required</p>}

        {/* Password */}
        <div className="relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              validate: {
                hasCapitalLetter: (v) =>
                  /[A-Z]/.test(v) || "Must include at least one capital letter",
                hasSpecialChar: (v) =>
                  /[!@#$%^&*(),.?":{}|<>]/.test(v) ||
                  "Must include at least one special character",
              },
            })}
            placeholder="Password"
            className="w-full px-3 py-2 pr-10 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiFillEyeInvisible className="h-4 w-4" /> : <AiFillEye className="h-4 w-4" />}
          </div>
        </div>

        {/* Password Errors */}
        {errors.password && (
          <p className="text-red-500 mb-2 text-xs">{errors.password.message}</p>
        )}

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 text-sm rounded hover:bg-blue-600 transition"
        >
          Sign up
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-3">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Register */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center border border-gray-300 py-2 text-sm rounded hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-lg mr-2" />
          Sign up with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 my-4">
          Already have an account?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => {
              setIsRegisterModalOpen(false); 
              setIsLoginModalOpen(true); 
            }}
          >
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
