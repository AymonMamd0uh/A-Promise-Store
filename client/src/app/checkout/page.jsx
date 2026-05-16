"use client";

import { useState } from "react";

import axios from "axios";

import { useRouter } from "next/navigation";

import { useCart } from "@/context/CartContext";

const CheckoutPage = () => {

  const [address, setAddress] =
    useState("");

  const [city, setCity] =
    useState("");

  const [postalCode, setPostalCode] =
    useState("");

  const [country, setCountry] =
    useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("Cash On Delivery");

  const router = useRouter();

  const { cartItems, clearCart } =
    useCart();

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const userInfo =
        JSON.parse(
          localStorage.getItem("userInfo")
        );

      await axios.post(
        "http://localhost:5000/api/orders",
        {
          orderItems: cartItems.map(
            (item) => ({
              name: item.name,
              quantity: item.quantity,
              image: item.image,
              price: item.price,
              product: item._id,
            })
          ),

          shippingAddress: {
            address,
            city,
            postalCode,
            country,
          },

          paymentMethod,

          totalPrice: cartItems.reduce(
            (acc, item) =>
              acc +
              item.price * item.quantity,
            0
          ),
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      clearCart();

      router.push("/");

    } catch (error) {

      alert("Something went wrong");

    }

  };

  return (
    <section className="section-padding min-h-screen bg-[#f8f5f0]">

      <div className="container-custom max-w-3xl">

        {/* Heading */}
        <div className="mb-14 text-center">

          <p className="section-subtitle">
            Checkout
          </p>

          <h1 className="section-title mb-5">
            Shipping Details
          </h1>

          <p className="text-gray-600 text-lg">

            Complete your order information below.

          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm space-y-8"
        >

          {/* Address */}
          <div>

            <label className="block mb-3 font-medium">

              Address

            </label>

            <input
              type="text"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              placeholder="Enter your address"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
              required
            />

          </div>

          {/* City */}
          <div>

            <label className="block mb-3 font-medium">

              City

            </label>

            <input
              type="text"
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
              placeholder="Enter your city"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
              required
            />

          </div>

          {/* Postal Code */}
          <div>

            <label className="block mb-3 font-medium">

              Postal Code

            </label>

            <input
              type="text"
              value={postalCode}
              onChange={(e) =>
                setPostalCode(e.target.value)
              }
              placeholder="Enter postal code"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
              required
            />

          </div>

          {/* Country */}
          <div>

            <label className="block mb-3 font-medium">

              Country

            </label>

            <input
              type="text"
              value={country}
              onChange={(e) =>
                setCountry(e.target.value)
              }
              placeholder="Enter your country"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
              required
            />

          </div>

          {/* Payment */}
          <div>

            <label className="block mb-4 font-medium">

              Payment Method

            </label>

            <select
              value={paymentMethod}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
            >

              <option>
                Cash On Delivery
              </option>

              <option>
                PayPal
              </option>

            </select>

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="main-button w-full"
          >

            Continue

          </button>

        </form>

      </div>

    </section>
  );
};

export default CheckoutPage;