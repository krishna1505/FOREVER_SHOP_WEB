

// // // import React, { useState, useContext } from "react";
// // // import Title from "../components/Title";
// // // import { ShopContext } from "../context/ShopContext";
// // // import { toast } from "react-toastify";

// // // const PlaceOrder = () => {
// // //   const {
// // //     navigate,
// // //     cartItems,
// // //     setCartItems,
// // //     getTotalPrice,
// // //     delivery_fee,
// // //     currency,
// // //   } = useContext(ShopContext);

// // //   const [formData, setFormData] = useState({
// // //     firstName: "",
// // //     lastName: "",
// // //     email: "",
// // //     street: "",
// // //     city: "",
// // //     state: "",
// // //     zipCode: "",
// // //     country: "",
// // //     phone: "",
// // //   });

// // //   const [error, setError] = useState("");
// // //   const [selectedPayment, setSelectedPayment] = useState(null);
// // //   const [orderPlaced, setOrderPlaced] = useState(false);

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };


// // //   const handleOrder = () => {
// // //     const isFormFilled = Object.values(formData).every((value) => value.trim() !== "");
  
// // //     if (!isFormFilled) {
// // //       setError("⚠️ Please fill out all fields before placing your order.");
// // //       return;
// // //     }
  
// // //     if (!selectedPayment) {
// // //       setError("⚠️ Please select a payment method before placing your order.");
// // //       return;
// // //     }
  
// // //     setError("");
// // //     setOrderPlaced(true);
  
// // //     setTimeout(() => {
// // //       setCartItems({});
// // //       localStorage.removeItem("cartItems");  // important
// // //       navigate("/orders");
// // //     }, 1000);
// // //   };
  
  

// // //   const finalTotal = getTotalPrice() + delivery_fee;

// // //   const onSubmitHandler = async (event) => {
// // //     event.preventDefault();
// // //     handleOrder();
// // //   };

// // //   return (
// // //     <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
// // //       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
// // //         <Title text1={"DELIVERY"} text2={"INFORMATION"} />

// // //         <div className="flex gap-3">
// // //           <input
// // //             name="firstName"
// // //             value={formData.firstName}
// // //             onChange={handleChange}
// // //             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
// // //             type="text"
// // //             placeholder="First Name"
// // //             required
// // //           />
// // //           <input
// // //             name="lastName"
// // //             value={formData.lastName}
// // //             onChange={handleChange}
// // //             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
// // //             type="text"
// // //             placeholder="Last Name"
// // //             required
// // //           />
// // //         </div>

// // //         <input
// // //           name="email"
// // //           value={formData.email}
// // //           onChange={handleChange}
// // //           className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
// // //           type="email"
// // //           placeholder="Enter your Email"
// // //           required
// // //         />
// // //         <input
// // //           name="street"
// // //           value={formData.street}
// // //           onChange={handleChange}
// // //           className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
// // //           type="text"
// // //           placeholder="Street"
// // //           required
// // //         />

// // //         <div className="flex gap-3">
// // //           <input
// // //             name="city"
// // //             value={formData.city}
// // //             onChange={handleChange}
// // //             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
// // //             type="text"
// // //             placeholder="City"
// // //             required
// // //           />
// // //           <input
// // //             name="state"
// // //             value={formData.state}
// // //             onChange={handleChange}
// // //             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
// // //             type="text"
// // //             placeholder="State"
// // //             required
// // //           />
// // //         </div>

// // //         <div className="flex gap-3">
// // //           <input
// // //             name="zipCode"
// // //             value={formData.zipCode}
// // //             onChange={handleChange}
// // //             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
// // //             type="number"
// // //             placeholder="Zip Code"
// // //             required
// // //           />
// // //           <input
// // //             name="country"
// // //             value={formData.country}
// // //             onChange={handleChange}
// // //             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
// // //             type="text"
// // //             placeholder="Country"
// // //             required
// // //           />
// // //         </div>

