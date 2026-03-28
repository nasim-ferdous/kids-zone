"use client";
import React, { useMemo, useState } from "react";
import CartItem from "../cards/CartItem";
import Link from "next/link";
import { FaLock, FaArrowRight, FaShoppingBasket } from "react-icons/fa";

const Cart = ({ cartItems = [] }) => {
  const [items, setItems] = useState(cartItems);
  const totalQuantity = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items],
  );
  const totalPrice = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items],
  );

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item._id != id));
  };

  const updateQuantity = (id, q) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id == id ? { ...item, quantity: q } : item,
      ),
    );
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center bg-base-100 rounded-3xl border-2 border-dashed border-base-200">
        <div className="text-6xl mb-4 opacity-20">🛒</div>
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <p className="text-base-content/60 mb-6">
          Looks like you haven't added anything yet.
        </p>
        <Link href="/products" className="btn btn-primary rounded-full px-8">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
      {/* Left: Items List (8 Columns) */}
      <div className="lg:col-span-8 w-full space-y-4">
        <div className="flex items-center justify-between px-2 mb-2">
          <span className="text-sm font-bold text-base-content/50 uppercase tracking-widest flex items-center gap-2">
            <FaShoppingBasket className="text-primary" /> Review Items
          </span>
          <span className="badge badge-ghost font-bold">
            {items.length} Products
          </span>
        </div>
        {items.map((item) => (
          <CartItem
            key={item._id}
            item={item}
            removeItem={removeItem}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>

      {/* Right: Order Summary (4 Columns) - Sticky on Desktop */}
      <aside className="lg:col-span-4 w-full lg:sticky lg:top-24">
        <div className="bg-neutral text-neutral-content p-8 rounded-[2.5rem] shadow-xl border border-neutral-focus">
          <h2 className="text-xl font-black mb-6 flex items-center gap-2 uppercase tracking-tighter">
            Order Summary
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center opacity-70 text-sm">
              <span>Subtotal ({totalQuantity} units)</span>
              <span className="font-bold">৳{totalPrice.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center opacity-70 text-sm">
              <span>Estimated Shipping</span>
              <span className="font-bold text-success">FREE</span>
            </div>

            <div className="h-[1px] bg-neutral-content/10 my-4"></div>

            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold">Total Amount</span>
              <span className="text-3xl font-black text-primary tracking-tighter">
                ৳{totalPrice.toLocaleString()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="btn btn-primary btn-block h-16 rounded-full text-lg font-black uppercase tracking-widest shadow-lg border-none group"
            >
              Confirm Order
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>

            <div className="flex flex-col items-center gap-2 mt-6 opacity-40 italic">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                <FaLock /> Secure Checkout
              </div>
            </div>
          </div>
        </div>

        {/* Support Note */}
        <div className="mt-6 p-4 bg-base-200/50 rounded-2xl border border-base-200 text-center">
          <p className="text-xs font-medium text-base-content/60">
            Need help? Call us at{" "}
            <span className="text-primary font-bold">+880 1XXX-XXXXXX</span>
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Cart;
