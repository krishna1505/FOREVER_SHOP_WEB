import React, { useContext, useState } from 'react'; 
import { assets } from '../assets/assets'; 
import { NavLink, Link, useNavigate } from 'react-router-dom';  // ✅ navigate import
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate(); // ✅ navigate hook
    const { setShowSearch, getCartCount, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to='/'><img src={assets.logo} className='w-36' alt="Logo img" /></Link> 

            <ul className='hidden sm:flex gap-8 text-sm text-gray-700'>
                {[
                    { name: "HOME", path: "/" },
                    { name: "COLLECTION", path: "/collection" },
                    { name: "ABOUT", path: "/about" },
                    { name: "CONTACT", path: "/contact" }
                ].map((item, index) => (
                    <li key={index} className="relative group">
                        <NavLink to={item.path} className='flex flex-col items-center gap-1'>
                            <p>{item.name}</p>
                            <hr className='w-0 h-[1.5px] bg-gray-700 transition-all duration-300 group-hover:w-2/4' />
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className='flex items-center gap-6'>
                <img 
                    onClick={() => setShowSearch(true)} 
                    src={assets.search_icon} 
                    className='w-5 cursor-pointer' 
                    alt="search icon" 
                />

                {/* Profile Icon */}
                <div className='group relative'>
                    <img 
                        onClick={() => token ? null : navigate('/login')} 
                        src={assets.profile_icon} 
                        className='w-5 cursor-pointer' 
                        alt="profile icon" 
                    />

                    {/* Dropdown Menu */}
                    {token && (
                        <div className='group-hover:block hidden absolute right-0 bg-white shadow-lg rounded-lg pt-4'>
                            <div className='flex flex-col gap-2 px-4 py-2'>
                                <button 
                                    onClick={() => navigate('/myorders')} 
                                    className='text-sm text-gray-700 hover:text-black'>My Orders</button>
                                
                                <button 
                                    onClick={logout} 
                                    className='text-sm text-red-500 hover:text-red-700'>Logout</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Cart Icon */}
                <div onClick={() => navigate('/cart')} className='relative cursor-pointer'>
                    <img src={assets.cart_icon} className='w-5' alt="bag icon" />
                    <div className='absolute -top-2 -right-2 text-[10px] h-4 w-4 flex items-center justify-center bg-red-500 text-white rounded-full'>
                        {getCartCount()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;


// import React, { useContext, useState } from 'react';
// import { assets } from '../assets/assets';
// import { NavLink, Link } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {
//     const [visible, setVisible] = useState(false);
//     const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//     const logout = () => {
//         navigate('/login')
//         localStorage.removeItem('token')
//         setToken('')
//         setCartItems({})
//     }

//     return (
//         <div className='flex items-center justify-between py-5 font-medium'>
//             <Link to='/'><img src={assets.logo} className='w-36' alt="Logo" /></Link>

//             <ul className='hidden sm:flex gap-8 text-sm text-gray-700'>
//                 {[
//                     { name: "HOME", path: "/" },
//                     { name: "COLLECTION", path: "/collection" },
//                     { name: "ABOUT", path: "/about" },
//                     { name: "CONTACT", path: "/contact" }
//                 ].map((item, index) => (
//                     <li key={index} className="relative group">
//                         <NavLink to={item.path} className='flex flex-col items-center gap-1'>
//                             <p>{item.name}</p>
//                             <hr className='w-0 h-[1.5px] bg-gray-700 transition-all duration-300 group-hover:w-2/4' />
//                         </NavLink>
//                     </li>
//                 ))}
//             </ul>

//             <div className='flex items-center gap-6'>
//                 {/* Search Icon */}
//                 <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="search" />

//                 {/* Cart Icon */}
//                 <div className='relative cursor-pointer' >
//                     <Link to={'/cart'}><img src={assets.cart_icon} className='w-5' alt="cart" /></Link>
//                     {getCartCount() > 0 && (
//                         <div className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full'>
//                             {getCartCount()}
//                         </div>
//                     )}
//                 </div>

//                 {/* Profile Icon */}
//                 <div className='group relative'>
//                     <img onClick={() => token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="profile" />
//                     {token && (
//                         <div className='hidden group-hover:block absolute right-0 bg-white shadow-lg rounded-lg p-3'>
//                             <p onClick={logout} className='cursor-pointer'>Logout</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar;

