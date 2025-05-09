
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const { products, currency , addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [sizes, setSizes] = useState('');


  useEffect(() => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'> 
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        
        {/* Image Section */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img  
                src={item} 
                key={index} 
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' 
                alt={`Product ${index + 1}`} 
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="Selected product" />
          </div>
        </div>

        {/* Product Details Section */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          
          {/* Star Ratings */}
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="star" className="w-3.5" />
            <img src={assets.star_icon} alt="star" className="w-3.5" />
            <img src={assets.star_icon} alt="star" className="w-3.5" />
            <img src={assets.star_icon} alt="star" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="star dull" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>

          {/* Product Price */}
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          
          {/* Product Description */}
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          {/* Size Selection */}
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={()=> setSizes(item)} className={`border py-2 px-4 bg-gray-100 ${item === sizes ? 'border-orange-500' : ''}`} key={index}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=> addToCart(productData._id , sizes)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr  className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product </p>
            <p>Cash on delivery is avilable on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

<div className='mt-20'>
  <div className='flex'>
<b className='border px-5 py-3 text-sm'>Description</b>
<b className='border px-5 py-3 text-sm'>Reviews(122)</b>
  </div>
  <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores optio eius nam debitis nihil nulla repellat facilis! Totam error vero iste labore quas omnis tempora tenetur quod ab corrupti.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem alias dignissimos nisi, officiis voluptates voluptatibus consequuntur quasi optio sapiente magni itaque pariatur ab dolor cupiditate quis quibusdam cum iste quisquam!</p>
  </div>
</div>


<RelatedProduct category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
