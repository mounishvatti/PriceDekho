import { Searchbar } from '@/components/Searchbar'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@headlessui/react'
import { FaRegHeart } from "react-icons/fa";
import HeroCarousel from '@/components/HeroCarousel'
import { getAllProducts } from '@/lib/actions'
import ProductCard from '@/components/ProductCard' // Add this import statement
import { FaFaceSmileBeam } from "react-icons/fa6";

const Home = async () => {
  const allProducts = await getAllProducts();
  return (
    <>
      <section className='px-6 md:px-20 py-24'>
        <div className='flex max-xl:flex-col gap-16'>
          <div className='flex flex-col justify-center'>
            <p className='small-text'>
              Smart Shopping Starts Here:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className='head-text'>
              Unleash the Power of Price
              <span className='text-primary'>Dekho</span>
            </h1>
            <p className='mt-6'>
              Powerful eCommerce price tracking tool to help you Track, Compare, and Save whenever you are trying to make an online purchase.
            </p>
            
            <Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>

      <section className='trending-section'>
        <h2 className='section-text'>Trending</h2>

        <div className='flex flex-wrap gap-x-8 gap-y-16'>
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
      <section>
        <h1 className='section-text flex justify-center'>Like Price<span className='text-primary'>Dekho</span>?</h1>
        <h2 className='section-text flex justify-center'>Give us a star on GitHub :) </h2>
        <Link href="https://github.com/mounishvatti/PriceDekho" target="_blank" className='flex justify-center pt-6 pb-20'>
            <Button className="inline-flex items-center gap-2 rounded-md bg-gray-900 py-3 px-5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
              <FaRegHeart /> Star on GitHub
            </Button>
        </Link>
      </section>
    </>
  )
}

export default Home
