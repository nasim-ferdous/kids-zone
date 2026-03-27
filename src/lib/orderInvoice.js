export const getInvoiceHtml = (order) => {
  const date = new Date(order.createdAt).toLocaleDateString();

  const itemsTable = order.items
    .map(
      (item) => `
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #eee;">
        <img src="${item.image}" width="40" height="40" style="border-radius: 4px; vertical-align: middle; margin-right: 10px;" alt="${item.title}" />
        <span style="color: #1e293b; font-size: 14px;">${item.title}</span>
      </td>
      <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: center; color: #475569;">${item.quantity}</td>
      <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right; color: #1e293b; font-weight: bold;">৳${item.price.toLocaleString()}</td>
    </tr>
  `,
    )
    .join("");

  const total = order.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
      <div style="background-color: #570df8; color: white; padding: 30px 20px; text-align: center;">
        <img src="https://i.ibb.co.com/Jw0Z0Sxm/logo.webp" width="120" style="display: block; margin: 0 auto 15px auto; outline: none; border: none;" alt="Kids Zone Logo" />
        <h1 style="margin: 0; font-size: 24px;">Order Confirmed!</h1>
        <p style="margin: 5px 0 0; opacity: 0.9; font-size: 16px;">Thank you for shopping with Kids Zone</p>
      </div>
      
      <div style="padding: 30px; background-color: white;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
          <div style="flex: 1;">
            <p style="color: #64748b; margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Order ID</p>
            <p style="font-weight: bold; margin: 0; color: #1e293b;">#${order.id.slice(-6).toUpperCase()}</p>
          </div>
          <div style="flex: 1; text-align: right;">
            <p style="color: #64748b; margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Date</p>
            <p style="font-weight: bold; margin: 0; color: #1e293b;">${date}</p>
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <thead>
            <tr style="background-color: #f8fafc; color: #475569; font-size: 12px; text-transform: uppercase;">
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e2e8f0;">Product</th>
              <th style="padding: 12px; text-align: center; border-bottom: 2px solid #e2e8f0;">Qty</th>
              <th style="padding: 12px; text-align: right; border-bottom: 2px solid #e2e8f0;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${itemsTable}
          </tbody>
        </table>

        <div style="text-align: right; padding-top: 15px;">
          <p style="margin: 0; color: #64748b; font-size: 14px;">Grand Total</p>
          <h2 style="margin: 0; color: #570df8; font-size: 32px;">৳${total.toLocaleString()}</h2>
        </div>

        <div style="margin-top: 30px; padding: 20px; background-color: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px;">
          <h4 style="margin: 0 0 10px 0; color: #1e293b; font-size: 16px;">Shipping Details:</h4>
          <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6;">
            <strong>${order.name}</strong><br>
            ${order.address}, ${order.city}<br>
            Phone: ${order.phone}
          </p>
        </div>

        <div style="margin-top: 40px; text-align: center; border-top: 1px solid #eee; padding-top: 30px;">
          <h3 style="color: #570df8; margin: 0 0 10px 0;">We're so excited!</h3>
          <p style="color: #475569; font-size: 14px; line-height: 1.5; margin: 0 auto; max-width: 400px;">
            Thank you for choosing <strong>Kids Zone</strong> for your little one's needs. We're currently getting your items ready for their new home! You'll receive another update once your package is on its way.
          </p>
          <p style="margin-top: 20px; font-weight: bold; color: #1e293b;">- The Kids Zone Team 🧸</p>
        </div>
      </div>
      
      <div style="text-align: center; padding: 20px; background-color: #f8fafc; color: #94a3b8; font-size: 12px; border-top: 1px solid #eee;">
        Need help? Contact us at support@kidszone.com<br>
        © 2026 Kids Zone. All rights reserved.
      </div>
    </div>
  `;
};
