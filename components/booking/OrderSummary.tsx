import React, { useState } from "react";
import { initializePayment } from "@/utils/chapa"; // Import the payment function

const OrderSummary: React.FC<{ bookingDetails }> = ({ bookingDetails }) => {
    const [loading, setLoading] = useState(false);
  

    const handlePayment = async () => {
        setLoading(true);
        const callbackUrl = `http://localhost:3000/booking?name=Villa%20Ocean%20Breeze/payment-status`; // Redirect URL after payment

        const paymentResponse = await initializePayment(bookingDetails);
console.log("book details",bookingDetails)
console.log("paymentResponse",paymentResponse)

        if (paymentResponse && paymentResponse.status === "success") {
            window.location.href = paymentResponse.data.checkout_url; // Redirect to Chapa payment page
        } else {
            alert("Payment initialization failed. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Review Order Details</h2>
            <div className="flex items-center mt-4">
                <img src="assets/3.jpeg" alt="Property" className="w-32 h-32 object-cover rounded-md" />
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">{bookingDetails?.propertyName}</h3>
                    <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
                    <p className="text-sm text-gray-500">
                        {bookingDetails?.startDate} • {bookingDetails?.totalNights} Nights
                    </p>
                </div>
            </div>

            {/* Price Breakdown */}
            <div className="mt-6">
                <div className="flex justify-between">
                    <p>Booking Fee</p>
                    <p>${bookingDetails?.bookingFee}</p>
                </div>
                <div className="flex justify-between mt-2">
                    <p>Subtotal</p>
                    <p>${bookingDetails?.price}</p>
                </div>
                <div className="flex justify-between mt-2 font-semibold">
                    <p>Grand Total</p>
                    <p>${bookingDetails?.bookingFee + bookingDetails?.price}</p>
                </div>
            </div>

            {/* Pay Now Button */}
            <button
                onClick={handlePayment}
                disabled={loading}
                className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
            >
                {loading ? "Processing..." : "Pay Now"}
            </button>
        </div>
    );
};

export default OrderSummary;
