"use client";

import Link from "next/link";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { FiBox, FiShoppingBag, FiPlusCircle } from "react-icons/fi";

const AdminDashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo || !userInfo.isAdmin) {
      router.push("/");
    }
  }, [router]);

  return (
    <section className="section-padding min-h-screen bg-[#f8f5f0]">
      <div className="container-custom">
        {/* Heading */}
        <div className="mb-16">
          <p className="section-subtitle">Admin Panel</p>

          <h1 className="section-title mt-3">Dashboard</h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Products */}
          <Link href="/admin/products">
            <div className="bg-white rounded-[32px] p-10 hover:-translate-y-2 transition duration-500 shadow-sm border border-gray-100 hover:shadow-xl cursor-pointer h-full">
              <div className="w-18 h-18 rounded-2xl bg-black text-white flex items-center justify-center text-3xl mb-8">
                <FiBox />
              </div>

              <h2 className="text-3xl font-bold mb-4">Products</h2>

              <p className="text-gray-500 leading-8">
                Manage all products, edit items, and update your store
                collection.
              </p>
            </div>
          </Link>

          {/* Orders */}
          <Link href="/admin/orders">
            <div className="bg-white rounded-[32px] p-10 hover:-translate-y-2 transition duration-500 shadow-sm border border-gray-100 hover:shadow-xl cursor-pointer h-full">
              <div className="w-18 h-18 rounded-2xl bg-black text-white flex items-center justify-center text-3xl mb-8">
                <FiShoppingBag />
              </div>

              <h2 className="text-3xl font-bold mb-4">Orders</h2>

              <p className="text-gray-500 leading-8">
                Track customer orders, payment status, and deliveries.
              </p>
            </div>
          </Link>

          {/* Add Product */}
          <Link href="/admin/products/add">
            <div className="bg-white rounded-[32px] p-10 hover:-translate-y-2 transition duration-500 shadow-sm border border-gray-100 hover:shadow-xl cursor-pointer h-full">
              <div className="w-18 h-18 rounded-2xl bg-black text-white flex items-center justify-center text-3xl mb-8">
                <FiPlusCircle />
              </div>

              <h2 className="text-3xl font-bold mb-4">Add Product</h2>

              <p className="text-gray-500 leading-8">
                Create and publish new products to your online store instantly.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
