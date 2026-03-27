import { getCart } from "@/actions/server/cart";
import CartItem from "@/components/cards/CartItem";
import Cart from "@/components/home/Cart";
import React from "react";

const CartPage = async () => {
  const rawCartItems = await getCart();

  // FIX: Convert MongoDB objects to plain strings/objects
  const cartItems = rawCartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
    // If productId is also an ObjectId, stringify it too
    productId: item.productId?.toString(),
  }));

  return (
    <>
      <div className="mb-8">
        <h1 className="text-5xl font-bold border-l-4 border-primary pl-4">
          My Cart Items
        </h1>
      
      </div>
      <Cart cartItems={cartItems}></Cart>
    </>
  );
};

export default CartPage;
