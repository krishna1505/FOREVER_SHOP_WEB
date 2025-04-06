







// // import { createContext, useState } from "react";
// // import { products } from "../assets/assets";
// // import { toast } from "react-toastify";
// // import { useNavigate } from "react-router-dom";

// // export const ShopContext = createContext();

// // const ShopContextProvider = ({ children }) => {
// //   const navigate = useNavigate();
// //   const currency = "₹";
// //   const delivery_fee = 50;

// //   const [search, setSearch] = useState("");
// //   const [showSearch, setShowSearch] = useState(true);
// //   const [cartItems, setCartItems] = useState({});
// //   const [orderPlaced, setOrderPlaced] = useState(false);
// //   const [token, setToken] = useState(localStorage.getItem("token") || "");

// //   // Get Total Cart Count
// //   const getCartCount = () => {
// //     let count = 0;
// //     for (const itemId in cartItems) {
// //       for (const size in cartItems[itemId]) {
// //         count += cartItems[itemId][size];
// //       }
// //     }
// //     return count;
// //   };

// //   // Add To Cart
// //   const addToCart = (itemId, size) => {
// //     if (!size) {
// //       toast.error("Please select a product size first.");
// //       return;
// //     }

// //     const cartData = structuredClone(cartItems);

// //     if (!cartData[itemId]) {
// //       cartData[itemId] = {};
// //     }

// //     cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
// //     setCartItems(cartData);

// //     toast.success("Item added to cart!");
// //   };
// //   const getTotalPrice = () => {
// //     let total = 0;
// //     for (const itemId in cartItems) {
// //       for (const size in cartItems[itemId]) {
// //         const product = products.find((p) => p._id === itemId);
// //         if (product) {
// //           total += product.price * cartItems[itemId][size];
// //         }
// //       }
// //     }
// //     return total;
// //   };
  

// //   // Update Cart
// //   const updateCart = (itemId, size, change) => {
// //     const cartData = structuredClone(cartItems);

// //     if (!cartData[itemId] || !cartData[itemId][size]) return;

// //     if (cartData[itemId][size] + change > 0) {
// //       cartData[itemId][size] += change;
// //     } else {
// //       delete cartData[itemId][size];
// //       if (Object.keys(cartData[itemId]).length === 0) {
// //         delete cartData[itemId];
// //       }
// //     }
// //     setCartItems(cartData);
// //   };

// //   // Remove From Cart
// //   const removeFromCart = (itemId, size) => {
// //     const cartData = structuredClone(cartItems);
// //     delete cartData[itemId][size];
// //     if (Object.keys(cartData[itemId]).length === 0) {
// //       delete cartData[itemId];
// //     }
// //     setCartItems(cartData);
// //   };

// //   return (
// //     <ShopContext.Provider
// //       value={{
// //         products,
// //         currency,
// //         delivery_fee,
// //         search,
// //         setSearch,
// //         showSearch,
// //         setShowSearch,
// //         cartItems,
// //         addToCart,
// //         updateCart,
// //         removeFromCart,
// //            getTotalPrice, 
// //         orderPlaced,
// //         setOrderPlaced,
// //         getCartCount, // ✅ Add this
// //       }}
// //     >
// //       {children}
// //     </ShopContext.Provider>
// //   );
// // };

// // export default ShopContextProvider;


// import { createContext, useState } from "react";
// import { products } from "../assets/assets";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export const ShopContext = createContext();

// const ShopContextProvider = ({ children }) => {
//   const navigate = useNavigate();
//   const currency = "₹";
//   const delivery_fee = 50;

//   const [search, setSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(true);
//   const [cartItems, setCartItems] = useState({});
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
  
//   // State to store the placed orders
//   const [orders, setOrders] = useState(JSON.parse(localStorage.getItem("orders")) || []);

//   // Get Total Cart Count
//   const getCartCount = () => {
//     let count = 0;
//     for (const itemId in cartItems) {
//       for (const size in cartItems[itemId]) {
//         count += cartItems[itemId][size];
//       }
//     }
//     return count;
//   };

//   // Add To Cart
//   const addToCart = (itemId, size) => {
//     if (!size) {
//       toast.error("Please select a product size first.");
//       return;
//     }

//     const cartData = structuredClone(cartItems);

//     if (!cartData[itemId]) {
//       cartData[itemId] = {};
//     }

//     cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
//     setCartItems(cartData);

//     toast.success("Item added to cart!");
//   };

//   // Get Total Price
//   const getTotalPrice = () => {
//     let total = 0;
//     for (const itemId in cartItems) {
//       for (const size in cartItems[itemId]) {
//         const product = products.find((p) => p._id === itemId);
//         if (product) {
//           total += product.price * cartItems[itemId][size];
//         }
//       }
//     }
//     return total;
//   };

