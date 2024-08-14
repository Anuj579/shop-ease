import React from 'react';

const StoreCard = ({ image, name, address, hours }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl cursor-pointer">
      <figure>
        <img src={image} alt={name} className="object-cover w-full h-44 md:h-48 " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{address}</p>
        <p><strong>Hours:</strong> {hours}</p>
      </div>
    </div>
  );
};

export default StoreCard;
