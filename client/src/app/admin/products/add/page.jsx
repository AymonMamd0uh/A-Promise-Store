"use client";

import { useState, useEffect } from "react";

import axios from "axios";

import { useRouter } from "next/navigation";

const AddProductPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    category: "",
    countInStock: "",
  });

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo || !userInfo.isAdmin) {
      router.push("/");
    }
  }, [router]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      await axios.post("http://localhost:5000/api/products", formData, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setLoading(false);

      router.push("/admin/products");
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  return (
    <section className="section-padding min-h-screen bg-[#f8f5f0]">
      <div className="container-custom max-w-4xl">
        {/* Heading */}
        <div className="mb-16">
          <p className="section-subtitle">Admin Panel</p>

          <h1 className="section-title mt-3">Add Product</h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100 space-y-7"
        >
          {/* Product Name */}
          <div>
            <label className="block mb-3 font-medium">Product Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="block mb-3 font-medium">Product Image</label>

            <input
              type="text"
              name="image"
              placeholder="/images/product.jpg"
              value={formData.image}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-3 font-medium">Description</label>

            <textarea
              name="description"
              placeholder="Enter product description"
              value={formData.description}
              onChange={handleChange}
              rows="6"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none resize-none focus:border-black transition"
              required
            />
          </div>

          {/* Price + Category */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-3 font-medium">Price</label>

              <input
                type="number"
                name="price"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
                required
              />
            </div>

            <div>
              <label className="block mb-3 font-medium">Category</label>

              <input
                type="text"
                name="category"
                placeholder="Enter category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
                required
              />
            </div>
          </div>

          {/* Stock */}
          <div>
            <label className="block mb-3 font-medium">Count In Stock</label>

            <input
              type="number"
              name="countInStock"
              placeholder="Enter stock quantity"
              value={formData.countInStock}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="main-button w-full"
            disabled={loading}
          >
            {loading ? "Adding Product..." : "Add Product"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProductPage;
