"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteItemFromCart, increaseItemDb } from "@/actions/server/cart";

const CartItem = ({ item, removeItem, updateQuantity }) => {
  const { title, image, price, quantity, _id } = item;
  const [loading, setLoading] = useState(false);

  // Functionality (remains exactly as you wrote it)
  const handleDeleteCart = () => {
    setLoading(true);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteItemFromCart(_id);
        if (result.success) {
          removeItem(_id);
          Swal.fire({
            title: "Deleted!",
            text: "Product removed.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Ooops!",
            text: "Error deleting item.",
            icon: "error",
          });
        }
      }
      setLoading(false);
    });
  };

  const onIncrease = async () => {
    setLoading(true);
    const result = await increaseItemDb(_id, quantity);
    if (result.success) {
      updateQuantity(_id, quantity + 1);
    }
    setLoading(false);
  };

  const onDecrease = async () => {
    setLoading(true);
    const result = await increaseItemDb(_id, quantity); // Note: Assuming the same action decreases if quantity logic is handled in DB
    if (result.success) {
      updateQuantity(_id, quantity - 1);
    }
    setLoading(false);
  };

  return (
    <div className="relative group bg-white rounded-3xl border border-base-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-6 transition-all hover:shadow-xl hover:border-primary/20 mb-4">
      {/* Product Image - Increased size for desktop */}
      <div className="relative w-full sm:w-32 h-32 rounded-2xl overflow-hidden bg-slate-50 flex-shrink-0 border border-base-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Details - Better Hierarchy */}
      <div className="flex-1 w-full text-center sm:text-left space-y-1">
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">
            Product ID: {_id.slice(-6)}
          </span>
          <h3 className="font-black text-lg sm:text-xl text-neutral leading-tight mb-1">
            {title}
          </h3>
        </div>
        <div className="flex items-center justify-center sm:justify-start gap-3">
          <span className="text-2xl font-black text-neutral">
            ৳{price.toLocaleString()}
          </span>
          {loading && (
            <span className="loading loading-spinner loading-xs text-primary"></span>
          )}
        </div>
      </div>

      {/* Controls & Total */}
      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4 border-t sm:border-t-0 pt-4 sm:pt-0">
        {/* Quantity Selector - Cleaner design */}
        <div className="flex items-center bg-base-200/50 rounded-full p-1 border border-base-200">
          <button
            onClick={onDecrease}
            className="btn btn-circle btn-ghost btn-xs text-neutral/40 hover:text-error"
            disabled={quantity <= 1 || loading}
          >
            <FaMinus size={10} />
          </button>

          <span className="w-8 text-center font-black text-sm text-neutral">
            {quantity}
          </span>

          <button
            onClick={onIncrease}
            className="btn btn-circle btn-ghost btn-xs text-neutral/40 hover:text-success"
            disabled={quantity >= 10 || loading}
          >
            <FaPlus size={10} />
          </button>
        </div>

        {/* Subtotal & Delete Action */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] font-bold text-neutral/30 uppercase leading-none">
              Subtotal
            </p>
            <p className="font-black text-primary text-lg leading-tight">
              ৳{(price * quantity).toLocaleString()}
            </p>
          </div>
          <button
            onClick={handleDeleteCart}
            className="btn btn-circle btn-outline btn-error btn-sm border-2 hover:bg-error hover:text-white transition-all shadow-sm"
            title="Remove Item"
          >
            <FaTrashAlt size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
