"use client";

import { useEffect, useState, use } from "react";

import axios from "axios";

import Image from "next/image";

import { useCart } from "@/context/CartContext";

const ProductDetails = ({ params }) => {

  const resolvedParams = use(params);

  const productId = resolvedParams.id;

  const { addToCart } = useCart();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const { data } = await axios.get(
          `http://localhost:5000/api/products/${productId}`
        );

        setProduct(data);

        setLoading(false);

      } catch (error) {

        console.log(error);

        setLoading(false);

      }

    };

    if (productId) {
      fetchProduct();
    }

  }, [productId]);

  if (loading) {

    return (
      <div className="py-40 text-center text-2xl">
        Loading...
      </div>
    );

  }

  if (!product) {

    return (
      <div className="py-40 text-center text-2xl">
        Product Not Found
      </div>
    );

  }

  return (
    <section className="section-padding bg-white overflow-hidden">

      <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">

        {/* Image */}
        <div className="relative">

          {/* Background Shape */}
          <div className="absolute inset-0 bg-[#f6f1ea] rounded-[40px] rotate-3 scale-[0.98]" />

          <Image
            src={product.image}
            alt={product.name}
            width={700}
            height={850}
            className="relative z-10 w-full h-175 object-cover rounded-[36px] shadow-xl"
          />

        </div>

        {/* Info */}
        <div className="max-w-155">

          <p className="section-subtitle">

            {product.category}

          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8">

            {product.name}

          </h1>

          <p className="text-4xl font-semibold text-gray-900 mb-10">

            ${product.price}

          </p>

          <p className="text-gray-600 text-lg leading-9 mb-12">

            {product.description}

          </p>

          {/* Extra Info */}
          <div className="flex flex-wrap gap-5 mb-12">

            <div className="bg-[#f8f5f0] px-6 py-4 rounded-2xl">

              <p className="text-sm text-gray-500 mb-1">
                Category
              </p>

              <p className="font-semibold">
                {product.category}
              </p>

            </div>

            <div className="bg-[#f8f5f0] px-6 py-4 rounded-2xl">

              <p className="text-sm text-gray-500 mb-1">
                In Stock
              </p>

              <p className="font-semibold">
                {product.countInStock}
              </p>

            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">

            <button
              onClick={() =>
                addToCart(product)
              }
              className="main-button"
            >

              Add To Cart

            </button>

            <button className="secondary-button">

              Buy Now

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductDetails;