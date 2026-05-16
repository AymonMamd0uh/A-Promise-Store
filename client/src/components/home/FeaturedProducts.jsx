"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import axios from "axios";

import { useCart } from "@/context/CartContext";

const FeaturedProducts = () => {

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const { addToCart } = useCart();

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const { data } = await axios.get(
          "http://localhost:5000/api/products"
        );

        setProducts(data);

        setLoading(false);

      } catch (error) {

        console.log(error);

        setLoading(false);

      }

    };

    fetchProducts();

  }, []);

  return (
    <section className="section-padding bg-[#f8f5f0]">

      <div className="container-custom">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="section-subtitle">
            New Collection
          </p>

          <h2 className="section-title mb-5">
            Featured Products
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-8 text-lg">

            Explore our luxury modest fashion collection
            designed for timeless elegance, premium comfort,
            and modern femininity.

          </p>

        </div>

        {/* Products */}
        {loading ? (

          <p className="text-center text-xl">
            Loading...
          </p>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.map((product) => (

              <Link
                href={`/product/${product._id}`}
                key={product._id}
              >

                <div className="luxury-card overflow-hidden h-full group bg-white">

                  {/* Product Image */}
                  <div className="relative overflow-hidden bg-[#f7f7f7]">

                    {/* Badge */}
                    <span className="absolute top-4 left-4 z-10 bg-black text-white text-[10px] px-3 py-1.5 rounded-full tracking-[2px]">

                      NEW

                    </span>

                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={650}
                      className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-700"
                    />

                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex flex-col">

                    <div className="flex items-start justify-between gap-3 mb-3">

                      <h3 className="text-[22px] font-semibold leading-[1.3]">

                        {product.name}

                      </h3>

                      <p className="text-[17px] font-medium text-gray-700 whitespace-nowrap">

                        ${product.price}

                      </p>

                    </div>

                    <p className="text-gray-500 leading-7 mb-6 text-[14px]">

                      Premium elegant modest fashion designed
                      for luxury comfort and timeless style.

                    </p>

                    <button
                      onClick={(e) => {

                        e.preventDefault();

                        addToCart(product);

                      }}
                      className="mt-auto border border-black py-3.5 rounded-2xl hover:bg-black hover:text-white transition duration-300 font-medium text-sm"
                    >

                      Add To Cart

                    </button>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        )}

      </div>

    </section>
  );
};

export default FeaturedProducts;