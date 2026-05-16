"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import { useRouter } from "next/navigation";

const AdminOrdersPage = () => {

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const router = useRouter();

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const userInfo =
          JSON.parse(
            localStorage.getItem("userInfo")
          );

        if (!userInfo || !userInfo.isAdmin) {

          setLoading(false);

          router.push("/");

          return;

        }

        const { data } = await axios.get(
          "http://localhost:5000/api/orders",
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );

        setOrders(data);

        setLoading(false);

      } catch (error) {

        console.log(error);

        setLoading(false);

      }

    };

    fetchOrders();

  }, [router]);

  return (
    <section className="section-padding min-h-screen bg-[#f8f5f0]">

      <div className="container-custom">

        {/* Heading */}
        <div className="mb-16">

          <p className="section-subtitle">
            Admin Dashboard
          </p>

          <h1 className="section-title mt-3">
            Orders Management
          </h1>

        </div>

        {/* Loading */}
        {loading ? (

          <p className="text-lg">
            Loading...
          </p>

        ) : orders.length === 0 ? (

          <div className="bg-white rounded-[30px] p-12 text-center">

            <h2 className="text-3xl font-semibold mb-4">

              No Orders Found

            </h2>

          </div>

        ) : (

          <div className="overflow-x-auto bg-white rounded-[32px] shadow-sm border border-gray-100">

            <table className="w-full min-w-[900px]">

              <thead className="border-b border-gray-100">

                <tr>

                  <th className="text-left px-8 py-6 font-semibold">

                    Order ID

                  </th>

                  <th className="text-left px-8 py-6 font-semibold">

                    User

                  </th>

                  <th className="text-left px-8 py-6 font-semibold">

                    Total

                  </th>

                  <th className="text-left px-8 py-6 font-semibold">

                    Payment

                  </th>

                  <th className="text-left px-8 py-6 font-semibold">

                    Delivery

                  </th>

                </tr>

              </thead>

              <tbody>

                {orders.map((order) => (

                  <tr
                    key={order._id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >

                    <td className="px-8 py-6 text-sm break-all">

                      {order._id}

                    </td>

                    <td className="px-8 py-6">

                      <div>

                        <h3 className="font-medium">

                          {order.user?.name}

                        </h3>

                        <p className="text-gray-500 text-sm">

                          {order.user?.email}

                        </p>

                      </div>

                    </td>

                    <td className="px-8 py-6 font-semibold">

                      $
                      {order.totalPrice}

                    </td>

                    <td className="px-8 py-6">

                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>

                        {order.isPaid
                          ? "Paid"
                          : "Pending"}

                      </span>

                    </td>

                    <td className="px-8 py-6">

                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        order.isDelivered
                          ? "bg-blue-100 text-blue-700"
                          : "bg-red-100 text-red-700"
                      }`}>

                        {order.isDelivered
                          ? "Delivered"
                          : "Processing"}

                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </section>
  );
};

export default AdminOrdersPage;