


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