//   // Add Order
//   const addOrder = (order) => {
//     const newOrders = [...orders, order];
//     setOrders(newOrders);
//     localStorage.setItem("orders", JSON.stringify(newOrders));  // Save orders to localStorage for persistence
//   };

//   // Update Cart
//   const updateCart = (itemId, size, change) => {
//     const cartData = structuredClone(cartItems);

//     if (!cartData[itemId] || !cartData[itemId][size]) return;

//     if (cartData[itemId][size] + change > 0) {
//       cartData[itemId][size] += change;
//     } else {
//       delete cartData[itemId][size];
//       if (Object.keys(cartData[itemId]).length === 0) {
//         delete cartData[itemId];
//       }
//     }
//     setCartItems(cartData);
//   };

// // Add this removeFromCart function if it doesn't exist already
// const removeFromCart = (itemId, size) => {
//   const cartData = structuredClone(cartItems);
//   delete cartData[itemId][size];
//   if (Object.keys(cartData[itemId]).length === 0) {
//     delete cartData[itemId];
//   }
//   setCartItems(cartData);
//   // Optionally, you can also update orders here if you want to manage order removal.
//   // Note: You can handle order state similarly by filtering out the removed items.
// };


//   return (
//     <ShopContext.Provider
//       value={{
//         products,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         cartItems,
//         addToCart,
//         updateCart,
//         removeFromCart,
//         getTotalPrice,
//         orderPlaced,
//         setOrderPlaced,
//         getCartCount,
//         orders, // Provide orders in context
//         addOrder, // Provide addOrder function to add new orders
//       }}
//     >
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;




// import { createContext, useState } from "react";
// import { products } from "../assets/assets";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export const ShopContext = createContext();

// const ShopContextProvider = ({ children }) => {
//   const navigate = useNavigate();
//   const currency = "₹";
//   const delivery_fee = 50;

//   const [search, setSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(true);
//   const [cartItems, setCartItems] = useState({});
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
  
//   // State to store the placed orders
//   const [orders, setOrders] = useState(JSON.parse(localStorage.getItem("orders")) || []);

//   // Get Total Cart Count
//   const getCartCount = () => {
//     let count = 0;
//     for (const itemId in cartItems) {
//       for (const size in cartItems[itemId]) {
//         count += cartItems[itemId][size];
//       }
//     }
//     return count;
//   };

//   // Add To Cart
//   const addToCart = (itemId, size) => {
//     if (!size) {
//       toast.error("Please select a product size first.");
//       return;
//     }

//     const cartData = structuredClone(cartItems);

//     if (!cartData[itemId]) {
//       cartData[itemId] = {};
//     }

//     cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
//     setCartItems(cartData);

//     toast.success("Item added to cart!");
//   };

//   // Get Total Price
//   const getTotalPrice = () => {
//     let total = 0;
//     for (const itemId in cartItems) {
//       for (const size in cartItems[itemId]) {
//         const product = products.find((p) => p._id === itemId);
//         if (product) {
//           total += product.price * cartItems[itemId][size];
//         }
//       }
//     }
//     return total;
//   };

//   // Add Order
//   const addOrder = (order) => {
//     const newOrders = [...orders, order];
//     setOrders(newOrders);
//     localStorage.setItem("orders", JSON.stringify(newOrders));  // Save orders to localStorage for persistence
//   };

//   // Update Cart
//   const updateCart = (itemId, size, change) => {
//     const cartData = structuredClone(cartItems);

//     if (!cartData[itemId] || !cartData[itemId][size]) return;

//     if (cartData[itemId][size] + change > 0) {
//       cartData[itemId][size] += change;
//     } else {
//       delete cartData[itemId][size];
//       if (Object.keys(cartData[itemId]).length === 0) {
//         delete cartData[itemId];
//       }
//     }
//     setCartItems(cartData);
//   };

//   // Remove from Cart
//   const removeFromCart = (itemId, size) => {
//     const cartData = structuredClone(cartItems);
//     delete cartData[itemId][size];
//     if (Object.keys(cartData[itemId]).length === 0) {
//       delete cartData[itemId];
//     }
//     setCartItems(cartData);
//   };

//   return (
//     <ShopContext.Provider
//       value={{
//         products,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         cartItems,
//         addToCart,
//         updateCart,
//         removeFromCart,
//         getTotalPrice,
//         orderPlaced,
//         setOrderPlaced,
//         getCartCount,
//         orders, // Provide orders in context
//         addOrder, // Provide addOrder function to add new orders
//       }}
//     >
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;



// import React, { createContext, useState } from "react";
// import { products } from "../assets/assets";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export const ShopContext = createContext();

// const ShopContextProvider = ({ children }) => {
//   const navigate = useNavigate();
//   const currency = "₹";
//   const delivery_fee = 50;

//   const [search, setSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(true);
//   const [cartItems, setCartItems] = useState({});
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
  
