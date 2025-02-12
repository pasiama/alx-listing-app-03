import { useEffect } from "react";
import { useRouter } from "next/router";

const PaymentStatus = () => {
    const router = useRouter();
    const { status, tx_ref } = router.query;

    useEffect(() => {
        if (status === "success") {
            alert(`Payment Successful! Transaction Ref: ${tx_ref}`);
            // Redirect to bookings or dashboard
            router.push("/bookings");
        } else {
            alert("Payment failed or canceled.");
            router.push("/booking");
        }
    }, [status, tx_ref, router]);

    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-xl font-semibold">Processing Payment...</h1>
        </div>
    );
};

export default PaymentStatus;
