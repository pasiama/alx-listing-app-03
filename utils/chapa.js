const CHAPA_API_URL = "https://api.chapa.co/v1/transaction/initialize";
const CHAPA_SECRET_KEY = 'CHASECK_TEST-Q7gKaAmgONtsJiocMkoKNdkT5ftPdm2T'; // Replace with your actual Chapa secret key

export const initializePayment = async (bookingDetails, callbackUrl) => {
    try {
        const response = await fetch(CHAPA_API_URL, {
            method: "POST",
            mode: "no-cors", // Add this
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
                callback_url: `http://localhost:3000/booking?name=Villa%20Ocean%20Breeze/payment-status`, // URL to handle success/failure
                return_url: `http://localhost:3000/booking?name=Villa%20Ocean%20Breeze/payment-status`,
                title: "Property Booking",
                description: `Booking for ${bookingDetails?.propertyName}`,
            }),
            redirect: 'follow'
        });
console.log("response", response)
        const data = await response.text();
        if (!response.ok) {
            throw new Error(data.message || "Payment initialization failed");
        }

        return data;
    } catch (error) {
        console.error("Payment initialization failed:", error);
        return null;
    }
};
