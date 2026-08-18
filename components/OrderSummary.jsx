import { addressDummyData } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import React, { useEffect, useState } from "react";

const OrderSummary = () => {
  const { currency, router, getCartCount, getCartAmount } = useAppContext();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userAddresses, setUserAddresses] = useState([]);

  const fetchUserAddresses = async () => {
    setUserAddresses(addressDummyData);
  };

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setIsDropdownOpen(false);
  };

  const createOrder = async () => {};

  useEffect(() => {
    fetchUserAddresses();
  }, []);

  return (
    <div className="w-full md:w-96 bg-white rounded-2xl border border-jp-borderLight p-6">
      <div className="flex items-center gap-3 mb-5">
        <span className="jp-editorial-number">SUMMARY</span>
        <span className="w-6 h-px bg-jp-accent" />
      </div>

      <h2 className="text-lg font-medium text-jp-navy tracking-tight mb-5">
        Order Summary
      </h2>

      <div className="jp-divider mb-5" />

      <div className="space-y-5">
        <div>
          <label className="text-[11px] font-medium tracking-jp-wide uppercase text-jp-muted block mb-2">
            Select Address
          </label>
          <div className="relative inline-block w-full text-sm">
            <button
              className="w-full text-left px-4 py-2.5 bg-jp-bg border border-jp-border rounded-lg text-jp-navy text-sm focus:outline-none focus:border-jp-accent focus:ring-2 focus:ring-jp-accent/10 transition-all duration-200"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="truncate block">
                {selectedAddress
                  ? `${selectedAddress.fullName}, ${selectedAddress.area}, ${selectedAddress.city}`
                  : "Select Address"}
              </span>
              <svg
                className={`w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-200 ${isDropdownOpen ? "rotate-0" : "-rotate-90"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#9A9DA6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul className="absolute w-full bg-white border border-jp-border rounded-lg shadow-lg mt-1 z-10 py-1.5">
                {userAddresses.map((address, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-jp-surface cursor-pointer text-sm text-jp-navy transition-colors duration-150"
                    onClick={() => handleAddressSelect(address)}
                  >
                    {address.fullName}, {address.area}, {address.city}
                  </li>
                ))}
                <li
                  onClick={() => router.push("/add-address")}
                  className="px-4 py-2 hover:bg-jp-surface cursor-pointer text-center text-sm text-jp-accent font-medium transition-colors duration-150"
                >
                  + Add New Address
                </li>
              </ul>
            )}
          </div>
        </div>

        <div>
          <label className="text-[11px] font-medium tracking-jp-wide uppercase text-jp-muted block mb-2">
            Promo Code
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter code"
              className="jp-input flex-1"
            />
            <button className="jp-btn-primary px-6 py-2.5 text-xs">
              Apply
            </button>
          </div>
        </div>

        <div className="jp-divider my-5" />

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <p className="text-jp-muted">Items ({getCartCount()})</p>
            <p className="font-medium text-jp-navy">{currency}{getCartAmount()}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-jp-muted">Shipping Fee</p>
            <p className="font-medium text-jp-accent">Free</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-jp-muted">Tax (2%)</p>
            <p className="font-medium text-jp-navy">{currency}{Math.floor(getCartAmount() * 0.02)}</p>
          </div>

          <div className="jp-divider my-3" />

          <div className="flex justify-between items-center pt-1">
            <p className="text-base font-medium text-jp-navy">Total</p>
            <p className="text-lg font-semibold text-jp-navy">
              {currency}{getCartAmount() + Math.floor(getCartAmount() * 0.02)}
            </p>
          </div>
        </div>
      </div>

      <button onClick={createOrder} className="jp-btn-primary w-full mt-6">
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