// // //         <input
// // //           name="phone"
// // //           value={formData.phone}
// // //           onChange={handleChange}
// // //           className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
// // //           type="number"
// // //           placeholder="Phone"
// // //           required
// // //         />
// // //       </div>

// // //       <div className="mt-8">
// // //         <Title text1={"ORDER"} text2={"SUMMARY"} />
// // //         <div className="border rounded-lg p-4 shadow-md bg-gray-100">
// // //           <p className="text-lg font-semibold">Subtotal: {currency} {getTotalPrice().toFixed(2)}</p>
// // //           <p className="text-lg">Delivery Fee: {currency} {delivery_fee.toFixed(2)}</p>
// // //           <hr className="my-2" />
// // //           <p className="text-xl font-bold">Total: {currency} {finalTotal.toFixed(2)}</p>
// // //         </div>

// // //         <div className="mt-12">
// // //           <Title text1={"PAYMENT"} text2={"METHODS"} />
// // //           <div className="flex gap-3 flex-col lg:flex-row">
// // //             <button
// // //               className={`px-4 py-2 rounded-md font-medium ${selectedPayment === "razorpay" ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 text-black hover:bg-gray-300"}`}
// // //               onClick={() => setSelectedPayment("razorpay")}
// // //             >
// // //               Pay with Razorpay
// // //             </button>
// // //             <button
// // //               className={`px-4 py-2 rounded-md font-medium ${selectedPayment === "cod" ? "bg-green-600 text-white shadow-lg" : "bg-gray-200 text-black hover:bg-gray-300"}`}
// // //               onClick={() => setSelectedPayment("cod")}
// // //             >
// // //               Cash on Delivery
// // //             </button>
// // //           </div>
// // //         </div>

// // //         <div className="mt-6">
// // //           {error && <p className="text-red-500">{error}</p>}
// // //           <button
// // //             type="submit"
// // //             className="w-full px-4 py-2 rounded-md text-white font-semibold bg-black hover:bg-gray-800"
// // //             disabled={orderPlaced}
// // //           >
// // //             {orderPlaced ? "Order Placed ✅" : "Place Order"}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </form>
// // //   );
// // // };

// // // export default PlaceOrder;






// // import React, { useContext } from "react";
// // import { ShopContext } from "../context/ShopContext";
// // import { toast } from "react-toastify";

// // const PlaceOrder = () => {
// //   const { cartItems, getTotalPrice, orderPlaced, setOrderPlaced, addOrder } = useContext(ShopContext);

// //   const handlePlaceOrder = () => {
// //     if (Object.keys(cartItems).length === 0) {
// //       toast.error("Your cart is empty!");
// //       return;
// //     }

// //     const order = {
// //       id: Date.now(),  // You can use a different way to generate unique order IDs
// //       dateTime: new Date().toLocaleString(),
// //       items: Object.keys(cartItems).map((itemId) => {
// //         const product = cartItems[itemId];
// //         return {
// //           id: itemId,
// //           size: Object.keys(product),
// //           quantity: product[Object.keys(product)[0]],  // Assuming one size per item for simplicity
// //           name: product.name,
// //           price: product.price,
// //           image: product.image,
// //         };
// //       }),
// //       total: getTotalPrice(),
// //     };

// //     addOrder(order);
// //     setOrderPlaced(true);
// //     toast.success("Order placed successfully!");
// //   };

// //   return (
// //     <div className="mt-6">
// //       {orderPlaced && <p className="text-green-500">Your order has been placed successfully!</p>}
// //       <button
// //         type="button"
// //         className="w-full px-4 py-2 rounded-md text-white font-semibold bg-black hover:bg-gray-800"
// //         onClick={handlePlaceOrder}
// //         disabled={orderPlaced}
// //       >
// //         {orderPlaced ? "Order Placed ✅" : "Place Order"}
// //       </button>
// //     </div>
// //   );
// // };

