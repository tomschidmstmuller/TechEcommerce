'use client';
import React, { useEffect, useState } from "react";
import { assets, orderDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/seller/Footer";
import Loading from "@/components/Loading";

const Orders = () => {
    const { currency } = useAppContext();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSellerOrders = async () => {
        setOrders(orderDummyData);
        setLoading(false);
    }

    useEffect(() => {
        fetchSellerOrders();
    }, []);

    return (
        <div className="flex-1 h-screen overflow-scroll flex flex-col justify-between text-sm bg-jp-bg">
            {loading ? <Loading /> : <div className="md:p-10 p-4 space-y-5">
                <div className="mb-2">
                    <div className="flex items-center gap-3 mb-1">
                        <span className="jp-editorial-number">ORDERS</span>
                        <span className="w-6 h-px bg-jp-accent" />
                    </div>
                    <h2 className="text-lg font-medium text-jp-navy">Orders</h2>
                </div>
                <div className="max-w-4xl rounded-xl overflow-hidden">
                    {orders.map((order, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-5 justify-between p-5 border-b border-jp-borderLight hover:bg-white/50 transition-colors duration-200">
                            <div className="flex-1 flex gap-5 max-w-80">
                                <div className="w-12 h-12 rounded-xl bg-jp-surface flex items-center justify-center border border-jp-borderLight flex-shrink-0">
                                    <Image className="w-5 h-5 opacity-40" src={assets.box_icon} alt="order" />
                                </div>
                                <p className="flex flex-col gap-2">
                                    <span className="font-medium text-sm text-jp-navy">
                                        {order.items.map((item) => item.product.name + ` x ${item.quantity}`).join(", ")}
                                    </span>
                                    <span className="text-xs text-jp-muted">Items: {order.items.length}</span>
                                </p>
                            </div>
                            <div className="text-sm text-jp-muted leading-relaxed">
                                <p className="font-medium text-jp-navy">{order.address.fullName}</p>
                                <p>{order.address.area}</p>
                                <p>{order.address.city}, {order.address.state}</p>
                                <p>{order.address.phoneNumber}</p>
                            </div>
                            <p className="font-semibold text-jp-navy my-auto">{currency}{order.amount}</p>
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
            </div>}
            <Footer />
        </div>
    );
};

export default Orders;
