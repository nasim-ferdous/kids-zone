"use client";
import React, { useMemo, useState } from "react";
import CartItem from "../cards/CartItem";
import Link from "next/link";

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
  return (
    <div>
      <p className="mt-2 text-base-content/60">
        You have {items.length} items in your cart
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-3">
          {items.map((item) => (
            // Now item._id is a plain string, so this won't crash
            <CartItem
              key={item._id}
              item={item}
              removeItem={removeItem}
              updateQuantity={updateQuantity}
            />
          ))}
        </div>

        {/* Order Summary Placeholder */}
        {/* Order Summary */}
        <div className="flex-1 bg-base-100 p-6 rounded-2xl h-fit border border-base-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-base-200 text-base-content">
            Order Summary
          </h2>

          <div className="space-y-4">
            {/* Detailed Breakdown */}
            <div className="flex justify-between items-center text-base-content/70">
              <span>Total Items</span>
              <span className="font-semibold text-base-content">
                {items.length}
              </span>
            </div>

            <div className="flex justify-between items-center text-base-content/70">
              <span>Total Quantity</span>
              <span className="font-semibold text-base-content">
                {totalQuantity}
              </span>
            </div>

            <div className="flex justify-between items-center text-base-content/70">
              <span>Subtotal</span>
              <span className="font-semibold text-base-content">
                ৳{totalPrice.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center text-base-content/70">
              <span>Shipping Fee</span>
              <span className="font-semibold text-success">Free</span>
            </div>

            {/* Divider */}
            <div className="divider my-2"></div>

            {/* Final Total */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold">Total Amount</span>
              <span className="text-2xl font-black text-primary">
                ৳{totalPrice.toLocaleString()}
              </span>
            </div>

            {/* Confirm Button */}
            <Link
              disabled={items.length === 0}
              className="btn btn-primary btn-block text-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              href={"/checkout"}
            >
              Confirm Order
            </Link>

            <p className="text-[10px] text-center text-base-content/40 mt-4 uppercase tracking-widest font-bold">
              Secure Checkout Powered by NextAuth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
