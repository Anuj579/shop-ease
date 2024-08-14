import React from 'react';
import StoreCard from './StoreCard';

const NearbyStores = () => {
  const stores = [
    {
      image: 'https://images.pexels.com/photos/25809226/pexels-photo-25809226/free-photo-of-tablets-standing-on-display-in-a-store-with-electronics.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Tech World',
      address: '123 Main St, Cityville',
      hours: '9 AM - 9 PM'
    },
    {
      image: 'https://images.pexels.com/photos/5490916/pexels-photo-5490916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Book Haven',
      address: '456 Elm St, Townsville',
      hours: '10 AM - 8 PM'
    },
    {
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Gift Corner',
      address: '789 Oak St, Villageburg',
      hours: '11 AM - 7 PM'
    },
  ];

  return (
    <div className="p-3 md:p-5 container mx-auto bg-white">
      <h2 className="text-2xl font-semibold mb-6">Nearby Stores</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stores.map((store, index) => (
          <StoreCard key={index} {...store} />
        ))}
      </div>
    </div>
  );
};

export default NearbyStores;
