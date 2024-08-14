import React from 'react';

const TrendingProductCard = ({ image, title, price }) => (
    <>
        <div className="card bg-base-100 w-full shadow-xl relative">
            <figure>
                <img
                    src={image}
                    alt="card-img"
                    className='object-cover w-full h-44 md:h-48 hover:scale-110 transition-all duration-300' />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title">{title} </h2>
                <p>Rs. {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white">ADD <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg></button>
                </div>
            </div>
        </div>
    </>
);


export default TrendingProductCard;
