"use client";
import { createOrder } from "@/actions/server/order";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import {
  FaTruck,
  FaCreditCard,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Swal from "sweetalert2";

const CheckOut = ({ cartItems = [] }) => {
  const session = useSession();
  const router = useRouter();
  // Memoized Totals
  const totalQuantity = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems],
  );
  const totalPrice = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cartItems],
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Order Data:", {
      ...data,
      cartItems,
      totalAmount: totalPrice,
    });
    const payload = {
      ...data,
      totalQuantity: totalQuantity,
      totalAmount: totalPrice,
    };
    // Proceed to payment/order action here
    const result = await createOrder(payload);
    if (result.success) {
      Swal.fire("success", "Order Added", "success");
      router.push("/");
    } else {
      Swal.fire("error", "Something went wrong", "error");
      router.push("/cart");
    }
  };
  if (session.status === "loading") {
    return <h1>Loading.....</h1>;
  }
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side: Shipping Form */}
        <div className="lg:flex-[2] space-y-6">
          <div className="card bg-base-100 shadow-sm border border-base-200">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4 flex items-center gap-2">
                <FaTruck className="text-primary" /> Shipping Information
              </h2>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="form-control col-span-2 md:col-span-1">
                  <label className="label">
                    <span className="label-text font-semibold">Full Name</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-base-content/40">
                      <FaUser />
                    </span>
                    <input
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="input input-bordered w-full pl-10"
                      required
                      readOnly
                      value={session?.data?.user?.name}
                    />
                  </div>
                </div>

                <div className="form-control col-span-2 md:col-span-1">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-base-content/40">
                      <FaEnvelope />
                    </span>
                    <input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="input input-bordered w-full pl-10"
                      required
                      readOnly
                      value={session?.data?.user?.email}
                    />
                  </div>
                </div>

                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Shipping Address
                    </span>
                  </label>
                  <div className="relative">
                    <span className="absolute top-4 left-3 text-base-content/40">
                      <FaMapMarkerAlt />
                    </span>
                    <textarea
                      name="address"
                      placeholder="123 Street, City, Country"
                      className="textarea textarea-bordered w-full pl-10 h-24"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="form-control col-span-2 md:col-span-1">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Phone Number
                    </span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control col-span-2 md:col-span-1">
                  <label className="label">
                    <span className="label-text font-semibold">City</span>
                  </label>
                  <input
                    name="city"
                    type="text"
                    placeholder="Dhaka"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="col-span-2 mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block gap-2 text-lg"
                  >
                    <FaCreditCard /> Checkout with cash on delevery
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="lg:flex-[1]">
          <div className="card bg-base-200 shadow-sm sticky top-24">
            <div className="card-body">
              <h2 className="card-title text-xl border-b border-base-300 pb-2 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-base-content/70">Items Count:</span>
                  <span className="font-bold">{cartItems.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base-content/70">Total Quantity:</span>
                  <span className="font-bold">{totalQuantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base-content/70">Subtotal:</span>
                  <span className="font-bold">
                    ৳{totalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base-content/70">Shipping:</span>
                  <span className="text-success font-bold">Free</span>
                </div>

                <div className="divider"></div>

                <div className="flex justify-between items-center text-lg">
                  <span className="font-bold">Grand Total:</span>
                  <span className="font-black text-2xl text-primary">
                    ৳{totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Mini Item List Preview */}
              <div className="mt-6 space-y-2 max-h-40 overflow-y-auto pr-2">
                <p className="text-xs font-bold uppercase text-base-content/40">
                  Items in Order
                </p>
                {cartItems.map((item) => (
                  <div key={item._id} className="flex justify-between text-sm">
                    <span className="truncate w-32">{item.title}</span>
                    <span className="text-base-content/60">
                      x{item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
