'use client'
import React from "react";
import { assets } from "@/assets/assets";
import OrderSummary from "@/components/OrderSummary";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useAppContext } from "@/context/AppContext";

const Cart = () => {
  const { products, router, cartItems, addToCart, updateCartQuantity, getCartCount } = useAppContext();

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-10 px-6 md:px-16 lg:px-32 pt-12 mb-20">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-jp-borderLight">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="jp-editorial-number">CART</span>
                <span className="w-6 h-px bg-jp-accent" />
              </div>
              <p className="text-2xl md:text-3xl text-jp-navy font-medium tracking-tight">
                Your Cart
              </p>
            </div>
            <p className="text-sm text-jp-muted">{getCartCount()} items</p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="text-left">
                <tr>
                  <th className="text-nowrap pb-4 md:px-4 px-1 text-[11px] font-medium tracking-jp-wide uppercase text-jp-light">
                    Product Details
                  </th>
                  <th className="pb-4 md:px-4 px-1 text-[11px] font-medium tracking-jp-wide uppercase text-jp-light">
                    Price
                  </th>
                  <th className="pb-4 md:px-4 px-1 text-[11px] font-medium tracking-jp-wide uppercase text-jp-light">
                    Quantity
                  </th>
                  <th className="pb-4 md:px-4 px-1 text-[11px] font-medium tracking-jp-wide uppercase text-jp-light">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(cartItems).map((itemId) => {
                  const product = products.find(product => product._id === itemId);
                  if (!product || cartItems[itemId] <= 0) return null;

                  return (
                    <tr key={itemId} className="border-b border-jp-borderLight">
                      <td className="flex items-center gap-4 py-5 md:px-4 px-1">
                        <div>
                          <div className="rounded-xl overflow-hidden bg-jp-surface/50 p-2 border border-jp-borderLight">
                            <Image
                              src={product.image[0]}
                              alt={product.name}
                              className="w-16 h-auto object-cover mix-blend-multiply"
                              width={1280}
                              height={720}
                            />
                          </div>
                          <button
                            className="md:hidden text-xs text-jp-accent mt-1 font-medium"
                            onClick={() => updateCartQuantity(product._id, 0)}
                          >
                            Remove
                          </button>
                        </div>
                        <div className="text-sm hidden md:block">
                          <p className="text-jp-navy font-medium">{product.name}</p>
                          <p className="text-[10px] font-jp tracking-jp-wide text-jp-light mt-0.5">
                            {product.category}
                          </p>
                          <button
                            className="text-xs text-jp-accent mt-1 font-medium hover:text-jp-accentHover transition-colors"
                            onClick={() => updateCartQuantity(product._id, 0)}
                          >
                            Remove
                          </button>
                        </div>
                      </td>
                      <td className="py-5 md:px-4 px-1 text-jp-navy text-sm">${product.offerPrice}</td>
                      <td className="py-5 md:px-4 px-1">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateCartQuantity(product._id, cartItems[itemId] - 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-md border border-jp-border hover:border-jp-navy transition-colors duration-200"
                          >
                            <Image src={assets.decrease_arrow} alt="-" className="w-3 h-3" />
                          </button>
                          <input
                            onChange={e => updateCartQuantity(product._id, Number(e.target.value))}
                            type="number"
                            value={cartItems[itemId]}
                            className="w-10 h-7 border border-jp-border rounded-md text-center text-sm text-jp-navy outline-none focus:border-jp-accent transition-colors"
                          />
                          <button
                            onClick={() => addToCart(product._id)}
                            className="w-7 h-7 flex items-center justify-center rounded-md border border-jp-border hover:border-jp-navy transition-colors duration-200"
                          >
                            <Image src={assets.increase_arrow} alt="+" className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                      <td className="py-5 md:px-4 px-1 text-jp-navy text-sm font-medium">
                        ${(product.offerPrice * cartItems[itemId]).toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <button
            onClick={() => router.push('/all-products')}
            className="group flex items-center mt-8 gap-2 text-sm font-medium text-jp-muted hover:text-jp-navy transition-colors duration-200"
          >
            <Image
              className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-200"
              src={assets.arrow_right_icon_colored}
              alt="arrow"
            />
            Continue Shopping
          </button>
        </div>
        <OrderSummary />
      </div>
    </>
  );
};

export default Cart;
