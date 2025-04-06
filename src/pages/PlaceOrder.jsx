
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { cartItems, getTotalPrice, orderPlaced, setOrderPlaced, addOrder, products } = useContext(ShopContext);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (Object.keys(cartItems).length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    const order = {
      id: Date.now(),  // Unique order ID
      dateTime: new Date().toLocaleString(),
      items: [],
      total: getTotalPrice(),
    };

    // Properly process all items with their sizes and quantities
    for (const itemId in cartItems) {
      const product = products.find((p) => p._id === itemId);
      if (product) {
        for (const size in cartItems[itemId]) {
          order.items.push({
            id: product._id,
            size: size,
            quantity: cartItems[itemId][size],
            name: product.name,
            price: product.price,
            image: product.image,  // Include the image
          });
        }
      }
    }

    // Add the order to context and localStorage
    addOrder(order);

    // Display success message
    toast.success("Your order has been placed successfully!");

    // Wait for a few seconds and then navigate to the Orders page
    setTimeout(() => {
      setOrderPlaced(true);
      navigate("/orders");
    }, 2000);
  };

  return (
    <div className="mt-6">
      {orderPlaced && <p className="text-green-500">Your order has been placed successfully!</p>}
      <button
        type="button"
        className="w-full px-4 py-2 rounded-md text-white font-semibold bg-black hover:bg-gray-800"
        onClick={handlePlaceOrder}
        disabled={orderPlaced}
      >
        {orderPlaced ? "Order Placed ✅" : "Place Order"}
      </button>
    </div>
  );
};

export default PlaceOrder;
