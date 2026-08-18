"use client"
import React, { useState } from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useAuthSafe } from "@/components/Providers";

const navLinks = [
  { href: "/", label: "Home", jp: "ホーム" },
  { href: "/all-products", label: "Shop", jp: "ショップ" },
  { href: "/", label: "About Us", jp: "会社概要" },
  { href: "/", label: "Contact", jp: "お問い合わせ" },
];

const Navbar = () => {
  const { isSeller, router } = useAppContext();
  const { user, openSignIn } = useAuthSafe();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-jp-bg/80 backdrop-blur-xl border-b border-jp-borderLight">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-32 h-16">
        <div className="flex items-center gap-3">
          <Image
            className="cursor-pointer h-7 w-auto md:h-8"
            onClick={() => router.push('/')}
            src={assets.logo}
            alt="QuickCart"
          />
          <span className="hidden md:block jp-editorial-number opacity-40">EST.2025</span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative flex flex-col items-center"
            >
              <span className="text-[13px] font-medium tracking-wide text-jp-muted group-hover:text-jp-navy transition-colors duration-200">
                {link.label}
              </span>
              <span className="font-jp text-[8px] tracking-jp-wide text-jp-light opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {link.jp}
              </span>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-jp-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          {isSeller && (
            <button
              onClick={() => router.push('/seller')}
              className="hidden md:flex text-[11px] font-medium tracking-jp-wide border border-jp-border text-jp-muted px-4 py-1.5 rounded-full hover:border-jp-navy hover:text-jp-navy transition-all duration-200"
            >
              Seller Dashboard
            </button>
          )}

          <button className="p-2 rounded-full hover:bg-jp-surface transition-colors duration-200">
            <Image className="w-4 h-4 opacity-60" src={assets.search_icon} alt="search" />
          </button>

          <div className="hidden md:block">
            <button
              onClick={openSignIn}
              className="flex items-center gap-2 text-[13px] font-medium text-jp-muted hover:text-jp-navy transition-colors duration-200"
            >
              <Image src={assets.user_icon} alt="account" className="w-4 h-4 opacity-60" />
              Account
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-full hover:bg-jp-surface transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-px bg-jp-navy transition-transform duration-200 ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
              <span className={`block w-5 h-px bg-jp-navy transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-jp-navy transition-transform duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-jp-borderLight bg-jp-bg/95 backdrop-blur-xl">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center justify-between py-2 border-b border-jp-borderLight"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-sm font-medium text-jp-navy">{link.label}</span>
                <span className="font-jp text-[10px] tracking-jp-wide text-jp-light">{link.jp}</span>
              </Link>
            ))}
            <div className="pt-2 flex items-center gap-4">
              {isSeller && (
                <button
                  onClick={() => { router.push('/seller'); setMobileOpen(false); }}
                  className="text-[11px] font-medium tracking-jp-wide border border-jp-border text-jp-muted px-4 py-1.5 rounded-full"
                >
                  Seller Dashboard
                </button>
              )}
              <button onClick={openSignIn} className="flex items-center gap-2 text-sm text-jp-muted">
                <Image src={assets.user_icon} alt="account" className="w-4 h-4 opacity-60" />
                Account
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