//   // State to store the placed orders
//   const [orders, setOrders] = useState(JSON.parse(localStorage.getItem("orders")) || []);

//   // Get Total Cart Count
//   const getCartCount = () => {
//     let count = 0;
//     for (const itemId in cartItems) {
//       for (const size in cartItems[itemId]) {
//         count += cartItems[itemId][size];
//       }
//     }
//     return count;
//   };

//   // Add To Cart
//   const addToCart = (itemId, size) => {
//     if (!size) {
//       toast.error("Please select a product size first.");
//       return;
//     }

//     const cartData = structuredClone(cartItems);

//     if (!cartData[itemId]) {
//       cartData[itemId] = {};
//     }

//     cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
//     setCartItems(cartData);

//     toast.success("Item added to cart!");
//   };

//   // Get Total Price
//   const getTotalPrice = () => {
//     let total = 0;
//     for (const itemId in cartItems) {
//       for (const size in cartItems[itemId]) {
//         const product = products.find((p) => p._id === itemId);
//         if (product) {
//           total += product.price * cartItems[itemId][size];
//         }
//       }
//     }
//     return total;
//   };

//   // Add Order
//   const addOrder = (order) => {
//     const newOrder = { ...order, status: "Pending" }; // Add status
//     const newOrders = [...orders, newOrder];
//     setOrders(newOrders);
//     localStorage.setItem("orders", JSON.stringify(newOrders));  // Save orders to localStorage for persistence
//   };

//   // Update Cart
//   const updateCart = (itemId, size, change) => {
//     const cartData = structuredClone(cartItems);

//     if (!cartData[itemId] || !cartData[itemId][size]) return;

//     if (cartData[itemId][size] + change > 0) {
//       cartData[itemId][size] += change;
//     } else {
//       delete cartData[itemId][size];
//       if (Object.keys(cartData[itemId]).length === 0) {
//         delete cartData[itemId];
//       }
//     }
//     setCartItems(cartData);
//   };

//   // Remove from Cart
//   const removeFromCart = (itemId, size) => {
//     const cartData = structuredClone(cartItems);
//     if (!cartData[itemId] || !cartData[itemId][size]) {
//       console.error("Item not found in cart:", itemId, size);
//       return;
//     }
//     delete cartData[itemId][size];
//     if (Object.keys(cartData[itemId]).length === 0) {
//       delete cartData[itemId];
//     }
//     setCartItems(cartData);
//   };

//   return (
//     <ShopContext.Provider
//       value={{
//         products,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         cartItems,
//         setCartItems,
//         addToCart,
//         updateCart,
//         removeFromCart,
//         getTotalPrice,
//         orderPlaced,
//         setOrderPlaced,
//         getCartCount,
//         orders,
//         setOrders, // Provide setOrders here
//         addOrder,
//       }}
//     >
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;


import React, { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const currency = "₹";
  const delivery_fee = 50;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // State to store the placed orders
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem("orders")) || []);

  // Update Orders after removal
  const updateOrders = (updatedOrders) => {
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));  // Save orders to localStorage for persistence
  };

  // Add Order
  const addOrder = (order) => {
    const newOrder = { ...order, status: "Pending" }; // Add status
    const newOrders = [...orders, newOrder];
    updateOrders(newOrders);
  };
  const addToCart = (itemId, size) => {
    const cartData = structuredClone(cartItems);
  
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = { [size]: 1 };
    }
  
    setCartItems(cartData);
    toast.success("Item added to cart!");
  };
  

  // Remove from Cart and Orders
  const removeFromCart = (itemId, size) => {
    const cartData = structuredClone(cartItems);
    if (!cartData[itemId] || !cartData[itemId][size]) {
      console.error("Item not found in cart:", itemId, size);
      return;
    }
    delete cartData[itemId][size];
    if (Object.keys(cartData[itemId]).length === 0) {
      delete cartData[itemId];
    }
    setCartItems(cartData);

    // Remove the item from orders as well
    const updatedOrders = orders.map((order) => {
      // Remove item from each order
      order.items = order.items.filter(
        (item) => item.id !== itemId || item.size !== size
      );
      // Remove the order if it has no items left
      return order.items.length > 0 ? order : null;
    }).filter(order => order !== null);  // Filter out null orders
    updateOrders(updatedOrders);
  };

  // Get Total Cart Count
  const getCartCount = () => {
    let count = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        count += cartItems[itemId][size];
      }
    }
    return count;
  };

  // Get Total Price
  const getTotalPrice = () => {
    let total = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const product = products.find((p) => p._id === itemId);
        if (product) {
          total += product.price * cartItems[itemId][size];
        }
      }
    }
    return total;
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalPrice,
        orderPlaced,
        setOrderPlaced,
        getCartCount,
        orders,
        setOrders, // Provide setOrders here
        addOrder,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
