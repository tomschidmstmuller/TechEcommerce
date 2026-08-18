import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.girl_with_headphone_image,
    title: "Unparalleled Sound",
    description: "Experience crystal-clear audio with premium headphones.",
    jp: "高音質",
    num: "01",
  },
  {
    id: 2,
    image: assets.girl_with_earphone_image,
    title: "Stay Connected",
    description: "Compact and stylish earphones for every occasion.",
    jp: "コンパクト",
    num: "02",
  },
  {
    id: 3,
    image: assets.boy_with_laptop_image,
    title: "Power in Every Pixel",
    description: "Shop the latest laptops for work, gaming, and more.",
    jp: "高性能",
    num: "03",
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-16">
      <div className="flex items-end justify-between w-full mb-2">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="jp-editorial-number">02</span>
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

      <div className="w-full jp-divider mb-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {products.map(({ id, image, title, description, jp, num }) => (
          <div key={id} className="relative group overflow-hidden rounded-2xl bg-jp-surface border border-jp-borderLight">
            <div className="relative overflow-hidden">
              <Image
                src={image}
                alt={title}
                className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-64 sm:h-72 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jp-navy/80 via-jp-navy/20 to-transparent" />

              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="jp-editorial-number text-white/60">{num}</span>
                <span className="w-4 h-px bg-white/40" />
                <span className="font-jp text-[9px] tracking-jp-wide text-white/50">
                  {jp}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <p className="font-medium text-lg text-white mb-1">{title}</p>
                <p className="text-sm text-white/60 leading-relaxed max-w-60 mb-4">
                  {description}
                </p>
                <button className="flex items-center gap-2 bg-white text-jp-navy px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-jp-accent hover:text-white transition-all duration-300">
                  Buy now
                  <Image className="h-3 w-3" src={assets.redirect_icon} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
