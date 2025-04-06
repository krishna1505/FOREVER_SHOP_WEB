
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
