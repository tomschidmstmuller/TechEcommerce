import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const footerLinks = {
  Company: ["Home", "About Us", "Careers", "Press"],
  Support: ["Contact Us", "FAQs", "Shipping", "Returns"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className="bg-jp-charcoal text-white/70">
      <div className="px-6 md:px-16 lg:px-32 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Image className="h-7 w-auto brightness-0 invert opacity-80 mb-6" src={assets.logo} alt="QuickCart" />
            <p className="text-sm leading-relaxed text-white/40 max-w-xs">
              Premium electronics and gaming store. Curating the finest technology from Tokyo to the world.
            </p>
            <div className="mt-6 font-jp text-[10px] tracking-jp-wide text-white/20">
              テクノロジーショップ
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-medium tracking-jp-wide uppercase text-white/30 mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              &copy; 2025 QuickCart. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/30 hover:text-white/60 transition-colors duration-200">
                <Image className="w-4 h-4 brightness-0 invert opacity-40 hover:opacity-70 transition-opacity" src={assets.instagram_icon} alt="instagram" />
              </a>
              <a href="#" className="text-white/30 hover:text-white/60 transition-colors duration-200">
                <Image className="w-4 h-4 brightness-0 invert opacity-40 hover:opacity-70 transition-opacity" src={assets.facebook_icon} alt="facebook" />
              </a>
              <a href="#" className="text-white/30 hover:text-white/60 transition-colors duration-200">
                <Image className="w-4 h-4 brightness-0 invert opacity-40 hover:opacity-70 transition-opacity" src={assets.twitter_icon} alt="twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
