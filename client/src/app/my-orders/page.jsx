"use client";

import { useEffect, useState } from "react";

import axios from "axios";

const MyOrdersPage = () => {

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const userInfo =
          JSON.parse(
            localStorage.getItem("userInfo")
          );

        const { data } = await axios.get(
          "http://localhost:5000/api/orders/myorders",
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );

        setOrders(data);

        setLoading(false);

      } catch (error) {

        setLoading(false);

      }

    };

    fetchOrders();

  }, []);

  return (
    <section className="section-padding min-h-screen bg-[#f8f5f0]">

      <div className="container-custom max-w-5xl">

        {/* Heading */}
        <div className="mb-16">

          <p className="section-subtitle">
            User Dashboard
          </p>

          <h1 className="section-title mt-3">
            My Orders
          </h1>

        </div>

        {/* Loading */}
        {loading ? (

          <p className="text-lg">
            Loading...
          </p>

        ) : orders.length === 0 ? (

          <div className="bg-white rounded-[30px] p-12 text-center shadow-sm">

            <h2 className="text-3xl font-semibold mb-4">

              No Orders Yet

            </h2>

            <p className="text-gray-500 text-lg">

              Your orders will appear here.

            </p>

          </div>

        ) : (

          <div className="space-y-8">

            {orders.map((order) => (

              <div
                key={order._id}
                className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100"
              >

                {/* Top */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

                  <div>

                    <p className="text-gray-400 text-sm mb-2 uppercase tracking-[3px]">

                      Order ID

                    </p>

                    <h3 className="font-semibold text-lg text-black break-all leading-8">

                      {order._id}

                    </h3>

                  </div>

                  <div className="flex items-center gap-4 flex-wrap">

                    <span className="px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">

                      {order.isPaid
                        ? "Paid"
                        : "Not Paid"}

                    </span>

                    <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">

                      {order.isDelivered
                        ? "Delivered"
                        : "Processing"}

                    </span>

                  </div>

                </div>

                {/* Items */}
                <div className="space-y-5">

                  {order.orderItems.map((item) => (

                    <div
                      key={item.product}
                      className="flex items-center justify-between gap-5 border-b border-gray-100 pb-5"
                    >

                      <div>

                        <h4 className="text-[20px] font-semibold mb-2">

                          {item.name}

                        </h4>

                        <p className="text-gray-500">

                          Quantity:
                          {" "}
                          {item.quantity}

                        </p>

                      </div>

                      <p className="text-xl font-bold whitespace-nowrap">

                        $
                        {item.price}

                      </p>

                    </div>

                  ))}

                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mt-8 pt-6 border-t border-gray-100">

                  <p className="text-gray-500 text-lg">

                    Payment Method:
                    {" "}
                    {order.paymentMethod}

                  </p>

                  <h3 className="text-3xl font-bold">

                    Total:
                    {" "}
                    $
                    {order.totalPrice}

                  </h3>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
};

export default MyOrdersPage;