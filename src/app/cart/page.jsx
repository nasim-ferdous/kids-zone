import { getCart } from "@/actions/server/cart";
import Cart from "@/components/home/Cart";
import React from "react";
import { ShoppingBag } from "lucide-react";

const CartPage = async () => {
  const rawCartItems = await getCart();

  const cartItems = rawCartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
    productId: item.productId?.toString(),
  }));

  return (
    <div className="min-h-screen bg-base-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs">
              <ShoppingBag size={16} /> Your Shopping Basket
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-neutral tracking-tight uppercase">
              My <span className="text-primary">Cart</span> Items
            </h1>
          </div>
          <p className="text-sm font-bold text-neutral/40 italic">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} ready for checkout
          </p>
        </div>

        {/* Cart Component */}
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
};

export default CartPage;