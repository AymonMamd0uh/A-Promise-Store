"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import axios from "axios";

import { useRouter } from "next/navigation";

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        if (!userInfo || !userInfo.isAdmin) {
          setLoading(false);

          router.push("/");

          return;
        }

        const { data } = await axios.get("http://localhost:5000/api/products");

        setProducts(data);

        setLoading(false);
      } catch (error) {
        console.log(error);

        setLoading(false);
      }
    };

    fetchProducts();
  }, [router]);

  const deleteHandler = async (id) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section-padding min-h-screen bg-[#f8f5f0]">
      <div className="container-custom">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">
          <div>
            <p className="section-subtitle">Admin Panel</p>

            <h1 className="section-title mt-3">Products Management</h1>
          </div>

          <Link href="/admin/products/add" className="main-button text-center">
            Add Product
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-[32px] shadow-sm border border-gray-100">
          <table className="w-full min-w-[950px]">
            <thead className="border-b border-gray-100">
              <tr>
                <th className="text-left px-8 py-6 font-semibold">Product</th>

                <th className="text-left px-8 py-6 font-semibold">Category</th>

                <th className="text-left px-8 py-6 font-semibold">Price</th>

                <th className="text-left px-8 py-6 font-semibold">Stock</th>

                <th className="text-left px-8 py-6 font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-8 py-10 text-center text-lg">
                    Loading...
                  </td>
                </tr>
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-8 py-10 text-center text-lg">
                    No Products Found
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr
                    key={product._id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="px-8 py-6 font-medium">{product.name}</td>

                    <td className="px-8 py-6 text-gray-600">
                      {product.category}
                    </td>

                    <td className="px-8 py-6 font-semibold">
                      ${product.price}
                    </td>

                    <td className="px-8 py-6">{product.countInStock}</td>

                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/admin/products/${product._id}`}
                          className="bg-blue-500 text-white px-5 py-2 rounded-2xl hover:bg-blue-600 transition text-sm"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => deleteHandler(product._id)}
                          className="bg-red-500 text-white px-5 py-2 rounded-2xl hover:bg-red-600 transition text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AdminProductsPage;
