import { useState, useEffect } from 'react';
import axios from 'axios';

const OrderHistory = ({ userId }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`/api/orders?userId=${userId}`);
      setOrders(response.data);
    } catch (error) {
      console.error('Błąd podczas pobierania historii zamówień', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [userId]);

  return (
    <div>
      <h2>Historia zamówień</h2>
      {orders.length === 0 ? (
        <p>Brak historii zamówień.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <p>Data: {new Date(order.date).toLocaleDateString()}</p>
              <p>Łączna cena: {order.totalPrice} zł</p>
              <ul>
                {order.items.map((item) => (
                  <li key={item.productId}>
                    {item.name} - {item.quantity} x {item.price} zł
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
