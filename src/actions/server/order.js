"use server";

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { clearCart, getCart } from "./cart";
import { getInvoiceHtml } from "@/lib/orderInvoice";
import { sendEmail } from "@/lib/sendEmail";

const { dbConnect, collections } = require("@/lib/dbConnect");

const orderCollection = dbConnect(collections.ORDER);

export const createOrder = async (payload) => {
  const user = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };
  console.log(payload);

  const cart = await getCart();
  if (cart.length === 0) {
    return { success: false };
  }
  const newOrder = {
    createdAt: new Date().toISOString(),
    items: cart,
    ...payload,
  };
  try {
    const result = await orderCollection.insertOne(newOrder);

    if (result.insertedId) {
      await clearCart();

      // Trigger Email
      await sendEmail({
        to: user.email,
        subject: `Order Confirmed - Kids Zone #${result.insertedId.toString().slice(-6)}`,
        html: getInvoiceHtml({
          ...newOrder,
          id: result.insertedId.toString(),
        }),
      });

      return { success: true };
    }
  } catch (error) {
    console.error("CRITICAL_ORDER_ERROR:", error);
    return { success: false };
  }
};
