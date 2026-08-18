'use client'
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const AllProducts = () => {
    const { products } = useAppContext();

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
                <div className="pt-12 w-full">
                    <div className="flex items-center gap-3 mb-1">
                        <span className="jp-editorial-number">ALL</span>
                        <span className="w-8 h-px bg-jp-accent" />
                    </div>
                    <p className="text-[10px] font-jp tracking-jp-wide text-jp-light uppercase mb-1">
                        全商品
                    </p>
                    <p className="text-2xl font-medium text-jp-navy tracking-tight">
                        All Products
                    </p>
                    <div className="jp-divider mt-4 mb-8" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full pb-14">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AllProducts;
