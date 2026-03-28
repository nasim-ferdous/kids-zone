"use client";
import { handleCart } from "@/actions/server/cart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const CartButton = ({ product }) => {
  const session = useSession();
  const router = useRouter();
  const path = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const add2cart = async () => {
    setIsLoading(true);
    const isLogin = session?.status == "authenticated";

    if (isLogin) {
      const result = await handleCart(product._id);
      if (result.success) {
        Swal.fire("Added to cart", product?.title, "success");
      } else {
        Swal.fire(
          "Already Added",
          "To Increase quantity go to your CART",
          "error",
        );
      }
      setIsLoading(false);
    } else {
      router.push(`/login?callbackUrl=${path}`);
      setIsLoading(false);
    }
  };
  return (
    <button
      disabled={session.status == "loading" || isLoading}
      onClick={add2cart}
      className="btn btn-primary w-full flex-1 gap-3"
    >
      <FaCartPlus className="text-xl" /> Add to Cart
    </button>
  );
};

export default CartButton;
