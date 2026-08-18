import React from 'react';
import Link from 'next/link';
import { assets } from '../../assets/assets';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const SideBar = () => {
    const pathname = usePathname();
    const menuItems = [
        { name: 'Add Product', path: '/seller', icon: assets.add_icon },
        { name: 'Product List', path: '/seller/product-list', icon: assets.product_list_icon },
        { name: 'Orders', path: '/seller/orders', icon: assets.order_icon },
    ];

    return (
        <div className='md:w-60 w-16 border-r border-jp-borderLight min-h-screen bg-white/30 py-4 flex flex-col'>
            {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                    <Link href={item.path} key={item.name} passHref>
                        <div className={`flex items-center py-3 px-4 gap-3 mx-2 rounded-lg transition-all duration-200 ${
                            isActive
                                ? "bg-jp-accent/10 text-jp-accent border-l-2 border-jp-accent"
                                : "text-jp-muted hover:bg-jp-surface hover:text-jp-navy border-l-2 border-transparent"
                        }`}>
                            <Image
                                src={item.icon}
                                alt={item.name.toLowerCase()}
                                className={`w-5 h-5 ${isActive ? 'opacity-80' : 'opacity-40'}`}
                            />
                            <p className='md:block hidden text-[13px] font-medium'>{item.name}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default SideBar;
