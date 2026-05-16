"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";

import logo from "@/assets/images/logo.png";

import {
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { useCart } from "@/context/CartContext";

const Navbar = () => {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [user, setUser] =
    useState(null);

  const router = useRouter();

  const { cartItems } = useCart();

  useEffect(() => {

    const checkUser = () => {

      const userInfo =
        localStorage.getItem("userInfo");

      if (userInfo) {

        setUser(JSON.parse(userInfo));

      } else {

        setUser(null);

      }

    };

    checkUser();

    window.addEventListener(
      "storage",
      checkUser
    );

    return () => {

      window.removeEventListener(
        "storage",
        checkUser
      );

    };

  }, []);

  const logoutHandler = () => {

    localStorage.removeItem("userInfo");

    setUser(null);

    router.push("/");

  };

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">

      <div className="container-custom h-[90px] flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0"
        >

          <Image
            src={logo}
            alt="A Promise Store"
            width={82}
            priority
            className="object-contain"
          />

        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 font-medium text-[15px]">

          <li>
            <Link
              href="/"
              className="hover:text-gray-500 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/shop"
              className="hover:text-gray-500 transition duration-300"
            >
              Shop
            </Link>
          </li>

          <li>
            <Link
              href="/categories"
              className="hover:text-gray-500 transition duration-300"
            >
              Categories
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="hover:text-gray-500 transition duration-300"
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Cart */}
          <Link
            href="/cart"
            className="relative text-[24px] hover:text-gray-500 transition duration-300"
          >

            <FiShoppingCart />

            {cartItems.length > 0 && (

              <span className="absolute -top-2 -right-3 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">

                {cartItems.length}

              </span>

            )}

          </Link>

          {/* User Icon */}
          <div className="hidden md:block text-[23px]">
            <FiUser />
          </div>

          {/* Login/User */}
          {user ? (

            <div className="hidden md:flex items-center gap-4">

              <p className="font-medium text-[15px] whitespace-nowrap">

                Hi, {user.name}

              </p>

              <button
                onClick={logoutHandler}
                className="bg-red-500 text-white px-5 py-3 rounded-2xl hover:bg-red-600 transition duration-300 text-sm"
              >

                Logout

              </button>

            </div>

          ) : (

            <Link
              href="/login"
              className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition duration-300 hidden md:block text-sm"
            >

              Login

            </Link>

          )}

          {/* Mobile Menu Button */}
          <button
            className="text-[30px] md:hidden"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            {menuOpen ? <FiX /> : <FiMenu />}

          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 shadow-xl">

          <ul className="flex flex-col gap-6 font-medium">

            <li>
              <Link href="/">
                Home
              </Link>
            </li>

            <li>
              <Link href="/shop">
                Shop
              </Link>
            </li>

            <li>
              <Link href="/categories">
                Categories
              </Link>
            </li>

            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>

            {user ? (

              <div className="flex flex-col gap-4 pt-2">

                <p className="font-medium">
                  Hi, {user.name}
                </p>

                <button
                  onClick={logoutHandler}
                  className="bg-red-500 text-white py-3 rounded-2xl"
                >

                  Logout

                </button>

              </div>

            ) : (

              <Link
                href="/login"
                className="bg-black text-white py-3 rounded-2xl mt-2 text-center"
              >

                Login

              </Link>

            )}

          </ul>

        </div>

      )}

    </nav>
  );
};

export default Navbar;