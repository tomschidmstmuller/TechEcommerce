'use client'
import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

const AddAddress = () => {
    const [address, setAddress] = useState({
        fullName: '',
        phoneNumber: '',
        pincode: '',
        area: '',
        city: '',
        state: '',
    })

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Navbar />
            <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col md:flex-row justify-between gap-12">
                <form onSubmit={onSubmitHandler} className="w-full max-w-lg">
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-1">
                            <span className="jp-editorial-number">ADDRESS</span>
                            <span className="w-6 h-px bg-jp-accent" />
                        </div>
                        <p className="text-[10px] font-jp tracking-jp-wide text-jp-light uppercase mb-1">
                            配送先追加
                        </p>
                        <p className="text-2xl md:text-3xl text-jp-navy font-medium tracking-tight">
                            Add Shipping Address
                        </p>
                    </div>

                    <div className="space-y-4">
                        <input
                            className="jp-input"
                            type="text"
                            placeholder="Full name"
                            onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                            value={address.fullName}
                        />
                        <input
                            className="jp-input"
                            type="text"
                            placeholder="Phone number"
                            onChange={(e) => setAddress({ ...address, phoneNumber: e.target.value })}
                            value={address.phoneNumber}
                        />
                        <input
                            className="jp-input"
                            type="text"
                            placeholder="Pin code"
                            onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                            value={address.pincode}
                        />
                        <textarea
                            className="jp-input resize-none"
                            rows={4}
                            placeholder="Address (Area and Street)"
                            onChange={(e) => setAddress({ ...address, area: e.target.value })}
                            value={address.area}
                        />
                        <div className="flex gap-3">
                            <input
                                className="jp-input"
                                type="text"
                                placeholder="City/District/Town"
                                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                value={address.city}
                            />
                            <input
                                className="jp-input"
                                type="text"
                                placeholder="State"
                                onChange={(e) => setAddress({ ...address, state: e.target.value })}
                                value={address.state}
                            />
                        </div>
                    </div>

                    <button type="submit" className="jp-btn-primary w-full mt-8">
                        Save Address
                    </button>
                </form>

                <div className="hidden md:flex items-center justify-center flex-1">
                    <Image
                        className="max-w-sm opacity-60"
                        src={assets.my_location_image}
                        alt="location"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AddAddress;
