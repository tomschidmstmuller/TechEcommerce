import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {
  const { products, router } = useAppContext();

  return (
    <div className="flex flex-col items-center pt-16">
      <div className="flex items-end justify-between w-full mb-2">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="jp-editorial-number">01</span>
            <span className="w-8 h-px bg-jp-accent" />
          </div>
          <p className="text-[10px] font-jp tracking-jp-wide text-jp-light uppercase mb-1">
            おすすめ商品
          </p>
          <p className="text-2xl font-medium text-jp-navy tracking-tight">
            Popular Products
          </p>
        </div>
        <button
          onClick={() => router.push('/all-products')}
          className="text-xs font-medium text-jp-muted hover:text-jp-navy transition-colors duration-200 border-b border-jp-border hover:border-jp-navy pb-0.5"
        >
          View All →
        </button>
      </div>

      <div className="w-full jp-divider mb-8" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-4 pb-14 w-full">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <button
        onClick={() => router.push('/all-products')}
        className="jp-btn-secondary"
      >
        See All Products
      </button>
    </div>
  );
};

export default HomeProducts;
