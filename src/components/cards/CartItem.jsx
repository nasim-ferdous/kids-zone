"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteItemFromCart, increaseItemDb } from "@/actions/server/cart";

const CartItem = ({ item, removeItem, updateQuantity }) => {
  const { title, image, price, quantity, _id } = item;
  const [loading, setLoading] = useState(false);

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
            text: "Your Product has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Ooops!",
            text: "Something went wrong.",
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
      Swal.fire("success", "Quantity has been increased", "success");
      updateQuantity(_id, quantity + 1);
    }
    setLoading(false);
  };
  const onDecrease = async () => {
    setLoading(true);
    const result = await increaseItemDb(_id, quantity);
    if (result.success) {
      Swal.fire("success", "Quantity has been decreased", "success");
      updateQuantity(_id, quantity - 1);
    }
    setLoading(false);
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm border border-base-200 p-4 flex flex-col sm:flex-row items-center gap-4 mb-4 transition-all hover:shadow-md">
      {/* Product Image */}
      <div className="avatar">
        <div className="w-24 h-24 rounded-xl overflow-hidden bg-base-200">
          <Image
            src={image}
            alt={title}
            width={10}
            height={10}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-1 text-center sm:text-left space-y-1">
        <h3 className="font-bold text-lg leading-tight text-base-content">
          {title}
        </h3>
        <p className="text-primary font-bold text-xl">
          ৳{price.toLocaleString()}
        </p>
        <p className="text-xs text-base-content/50 uppercase tracking-widest font-semibold">
          Item ID: {_id.slice(-6)}
        </p>
      </div>

      {/* Controls: Quantity & Delete */}
      <div className="flex flex-col items-center sm:items-end gap-3">
        {/* Quantity Selector */}
        <div className="join border border-base-300 rounded-lg">
          <button
            onClick={onDecrease}
            className="btn btn-ghost btn-sm join-item px-2 hover:bg-error/10 hover:text-error"
            disabled={quantity <= 1 || loading}
          >
            <FaMinus size={12} />
          </button>

          <div className="join-item flex items-center justify-center w-10 font-bold text-sm bg-base-100">
            {quantity}
          </div>

          <button
            onClick={onIncrease}
            className="btn btn-ghost btn-sm join-item px-2 hover:bg-success/10 hover:text-success"
            disabled={quantity >= 10 || loading}
          >
            <FaPlus size={12} />
          </button>
        </div>

        {/* Delete & Total Price */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <span className="text-xs text-base-content/50 block">Subtotal</span>
            <span className="font-bold">
              ৳{(price * quantity).toLocaleString()}
            </span>
          </div>
          <button
            onClick={handleDeleteCart}
            className="btn btn-circle btn-ghost btn-sm text-error hover:bg-error hover:text-white transition-colors"
            title="Remove Item"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
