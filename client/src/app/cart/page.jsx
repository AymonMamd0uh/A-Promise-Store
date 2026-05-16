"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem } =
    useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const router = useRouter();
  return (
    <section className="py-20 min-h-screen">
      <div className="container-custom">
        <h1 className="text-5xl font-bold mb-14">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Products */}
            <div className="lg:col-span-2 space-y-8">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col md:flex-row items-center gap-8 border border-gray-200 rounded-3xl p-6"
                >
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={350}
                    className="w-full md:w-55 h-65 object-cover rounded-2xl"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-semibold mb-4">{item.name}</h2>

                    <p className="text-gray-600 text-lg mb-4">${item.price}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-4 mb-6">
                      <button
                        onClick={() => decreaseQuantity(item._id)}
                        className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                      >
                        -
                      </button>

                      <span className="text-lg font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item._id)}
                        className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item._id)}
                      className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-[#f8f5f0] rounded-3xl p-8 h-fit sticky top-28">
              <h2 className="text-3xl font-bold mb-8">Cart Summary</h2>

              <div className="space-y-5 mb-8">
                <div className="flex items-center justify-between text-lg">
                  <span>Total Items</span>

                  <span>
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0,
                    )}
                  </span>
                </div>

                <div className="flex items-center justify-between text-2xl font-semibold">
                  <span>Total Price</span>

                  <span>${totalPrice}</span>
                </div>
              </div>

              <button
                onClick={() => router.push("/checkout")}
                className="w-full bg-black text-white py-4 rounded-2xl hover:bg-gray-800 transition duration-300"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
