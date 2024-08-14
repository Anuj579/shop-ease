import React from 'react'
import CategoryCard from './CategoryCard'
import electronics1 from '../assets/electronics1.webp'
import stationery from '../assets/stationery.webp'
import toy1 from '../assets/toys1.webp'
import toy2 from '../assets/toys2.webp'
import kitchen from '../assets/kitchen.webp'
import fitness1 from '../assets/fitness1.webp'
import fitness2 from '../assets/fitness2.webp'

function Category() {
  return (
    <div className='container mx-auto flex flex-col gap-8'>
      {/* Electronics */}
      <section className='bg-white p-3 md:p-5 pb-6 md:pb-12'>
        <div className='flex items-center justify-between mb-5 md:py-2'>
          <h1 className='font-semibold text-2xl'>Electronics</h1>
          <div className='h-full rounded-full bg-secondary'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#fff" className="size-6 p-1 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        <div className='flex flex-col justify-center md:flex-row flex-wrap gap-6'>
          <CategoryCard image={electronics1} title="Wireless Earbuds" price="799" />
          <CategoryCard image='https://images.unsplash.com/photo-1698729617018-7475086abd54?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title="Smart Watch" price="1,399" />
          <CategoryCard image='https://images.pexels.com/photos/844923/pexels-photo-844923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title="Headphones" price="1,699" />
          <CategoryCard image='https://images.unsplash.com/photo-1672211775632-bcb4b68eb2bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title="Mechanical Keyboard" price="1,999" />
        </div>
      </section>

      {/* Books and Stationery */}
      <section className='bg-white p-3 md:p-5 pb-6 md:pb-12'>
        <div className='flex items-center justify-between mb-5 md:py-2'>
          <h1 className='font-semibold text-2xl'>Books & Stationery</h1>
          <div className='h-full rounded-full bg-secondary'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#fff" className="size-6 p-1 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        <div className='flex flex-col justify-center md:flex-row flex-wrap gap-6'>
          <CategoryCard image={stationery} title="Pencil Colors" price="199" />
          <CategoryCard image='https://images.unsplash.com/photo-1660611957471-4571e715aac2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title="Sticky Notes" price="159" />
          <CategoryCard image='https://images.unsplash.com/photo-1612367980327-7454a7276aa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title="Notebook" price="119" />
          <CategoryCard image='https://images.unsplash.com/photo-1661732017125-f425c3e86467?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title="Creative Essentials Kit" price="499" />
        </div>
      </section>

      {/* Gifts and Toys */}
      <section className='bg-white p-3 md:p-5 pb-6 md:pb-12'>
        <div className='flex items-center justify-between mb-5 md:py-2'>
          <h1 className='font-semibold text-2xl'>Gifts & Toys</h1>
          <div className='h-full rounded-full bg-secondary'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#fff" className="size-6 p-1 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        <div className='flex flex-col justify-center md:flex-row flex-wrap gap-6'>
          <CategoryCard image={toy1} title="Gift Boxes" price="159" />
          <CategoryCard image={toy2} title="Toys for Kids" price="499" />
          <CategoryCard image={toy1} title="Gift Boxes" price="159" />
          <CategoryCard image={toy2} title="Toys for Kids" price="499" />
        </div>
      </section>

      {/* Home & Kitchen */}
      <section className='bg-white p-3 md:p-5 pb-6 md:pb-12'>
        <div className='flex items-center justify-between mb-5 md:py-2'>
          <h1 className='font-semibold text-2xl'>Home & Kitchen</h1>
          <div className='h-full rounded-full bg-secondary'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#fff" className="size-6 p-1 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        <div className='flex flex-col justify-center md:flex-row flex-wrap gap-6'>
          <CategoryCard image={kitchen} title="Tea Cups" price="299" />
          <CategoryCard image='https://images.unsplash.com/photo-1715690999086-4981aaaf4a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title="Plates & Spoons" price="799" />
          <CategoryCard image={kitchen} title="Tea Cups" price="299" />
          <CategoryCard image='https://images.unsplash.com/photo-1715690999086-4981aaaf4a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title="Plates & Spoons" price="799" />
        </div>
      </section>

      {/* Fitness & Sports */}
      <section className='bg-white p-3 md:p-5 md:pb-12'>
        <div className='flex items-center justify-between mb-5 md:py-2'>
          <h1 className='font-semibold text-2xl'>Fitness & Sports</h1>
          <div className='h-full rounded-full bg-secondary'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#fff" className="size-6 p-1 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        <div className='flex flex-col justify-center md:flex-row flex-wrap gap-6'>
          <CategoryCard image={fitness1} title="Dumbbells" price="999" />
          <CategoryCard image={fitness2} title="Football" price="559" />
          <CategoryCard image={fitness1} title="Dumbbells" price="999" />
          <CategoryCard image={fitness2} title="Football" price="559" />
        </div>
      </section>
    </div>
  )
}

export default Category
