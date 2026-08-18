"use client"
import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";
import { useAppContext } from "@/context/AppContext";
import React from "react";

const Product = () => {
    const { id } = useParams();
    const { products, router, addToCart } = useAppContext();
    const [mainImage, setMainImage] = useState(null);
    const [productData, setProductData] = useState(null);

    const fetchProductData = async () => {
        const product = products.find(product => product._id === id);
        setProductData(product);
    }

    useEffect(() => {
        fetchProductData();
    }, [id, products.length])

    return productData ? (
        <>
            <Navbar />
            <div className="px-6 md:px-16 lg:px-32 pt-12 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    <div className="px-4 lg:px-12 xl:px-16">
                        <div className="rounded-2xl overflow-hidden bg-jp-surface/50 mb-4 border border-jp-borderLight">
                            <Image
                                src={mainImage || productData.image[0]}
                                alt={productData.name}
                                className="w-full h-auto object-cover mix-blend-multiply"
                                width={1280}
                                height={720}
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                            {productData.image.map((image, index) => (
                                <div
                                    key={index}
                                    onClick={() => setMainImage(image)}
                                    className={`cursor-pointer rounded-xl overflow-hidden bg-jp-surface/50 border-2 transition-all duration-200 ${
                                        (mainImage || productData.image[0]) === image
                                            ? "border-jp-accent"
                                            : "border-transparent hover:border-jp-border"
                                    }`}
                                >
                                    <Image
                                        src={image}
                                        alt="thumbnail"
                                        className="w-full h-auto object-cover mix-blend-multiply"
                                        width={1280}
                                        height={720}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="jp-editorial-number">DETAIL</span>
                            <span className="w-6 h-px bg-jp-accent" />
                            <span className="font-jp text-[9px] tracking-jp-wide text-jp-light">
                                商品詳細
                            </span>
                        </div>

                        <h1 className="text-2xl md:text-3xl font-medium text-jp-navy mb-3 tracking-tight">
                            {productData.name}
                        </h1>

                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center gap-0.5">
                                {[1,2,3,4].map(i => (
                                    <Image key={i} className="h-3.5 w-3.5" src={assets.star_icon} alt="star" />
                                ))}
                                <Image className="h-3.5 w-3.5" src={assets.star_dull_icon} alt="star" />
                            </div>
                            <span className="text-xs font-mono text-jp-muted">(4.5)</span>
                        </div>

                        <p className="text-sm text-jp-muted leading-relaxed mb-6">
                            {productData.description}
                        </p>

                        <div className="flex items-baseline gap-3 mb-6">
                            <p className="text-3xl font-semibold text-jp-navy">
                                ${productData.offerPrice}
                            </p>
                            <p className="text-base text-jp-light line-through">
                                ${productData.price}
                            </p>
                            <span className="text-xs font-medium text-jp-accent bg-jp-accentLight px-2 py-0.5 rounded">
                                Save ${(productData.price - productData.offerPrice).toFixed(2)}
                            </span>
                        </div>

                        <div className="jp-divider mb-6" />

                        <div className="overflow-x-auto mb-8">
                            <table className="table-auto border-collapse w-full max-w-72">
                                <tbody>
                                    {[
                                        ["Brand", "Generic"],
                                        ["Color", "Multi"],
                                        ["Category", productData.category],
                                    ].map(([label, value]) => (
                                        <tr key={label} className="border-b border-jp-borderLight">
                                            <td className="py-2.5 text-[11px] font-medium tracking-jp-wide uppercase text-jp-light pr-6">
                                                {label}
                                            </td>
                                            <td className="py-2.5 text-sm text-jp-navy">{value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => addToCart(productData._id)}
                                className="jp-btn-secondary flex-1"
                            >
                                Add to Cart
                            </button>
                            <button
                                onClick={() => { addToCart(productData._id); router.push('/cart') }}
                                className="jp-btn-primary flex-1"
                            >
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center mt-12">
                    <div className="flex items-end justify-between w-full mb-2">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <span className="jp-editorial-number">03</span>
                                <span className="w-8 h-px bg-jp-accent" />
                            </div>
                            <p className="text-[10px] font-jp tracking-jp-wide text-jp-light uppercase mb-1">
                                注目商品
                            </p>
                            <p className="text-2xl font-medium text-jp-navy tracking-tight">
                                Featured Products
                            </p>
                        </div>
                    </div>
                    <div className="w-full jp-divider mb-8" />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
                        {products.slice(0, 5).map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                    <button
                        onClick={() => router.push('/all-products')}
                        className="jp-btn-secondary mt-10 mb-16"
                    >
                        See All Products
                    </button>
                </div>
            </div>
            <Footer />
        </>
    ) : <Loading />;
};

export default Product;
