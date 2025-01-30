import React from "react";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage(){

      return(
            <div className="container mx-auto p-6">
                  <div className="grid grid-cols-2 gap-6">
                        <BookingForm/>
                        <OrderSummary/>
                        <CancellationPolicy/>
                  </div>
            </div>
      )
}