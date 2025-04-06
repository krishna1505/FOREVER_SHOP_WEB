
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext); // Get currency from context

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img
          className='hover:scale-110 transition ease-in-out'
          src={image && image[0] ? image[0] : 'default_image_url'} // Fallback to a default image if not available
          alt={name}
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      
      {/* Display price along with currency */}
      <p className='text-sm font-medium'>
        {currency} {price.toFixed(2)} {/* Display price with currency */}
      </p>
    </Link>
  );
};

export default ProductItem;