// // export default PlaceOrder;




// import React, { useContext } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const PlaceOrder = () => {
//   const { cartItems, getTotalPrice, orderPlaced, setOrderPlaced, addOrder } = useContext(ShopContext);
//   const navigate = useNavigate();  // Use navigate to redirect

//   const handlePlaceOrder = () => {
//     if (Object.keys(cartItems).length === 0) {
//       toast.error("Your cart is empty!");
//       return;
//     }

//     const order = {
//       id: Date.now(),  // Unique order ID
//       dateTime: new Date().toLocaleString(),
//       items: Object.keys(cartItems).map((itemId) => {
//         const product = cartItems[itemId];
//         return {
//           id: itemId,
//           size: Object.keys(product),
//           quantity: product[Object.keys(product)[0]],  // Assuming one size per item for simplicity
//           name: product.name,
//           price: product.price,
//           image: product.image,
//         };
//       }),
//       total: getTotalPrice(),
//     };

//     // Add the order to context and localStorage
//     addOrder(order);

//     // Display success message
//     toast.success("Your order has been placed successfully!");

//     // Wait for a few seconds and then navigate to the Orders page
//     setTimeout(() => {
//       setOrderPlaced(true);
//       navigate("/orders"); // Redirect to the /orders page
//     }, 2000);  // Wait for 2 seconds before redirecting
//   };

//   return (
//     <div className="mt-6">
//       {orderPlaced && <p className="text-green-500">Your order has been placed successfully!</p>}
//       <button
//         type="button"
//         className="w-full px-4 py-2 rounded-md text-white font-semibold bg-black hover:bg-gray-800"
//         onClick={handlePlaceOrder}
//         disabled={orderPlaced}
//       >
//         {orderPlaced ? "Order Placed ✅" : "Place Order"}
//       </button>
//     </div>
//   );
// };

// export default PlaceOrder;




// import React, { useContext } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const PlaceOrder = () => {
//   const { cartItems, getTotalPrice, orderPlaced, setOrderPlaced, addOrder, products } = useContext(ShopContext);
//   const navigate = useNavigate();  // Use navigate to redirect

//   const handlePlaceOrder = () => {
//     if (Object.keys(cartItems).length === 0) {
//       toast.error("Your cart is empty!");
//       return;
//     }

//     const order = {
//       id: Date.now(),  // Unique order ID
//       dateTime: new Date().toLocaleString(),
//       items: Object.keys(cartItems).map((itemId) => {
//         const product = products.find((p) => p._id === itemId); // Find product by ID
//         if (product) {
//           return {
//             id: product._id,
//             size: Object.keys(cartItems[itemId]),
//             quantity: cartItems[itemId][Object.keys(cartItems[itemId])[0]], // Assuming one size per item
//             name: product.name,
//             price: product.price,
//             image: product.image,  // Add image to the order item
//           };
//         }
//         return null;
//       }).filter(item => item !== null),  // Filter out null items if product is not found
//       total: getTotalPrice(),
//     };

//     // Add the order to context and localStorage
//     addOrder(order);

//     // Display success message
//     toast.success("Your order has been placed successfully!");

//     // Wait for a few seconds and then navigate to the Orders page
//     setTimeout(() => {
//       setOrderPlaced(true);
//       navigate("/orders"); // Redirect to the /orders page
//     }, 2000);  // Wait for 2 seconds before redirecting
//   };

//   return (
//     <div className="mt-6">
//       {orderPlaced && <p className="text-green-500">Your order has been placed successfully!</p>}
//       <button
//         type="button"
//         className="w-full px-4 py-2 rounded-md text-white font-semibold bg-black hover:bg-gray-800"
//         onClick={handlePlaceOrder}
//         disabled={orderPlaced}
//       >
//         {orderPlaced ? "Order Placed ✅" : "Place Order"}
//       </button>
//     </div>
//   );
// };

// export default PlaceOrder;



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