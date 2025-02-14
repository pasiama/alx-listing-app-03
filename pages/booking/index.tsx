/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState, useEffect} from "react";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage(){
      const [bookingDetails, setBookingDetails] = useState(null);

        useEffect(() => {
              // Fetch or compute booking details here
              setBookingDetails({
                    propertyName: "Luxury Villa",
                    bookingFee: 50,
                    price: 200,
                    email: "user@example.com",
                    firstName: "John",
                    lastName: "Doe",
                    phoneNumber: "+123456789",
                    startDate: "2025-03-10",
                    totalNights: 3
              } as any);
        }, []);
      return(
            <div className="container mx-auto p-6">
                  <div className="grid grid-cols-2 gap-6">
                        <BookingForm/>
                        <OrderSummary bookingDetails={bookingDetails} />
                        <CancellationPolicy/>
                  </div>
            </div>
      )
}