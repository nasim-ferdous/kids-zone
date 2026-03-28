import { getCart } from "@/actions/server/cart";
import CheckOut from "@/components/home/CheckOut";
import React from "react";
// import { FaShieldCheck } from "react-icons/fa6";

const CheckOutPage = async () => {
  const rawCartItems = await getCart();

  const cartItems = rawCartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
    productId: item.productId?.toString(),
  }));

  return (
    <div className="min-h-screen bg-base-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-neutral uppercase tracking-tight">
              Secure <span className="text-primary">Checkout</span>
            </h1>
            <p className="text-neutral/50 font-medium mt-2 italic">
              Please provide your delivery details to complete the order.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-base-200 shadow-sm">
            {/* <FaShieldCheck className="text-success text-2xl" /> */}
            <div className="leading-none">
              <p className="text-[10px] font-black uppercase opacity-40">
                Security
              </p>
              <p className="text-sm font-bold">SSL Encrypted</p>
            </div>
          </div>
        </header>

        <CheckOut cartItems={cartItems} />
      </div>
    </div>
  );
};

export default CheckOutPage;
