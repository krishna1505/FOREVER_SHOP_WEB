



// import React, { useContext, useEffect } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../components/Title";

// const Orders = () => {
//   const { orders, currency, removeFromCart, setOrders } = useContext(ShopContext);

//   // This function will be used to remove an item from an order
//   const handleRemoveFromOrder = (orderId, itemId, size) => {
//     // Call removeFromCart from context to remove specific item from cart
//     removeFromCart(itemId, size);

//     // Update the orders state: remove the item from the corresponding order
//     const updatedOrders = orders.map(order => {
//       if (order.id === orderId) {
//         const updatedItems = order.items.filter(item => item.id !== itemId || item.size !== size);
        
//         // If the order is empty after removing the item, remove the whole order
//         if (updatedItems.length === 0) {
//           return null; // Mark this order for removal
//         }

//         return { ...order, items: updatedItems }; // Return updated order
//       }
//       return order;
//     }).filter(order => order !== null); // Filter out null (empty orders)

//     // Update the orders state and localStorage after removing the item or order
//     setOrders(updatedOrders);
//     localStorage.setItem("orders", JSON.stringify(updatedOrders));
//   };

//   // Effect hook to clear orders on page load (refresh)
//   useEffect(() => {
//     // Clear orders from localStorage to make "Your Orders" empty on reload
//     localStorage.removeItem("orders");
//     setOrders([]); // Also clear orders state

//   }, [setOrders]);

//   return (
//     <div className="container mx-auto py-8">
//       <div className="border-t pt-10 text-3xl">
//         <Title text1={'MY'} text2={'ORDERS'} />
//       </div>
//       <h2 className="text-xl pt-10 font-bold mb-4">Your Orders</h2>

//       {orders.length === 0 ? (
//         <p className="text-gray-600">You have no orders yet.</p>
//       ) : (
//         orders.map((order) => {
//           const formattedDate = new Date(order.dateTime).toLocaleDateString();
//           return (
//             <div key={order.id} className="border p-4 mb-4 rounded-lg shadow-md relative">
//               <div className="flex justify-between items-center mb-3">
//                 <p><strong>Order ID:</strong> {order.id}</p>
//                 <p><strong>Date:</strong> {formattedDate}</p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {order.items.map((item) => (
//                   <div key={`${item.id}-${item.size}`} className="border rounded-lg p-3 flex items-center gap-4">
//                     <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
//                     <div>
//                       <p className="font-medium">{item.name} ({item.size})</p>
//                       <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//                       <p className="text-sm font-semibold">Price: {currency} {(item.price * item.quantity).toFixed(2)}</p>
//                     </div>
//                     <button
//                       className="text-red-500 hover:text-red-700 mt-2"
//                       onClick={() => handleRemoveFromOrder(order.id, item.id, item.size)}
// //                     >
// //                       Remove
// //                     </button>
// //                   </div>
// //                 ))}
// //               </div>

// //               <div className="flex justify-between items-center mt-4 border-t pt-3">
// //                 <p className="text-yellow-600 font-bold text-lg">📦 Ready to Ship</p>
// //                 <button 
// //                   className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
// //                   onClick={() => console.log(`Tracking Order ID: ${order.id}`)}
// //                 >
// //                   🚚 Track Your Order
// //                 </button>
// //               </div>
// //             </div>
// //           );
// //         })
// //       )}
// //     </div>
// //   );
// // };


// // export default Orders;



// import React, { useContext, useEffect } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../components/Title";
// import { products } from "../assets/assets";  // ye zaroori hai image ke liye

// const Orders = () => {
//   const { orders, currency, removeFromCart, setOrders } = useContext(ShopContext);

//   const handleRemoveFromOrder = (orderId, itemId, size) => {
//     removeFromCart(itemId, size);

//     const updatedOrders = orders.map(order => {
//       if (order.id === orderId) {
//         const updatedItems = order.items.filter(item => item.id !== itemId || item.size !== size);
//         if (updatedItems.length === 0) {
//           return null;
//         }
//         return { ...order, items: updatedItems };
//       }
//       return order;
//     }).filter(order => order !== null);

//     setOrders(updatedOrders);
//     localStorage.setItem("orders", JSON.stringify(updatedOrders));
//   };

//   useEffect(() => {
//     const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     setOrders(savedOrders);
//   }, [setOrders]);

//   return (
//     <div className="container mx-auto py-8">
//       <div className="border-t pt-10 text-3xl">
//         <Title text1={'MY'} text2={'ORDERS 🛒'} />
//       </div>

//       <h2 className="text-xl pt-10 font-bold mb-4">Your Orders 📦</h2>

//       {orders.length === 0 ? (
//         <p className="text-gray-600">You have no orders yet 😔</p>
//       ) : (
//         orders.map((order) => {
//           const formattedDate = new Date(order.dateTime).toLocaleDateString();

//           return (
//             <div key={order.id} className="border p-4 mb-4 rounded-lg shadow">
//               <h3 className="font-bold mb-2">Order Date: {formattedDate}</h3>

//               {order.items.map((item, index) => {
//                 const product = products.find(p => p.id === item.id);  // yahi image ka kaam karega

