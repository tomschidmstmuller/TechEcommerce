import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'

const Navbar = () => {
  const { router } = useAppContext()

  return (
    <div className='flex items-center px-6 md:px-10 py-3 justify-between border-b border-jp-borderLight bg-jp-bg'>
      <div className="flex items-center gap-3">
        <Image onClick={() => router.push('/')} className='h-7 w-auto cursor-pointer' src={assets.logo} alt="QuickCart" />
        <span className="hidden md:block w-px h-5 bg-jp-border" />
        <span className="hidden md:block text-[10px] font-medium tracking-jp-wide text-jp-light uppercase">
          Seller Panel
        </span>
      </div>
      <button className='text-xs font-medium text-jp-muted border border-jp-border px-5 py-2 rounded-full hover:border-jp-navy hover:text-jp-navy transition-all duration-200'>
        Logout
      </button>
    </div>
  )
}

export default Navbar
