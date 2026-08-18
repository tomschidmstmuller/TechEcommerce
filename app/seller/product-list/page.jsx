'use client'
import React, { useEffect, useState } from "react";
import { assets, productsDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/seller/Footer";
import Loading from "@/components/Loading";

const ProductList = () => {
  const { router } = useAppContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSellerProduct = async () => {
    setProducts(productsDummyData);
    setLoading(false);
  }

  useEffect(() => {
    fetchSellerProduct();
  }, []);

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between bg-jp-bg">
      {loading ? <Loading /> : <div className="w-full md:p-10 p-4">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-1">
            <span className="jp-editorial-number">PRODUCTS</span>
            <span className="w-6 h-px bg-jp-accent" />
          </div>
          <h2 className="text-lg font-medium text-jp-navy">All Products</h2>
        </div>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-xl bg-white border border-jp-borderLight">
          <table className="table-fixed w-full overflow-hidden">
            <thead className="text-jp-navy text-sm text-left">
              <tr>
                <th className="w-2/3 md:w-2/5 px-4 py-3 font-medium text-[11px] tracking-jp-wide uppercase text-jp-light truncate">
                  Product
                </th>
                <th className="px-4 py-3 font-medium text-[11px] tracking-jp-wide uppercase text-jp-light truncate max-sm:hidden">
                  Category
                </th>
                <th className="px-4 py-3 font-medium text-[11px] tracking-jp-wide uppercase text-jp-light truncate">
                  Price
                </th>
                <th className="px-4 py-3 font-medium text-[11px] tracking-jp-wide uppercase text-jp-light truncate max-sm:hidden">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-jp-muted">
              {products.map((product, index) => (
                <tr key={index} className="border-t border-jp-borderLight hover:bg-jp-surface/30 transition-colors duration-150">
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <div className="bg-jp-surface/50 rounded-lg p-2 border border-jp-borderLight">
                      <Image
                        src={product.image[0]}
                        alt={product.name}
                        className="w-14 h-14 object-cover mix-blend-multiply"
                        width={1280}
                        height={720}
                      />
                    </div>
                    <span className="truncate w-full text-jp-navy font-medium">
                      {product.name}
                    </span>
                  </td>
                  <td className="px-4 py-3 max-sm:hidden">
                    <span className="font-jp text-[10px] tracking-jp-wide bg-jp-surface text-jp-muted px-2 py-0.5 rounded">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-jp-navy font-medium">${product.offerPrice}</td>
                  <td className="px-4 py-3 max-sm:hidden">
                    <button
                      onClick={() => router.push(`/product/${product._id}`)}
                      className="flex items-center gap-1 px-3 py-1.5 bg-jp-navy text-white text-xs font-medium rounded-lg hover:bg-jp-charcoal transition-colors duration-200"
                    >
                      <span className="hidden md:block">Visit</span>
                      <Image className="h-3 w-3 brightness-0 invert" src={assets.redirect_icon} alt="visit" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>}
      <Footer />
    </div>
  );
};

export default ProductList;
