import { getCart } from "@/actions/server/cart";
import CheckOut from "@/components/home/CheckOut";
import React from "react";

const CheckOutPage = async () => {
  const rawCartItems = await getCart();

  // FIX: Convert MongoDB objects to plain strings/objects
  const cartItems = rawCartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
    // If productId is also an ObjectId, stringify it too
    productId: item.productId?.toString(),
  }));
  return (
    <div>
      <h1 className="text-5xl font-bold border-l-4 border-primary pl-4">
        My Cart Items
      </h1>
      <CheckOut cartItems={cartItems}></CheckOut>
    </div>
  );
};

export default CheckOutPage;
