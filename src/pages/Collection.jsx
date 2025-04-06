
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortOption, setSortOption] = useState('relevant');

  // Toggle Category Selection
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  // Toggle SubCategory Selection
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  // Apply filters when category, subCategory, or search input changes
  useEffect(() => {
    let filtered = products.filter(product =>
      (category.length === 0 || category.includes(product.category)) &&
      (subCategory.length === 0 || subCategory.includes(product.subCategory)) &&
      (search.trim() === '' || product.name.toLowerCase().includes(search.toLowerCase())) // Search filtering
    );

    // Sorting Logic
    if (sortOption === "low-high") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [category, subCategory, search, products, sortOption]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Section */}
      <div className='min-w-60'>
        <p 
          className='my-2 text-xl flex items-center cursor-pointer gap-2' 
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTER
        </p>
        <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="Dropdown Icon" />
        
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {["Men", "Women", "Kids"].map(cat => (
              <label key={cat} className='flex gap-2'>
                <input 
                  className='w-3' 
                  type="checkbox" 
                  value={cat} 
                  checked={category.includes(cat)}
                  onChange={toggleCategory} 
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {["Topwear", "Bottomwear", "Winterwear"].map(type => (
              <label key={type} className='flex gap-2'>
                <input 
                  className='w-3' 
                  type="checkbox" 
                  value={type} 
                  checked={subCategory.includes(type)}
                  onChange={toggleSubCategory} 
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Products List */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1="ALL" text2="COLLECTIONS" />

          {/* Sorting */}
          <select 
            className='border-2 border-gray-300 text-sm px-2'
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Display Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          ) : (
            <p className="text-center col-span-2 md:col-span-3 lg:col-span-4 text-gray-500">
              No products available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
