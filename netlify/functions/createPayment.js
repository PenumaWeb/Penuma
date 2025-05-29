// netlify/functions/createPayment.js

export async function handler(event, context) {
  const MERCHANT_SECRET = "MzAxNzE5MTc4ODI3NjE4Mzk5NjQyMDQ4NTY5NTgzMDQ4ODEyMDQ4"; // put your real one here
  const PAYMENT_GATEWAY_API = "https://sandbox.payhere.lk/pay/checkout"; // or your gateway endpoint

  const paymentData = {
    merchant_id: "1230637",
    return_url: "https://penuma.org/index.html",
    cancel_url: "https://penuma.org/index.html",
    notify_url: "https://penuma.org/notify",
    order_id: "Order123",
    items: "Tutoring Session",
    amount: "400.00",
    currency: "LKR",
    first_name: "Student",
    last_name: "User",
    email: "student@example.com",
    phone: "0771234567",
    address: "No.1, Galle Road",
    city: "Colombo",
    country: "Sri Lanka"
  };

  // Normally you'd sign the request or store this server-side
  return {
    statusCode: 200,
    body: JSON.stringify({
      payment_url: PAYMENT_GATEWAY_API + "?" + new URLSearchParams(paymentData).toString()
    })
  };
}