//                 return (
//                   <div key={index} className="flex items-center justify-between gap-4 mb-2">
//                     <div className="flex items-center gap-4">
//                       <img src={product?.image} alt={product?.name} className="w-16 h-16 object-cover rounded" />
//                       <div>
//                         <p className="font-semibold">{product?.name}</p>
//                         <p>Size: {item.size}</p>
//                         <p>Qty: {item.quantity}</p>
//                         <p>Price: {currency}{product?.price}</p>
//                       </div>
//                     </div>

//                     <button
//                       className="bg-red-500 text-white px-2 py-1 rounded"
//                       onClick={() => handleRemoveFromOrder(order.id, item.id, item.size)}
//                     >
//                       Remove ❌
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default Orders;



// import React, { useContext, useEffect } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../components/Title";
// import { products } from "../assets/assets";
// import { MdDelete } from "react-icons/md";

// const Orders = () => {
//   const { orders, currency, removeFromCart, setOrders } = useContext(ShopContext);

//   const handleRemoveFromOrder = (orderId, itemId, size) => {
//     removeFromCart(itemId, size);

//     const updatedOrders = orders
//       .map((order) => {
//         if (order.id === orderId) {
//           const updatedItems = order.items.filter(
//             (item) => item.id !== itemId || item.size !== size
//           );
//           if (updatedItems.length === 0) {
//             return null;
//           }
//           return { ...order, items: updatedItems };
//         }
//         return order;
//       })
//       .filter((order) => order !== null);

//     setOrders(updatedOrders);
//     localStorage.setItem("orders", JSON.stringify(updatedOrders));
//   };

//   useEffect(() => {
//     const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     setOrders(savedOrders);
//   }, [setOrders]);

//   return (
//     <div className="container mx-auto py-8">
//       <div className="border-t pt-10 text-3xl">
//         <Title text1={"MY"} text2={"ORDERS 🛒"} />
//       </div>

//       <h2 className="text-xl pt-10 font-bold mb-4">Your Orders 📦</h2>

//       {orders.length === 0 ? (
//         <p className="text-gray-600">You have no orders yet 😔</p>
//       ) : (
//         orders.map((order) => {
//           const formattedDate = new Date(order.dateTime).toLocaleDateString();

//           return (
//             <div key={order.id} className="border p-4 mb-4 rounded-lg shadow">
//               <h3 className="font-bold mb-2">Order Date: {formattedDate}</h3>

//               {order.items.map((item, index) => {
//                 const product = products.find((p) => p.id === item.id);

//                 return (
//                   <div
//                     key={index}
//                     className="flex items-center justify-between gap-4 mb-2"
//                   >
//                     <div className="flex items-center gap-4">
//                       {product && (
//                         <img
//                           src={product.image[0]}
//                           alt={product.name}
//                           className="w-16 h-16 object-cover rounded"
//                         />
//                       )}
//                       <div>
//                         <h4 className="font-semibold">{item.name}</h4>
//                         <p>Size: {item.size}</p>
//                         <p>
//                           Price: {currency} {item.price}
//                         </p>
//                       </div>
//                     </div>

//                     <button
//                       onClick={() =>
//                         handleRemoveFromOrder(order.id, item.id, item.size)
//                       }
//                       className="text-red-600 hover:text-red-800 text-2xl"
//                     >
//                       <MdDelete />
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default Orders;





import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { MdDelete } from "react-icons/md";

const Orders = () => {
  const { orders, currency, removeFromCart, setOrders } = useContext(ShopContext);

  const handleRemoveFromOrder = (orderId, itemId, size) => {
    removeFromCart(itemId, size);

    const updatedOrders = orders
      .map((order) => {
        if (order.id === orderId) {
          const updatedItems = order.items.filter(
            (item) => item.id !== itemId || item.size !== size
          );
          if (updatedItems.length === 0) {
            return null;
          }
          return { ...order, items: updatedItems };
        }
        return order;
      })
      .filter((order) => order !== null);

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, [setOrders]);

  return (
    <div className="container mx-auto py-8">
      <div className="border-t pt-10 text-3xl">
        <Title text1={"MY"} text2={"ORDERS 🛒"} />
      </div>

      <h2 className="text-xl pt-10 font-bold mb-4">Your Orders 📦</h2>

      {orders.length === 0 ? (
        <p className="text-gray-600">You have no orders yet 😔</p>
      ) : (
        orders.map((order) => {
          const formattedDate = new Date(order.id).toLocaleDateString(); // Using order.id (timestamp) for date

          return (
            <div key={order.id} className="border p-4 mb-4 rounded-lg shadow">
              <h3 className="font-bold mb-2">Order Date: {formattedDate}</h3>
              <p className="text-sm text-gray-500 mb-2">Order ID: {order.id}</p>

              {order.items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex items-center justify-between gap-4 mb-2"
                >
                  <div className="flex items-center gap-4">
                    {item.image && (
                      <img
                        src={item.image} // Using the image from the item directly
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                        onError={(e) => {
                          e.target.src = '/path/to/placeholder-image.jpg'; // Fallback if image fails to load
                        }}
                      />
                    )}
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p>Size: {item.size}</p>
                      <p>Qty: {item.quantity}</p>
                      <p>
                        Price: {currency} {item.price}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      handleRemoveFromOrder(order.id, item.id, item.size)
                    }
                    className="text-red-600 hover:text-red-800 text-2xl"
                    title="Remove item"
                  >
                    <MdDelete />
                  </button>
                </div>
              ))}

              <div className="border-t mt-2 pt-2 font-bold">
                Total: {currency} {order.total}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Orders;