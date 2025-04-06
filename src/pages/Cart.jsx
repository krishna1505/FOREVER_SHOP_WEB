
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { Trash2 } from "lucide-react"; // 🗑️ Remove Icon
import { useNavigate } from "react-router-dom"; // 🔄 Navigation

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalPrice,
    delivery_fee,
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate(); // 🔄 Navigation Hook

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  // 🛒 Calculate Item Total (Before Delivery Charge)
  const itemTotal = parseFloat(getTotalPrice());

  // 💰 Final Total = Item Total + Delivery Charge
  const finalTotal = itemTotal + delivery_fee;

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_1fr_1fr_1fr_1fr] items-center gap-4"
              >
                {/* 🖼️ Product Image & Details */}
                <div className="flex items-center gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={productData.image[0]}
                    alt={productData.name}
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                    <p className="text-xs text-gray-500">Size: {item.size}</p>
                  </div>
                </div>

                {/* 💰 Single Product Price */}
                <div className="text-sm sm:text-lg font-semibold">
                  {currency} {productData.price}
                </div>

                {/* 🔼🔽 Quantity Control Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                    onClick={() =>
                      item.quantity === 1
                        ? removeFromCart(item._id, item.size) // ❌ Remove if 1 left
                        : removeFromCart(item._id, item.size)
                    }
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                    onClick={() => addToCart(item._id, item.size)}
                  >
                    +
                  </button>
                </div>

                {/* 🗑️ Remove Button */}
                <button onClick={() => removeFromCart(item._id, item.size)}>
                  <Trash2 className="w-6 h-6 text-red-500 hover:text-red-700" />
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 py-10">Your cart is empty</p>
        )}
      </div>

      {/* 💰 Total Amount Calculation */}
      {cartData.length > 0 && (
        <div className="mt-6 text-lg font-semibold border-t pt-4">
          <p className="flex justify-between">
            <span>Item Total:</span> <span>{currency} {itemTotal.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Delivery Charge:</span> <span>{currency} {delivery_fee.toFixed(2)}</span>
          </p>
          <p className="flex justify-between text-xl font-bold border-t pt-3">
            <span>Final Total:</span> <span>{currency} {finalTotal.toFixed(2)}</span>
          </p>

          {/* ✅ Proceed to Checkout Button */}
          <button
            onClick={() => navigate("/place-order")}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
