import React from "react";

const BookingForm = () => (
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">Contact Detail</h2>
        <form>
          {/* Contact Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" className="border p-2 w-full mt-2" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" className="border p-2 w-full mt-2" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="border p-2 w-full mt-2" />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="text" id="phoneNumber" className="border p-2 w-full mt-2" />
            </div>
          </div>
    
          {/* Payment Information */}
          <h2 className="text-xl font-semibold mt-6">Pay with</h2>
          <div className="mt-4">
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" id="cardNumber" className="border p-2 w-full mt-2" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="expDate">Expiration Date</label>
              <input type="text" id="expDate" className="border p-2 w-full mt-2" />
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" className="border p-2 w-full mt-2" />
            </div>
          </div>
    
          {/* Billing Address */}
          <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
          <div className="mt-4">
            <label htmlFor="street">Street Address</label>
            <input type="text" id="street" className="border p-2 w-full mt-2" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="city">City</label>
              <input type="text" id="city" className="border p-2 w-full mt-2" />
            </div>
            <div>
              <label htmlFor="state">State</label>
              <input type="text" id="state" className="border p-2 w-full mt-2" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="zip">Zip Code</label>
              <input type="text" id="zip" className="border p-2 w-full mt-2" />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <input type="text" id="country" className="border p-2 w-full mt-2" />
            </div>
          </div>
    
          {/* Submit Button */}
          <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
            Confirm & Pay
          </button>
        </form>
      </div>
    );
    
    export default BookingForm;