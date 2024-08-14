import React from 'react'

function CategoryCard({ image, title, price }) {
    return (
        <>
            {/* Card for smaller screens */}
            <div className="card card-side h-36 bg-base-100 shadow-xl md:hidden">
                <figure className='w-2/5'>
                    <img
                        src={image}
                        alt="card-img"
                        className='h-full'
                    />
                </figure>
                <div className="card-body w-3/5 p-3">
                    <h2 className="font-medium">{title}</h2>
                    <p className='text-sm'>Rs.{price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn py-1 px-3 h-4 min-h-10 btn-primary text-white">ADD <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Card for larger screens */}
            <div className="card bg-base-100 w-80 shadow-xl hidden md:block">
                <figure className='h-52 '>
                    <img
                        src={image}
                        alt="card-img"
                        className='hover:scale-110 transition-all duration-300' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Rs. {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-white">ADD <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryCard
