import React from 'react'
import TrendingProductCard from './TrendingProductCard';

function TrendingProducts() {
  const products = [
    { image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Macbook Pro', price: '1,15,990' },
    { image: 'https://images.pexels.com/photos/844923/pexels-photo-844923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Headphones', price: '1,699' },
    { image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Macbook Pro', price: '1,15,990' },
    { image: 'https://images.pexels.com/photos/844923/pexels-photo-844923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Headphones', price: '1,699' },

  ];
  return (
    <div className='bg-base-content my-10 p-3 py-6 md:px-5 md:py-10'>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-medium text-white mb-5'>Trending Products</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 p-4'>
          {products.map((product, index) => (
            <TrendingProductCard key={index} image={product.image} title={product.title} price={product.price} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrendingProducts
