const CHAPA_API_URL = "https://api.chapa.co/v1/transaction/initialize";
const CHAPA_SECRET_KEY = "CHASECK_TEST-QQWMTDEcDV9LPUwqDH8tT3i1ps6CaffE"; // Replace with your actual Chapa secret key

export const initializePayment = async (bookingDetails, callbackUrl) => {
    try {
        const response = await fetch(CHAPA_API_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${CHAPA_SECRET_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                amount: bookingDetails?.bookingFee + bookingDetails?.price,
                currency: "USD", // Change currency if needed
                email: bookingDetails?.email, // Customer email
                first_name: bookingDetails?.firstName,
                last_name: bookingDetails?.lastName,
                phone_number: bookingDetails?.phoneNumber,
                tx_ref: `txn_${Date.now()}`, // Unique transaction reference
                callback_url: callbackUrl, // URL to handle success/failure
                return_url: callbackUrl,
                title: "Property Booking",
                description: `Booking for ${bookingDetails?.propertyName}`,
            }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Payment initialization failed");
        }

        return data;
    } catch (error) {
        console.error("Payment initialization failed:", error);
        return null;
    }
};
