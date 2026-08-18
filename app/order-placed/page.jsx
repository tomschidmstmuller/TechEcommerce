'use client'
import { assets } from '@/assets/assets'
import { useAppContext } from '@/context/AppContext'
import Image from 'next/image'
import { useEffect } from 'react'

const OrderPlaced = () => {
  const { router } = useAppContext()

  useEffect(() => {
    setTimeout(() => {
      router.push('/my-orders')
    }, 5000)
  }, [])

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-6 bg-jp-bg'>
      <div className="flex justify-center items-center relative">
        <div className="absolute w-24 h-24 rounded-full border border-jp-accent/20 animate-ping" />
        <div className="w-20 h-20 rounded-full bg-jp-accent/10 flex items-center justify-center border border-jp-accent/20">
          <Image className="w-8 h-8" src={assets.checkmark} alt='success' />
        </div>
      </div>
      <div className="text-center">
        <p className="text-[10px] font-jp tracking-jp-wide text-jp-light uppercase mb-2">
          注文完了
        </p>
        <div className="text-2xl font-medium text-jp-navy tracking-tight">
          Order Placed Successfully
        </div>
        <p className="text-sm text-jp-muted mt-2">
          Redirecting to your orders...
        </p>
      </div>
    </div>
  )
}

export default OrderPlaced
