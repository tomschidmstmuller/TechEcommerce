import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between bg-jp-charcoal my-16 rounded-2xl overflow-hidden">
      <div className="absolute top-0 right-0 font-jp text-[160px] md:text-[240px] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
        PLAY
      </div>

      <div className="relative z-10 md:pl-20 py-10 md:py-0">
        <Image
          className="max-w-48 md:max-w-56 drop-shadow-2xl"
          src={assets.jbl_soundbox_image}
          alt="JBL Soundbox"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-3 px-6 py-8 md:px-0">
        <div className="flex items-center gap-3 mb-1">
          <span className="font-jp text-[10px] tracking-jp-wide text-white/30">
            ゲーミング体験
          </span>
          <span className="w-6 h-px bg-jp-accent" />
        </div>

        <h2 className="text-2xl md:text-3xl font-medium max-w-[300px] text-white tracking-tight leading-snug">
          Level Up Your Gaming Experience
        </h2>
        <p className="max-w-[343px] text-sm text-white/40 leading-relaxed">
          From immersive sound to precise controls — everything you need to win
        </p>

        <button className="group flex items-center justify-center gap-2 px-10 py-3 bg-jp-accent text-white rounded-lg text-sm font-medium hover:bg-jp-accentHover transition-all duration-200 mt-4">
          Buy now
          <Image
            className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200"
            src={assets.arrow_icon_white}
            alt="arrow"
          />
        </button>
      </div>

      <div className="relative z-10 hidden md:block md:mr-16">
        <Image
          className="max-w-72 drop-shadow-2xl"
          src={assets.md_controller_image}
          alt="Controller"
        />
      </div>

      <div className="md:hidden pb-8">
        <Image
          className="max-w-48 drop-shadow-2xl"
          src={assets.sm_controller_image}
          alt="Controller"
        />
      </div>
    </div>
  );
};

export default Banner;
