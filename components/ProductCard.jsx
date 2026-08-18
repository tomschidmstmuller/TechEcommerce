import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {
    const { currency, router } = useAppContext()

    return (
        <div
            onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
            className="group flex flex-col items-start gap-0.5 w-full cursor-pointer"
        >
            <div className="relative bg-jp-surface/50 rounded-xl w-full aspect-square flex items-center justify-center overflow-hidden border border-jp-borderLight group-hover:border-jp-border transition-all duration-300">
                <Image
                    src={product.image[0]}
                    alt={product.name}
                    className="group-hover:scale-105 transition-transform duration-500 ease-out object-cover w-3/4 h-3/4 md:w-4/5 md:h-4/5"
                    width={800}
                    height={800}
                />
                <button
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm border border-jp-borderLight opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
                >
                    <Image className="h-3 w-3 opacity-50" src={assets.heart_icon} alt="wishlist" />
                </button>

                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-jp text-[8px] tracking-jp-wide bg-jp-navy text-white px-2 py-1 rounded">
                      {product.category === 'Earphone' && 'イヤホン'}
                      {product.category === 'Headphone' && 'ヘッドフォン'}
                      {product.category === 'Smartphone' && 'スマートフォン'}
                      {product.category === 'Camera' && 'カメラ'}
                      {product.category === 'Laptop' && 'ラップトップ'}
                      {product.category === 'Accessories' && 'アクセサリー'}
                    </span>
                </div>
            </div>

            <div className="w-full pt-3 px-1">
                <p className="text-[11px] font-jp tracking-jp-wide text-jp-light uppercase mb-0.5">
                    {product.category}
                </p>
                <p className="text-sm font-medium text-jp-navy truncate leading-snug">
                    {product.name}
                </p>
                <p className="w-full text-xs text-jp-muted truncate mt-0.5 max-sm:hidden leading-relaxed">
                    {product.description}
                </p>

                <div className="flex items-center gap-1.5 mt-1.5">
                    <p className="text-[11px] font-mono text-jp-muted">4.5</p>
                    <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Image
                                key={index}
                                className="h-2.5 w-2.5"
                                src={index < Math.floor(4) ? assets.star_icon : assets.star_dull_icon}
                                alt="star"
                            />
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between w-full mt-2 pb-1">
                    <div className="flex items-baseline gap-1.5">
                        <p className="text-base font-semibold text-jp-navy">{currency}{product.offerPrice}</p>
                        <p className="text-xs text-jp-light line-through">{currency}{product.price}</p>
                    </div>
                    <button
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-1 text-[11px] font-medium text-jp-muted border border-jp-border rounded-md hover:bg-jp-navy hover:text-white hover:border-jp-navy transition-all duration-200"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
