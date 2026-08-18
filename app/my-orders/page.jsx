'use client';
import React, { useEffect, useState } from "react";
import { assets, orderDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";

const MyOrders = () => {
    const { currency } = useAppContext();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchOrders = async () => {
        setOrders(orderDummyData);
        setLoading(false);
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-between px-6 md:px-16 lg:px-32 py-12 min-h-screen">
                <div className="space-y-5">
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-1">
                            <span className="jp-editorial-number">ORDERS</span>
                            <span className="w-6 h-px bg-jp-accent" />
                        </div>
                        <p className="text-[10px] font-jp tracking-jp-wide text-jp-light uppercase mb-1">
                            注文履歴
                        </p>
                        <h2 className="text-2xl font-medium text-jp-navy tracking-tight">My Orders</h2>
                    </div>

                    {loading ? (
                        <Loading />
                    ) : (
                        <div className="max-w-5xl">
                            <div className="jp-divider mb-6" />
                            {orders.map((order, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col md:flex-row gap-6 justify-between p-6 border-b border-jp-borderLight hover:bg-white/50 transition-colors duration-200"
                                >
                                    <div className="flex-1 flex gap-5 max-w-80">
                                        <div className="w-12 h-12 rounded-xl bg-jp-surface flex items-center justify-center border border-jp-borderLight flex-shrink-0">
                                            <Image className="w-5 h-5 opacity-40" src={assets.box_icon} alt="order" />
                                        </div>
                                        <p className="flex flex-col gap-2">
                                            <span className="font-medium text-sm text-jp-navy">
                                                {order.items.map((item) => item.product.name + ` x ${item.quantity}`).join(", ")}
                                            </span>
                                            <span className="text-xs text-jp-muted">
                                                Items: {order.items.length}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="text-sm text-jp-muted leading-relaxed">
                                        <p className="font-medium text-jp-navy">{order.address.fullName}</p>
                                        <p>{order.address.area}</p>
                                        <p>{order.address.city}, {order.address.state}</p>
                                        <p>{order.address.phoneNumber}</p>
                                    </div>

                                    <p className="font-semibold text-jp-navy my-auto">
                                        {currency}{order.amount}
                                    </p>

                                    <div className="text-sm space-y-1">
                                        <p className="text-jp-muted">
                                            <span className="text-jp-light text-[10px] tracking-wide uppercase">Method</span>
                                            <br />COD
                                        </p>
                                        <p className="text-jp-muted">
                                            <span className="text-jp-light text-[10px] tracking-wide uppercase">Date</span>
                                            <br />{new Date(order.date).toLocaleDateString()}
                                        </p>
                                        <p className="text-jp-muted">
                                            <span className="text-jp-light text-[10px] tracking-wide uppercase">Payment</span>
                                            <br />
                                            <span className="inline-flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                                Pending
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyOrders;
