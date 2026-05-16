"use client";

import { useState } from "react";

import Link from "next/link";

import axios from "axios";

import { useRouter } from "next/navigation";

import FormInput from "@/components/shared/FormInput";
import Button from "@/components/shared/Button";

const RegisterPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    // Name Validation
    if (!formData.name) {
      newErrors.name = "Full name is required";
    }

    // Email Validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    // Password Validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    // لو مفيش Errors
    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true);

        const { data } = await axios.post(
          "http://localhost:5000/api/auth/register",
          formData,
        );

        console.log(data);

        localStorage.setItem("userInfo", JSON.stringify(data));
        window.dispatchEvent(new Event("storage"));
        router.push("/");

        setLoading(false);
      } catch (error) {
        console.log(error);

        setLoading(false);
      }
    }
  };

  return (
    <section className="min-h-screen bg-[#f8f5f0] flex items-center justify-center py-20">
      <div className="w-full max-w-md bg-white p-12 rounded-[40px] shadow-xl border border-gray-100">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-[5px] text-gray-500 mb-3">
            Create Account
          </p>

          <h1 className="text-4xl font-bold mb-4">Register</h1>

          <p className="text-gray-500 leading-7">
            Create your account and enjoy shopping at A Promise Store.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <FormInput
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <FormInput
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <FormInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <FormInput
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-2">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className={loading ? "opacity-70 cursor-not-allowed" : ""}
          >
            {loading ? "Loading..." : "Create Account"}
          </Button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-8">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-black font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
