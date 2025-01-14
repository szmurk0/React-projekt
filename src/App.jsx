import { useState, useEffect } from 'react';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import OrderHistory from './components/OrderHistory';

function App() {
  const [userRole, setUserRole] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activePage, setActivePage] = useState('products');

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingProductIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
  };

  const removeItem = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const placeOrder = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const newOrder = {
      items: cartItems,
      totalPrice,
      date: new Date(),
      status: 'Złożone',
    };

    const newOrders = [...orders, newOrder];
    setOrders(newOrders);
    localStorage.setItem('orders', JSON.stringify(newOrders));

    alert('Zamówienie zostało złożone!');
    clearCart();
  };

  const handleLogout = () => {
    setUserRole(null);
    window.location.reload();
  };

  return (
    <div>
      {/* Tylko wyświetl navbar, jeśli użytkownik jest zalogowany */}
      {userRole && <Navbar onLogout={handleLogout} setActivePage={setActivePage} />}
      
      {!userRole ? (
        <Login setUserRole={setUserRole} />
      ) : userRole === 'admin' ? (
        <AdminPanel />
      ) : (
        <div>
          {activePage === 'products' && (
            <>
              <ProductList addToCart={addToCart} />
              <Cart
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
                clearCart={clearCart}
                placeOrder={placeOrder}
              />
            </>
          )}

          {activePage === 'orders' && <OrderHistory orders={orders} />}
        </div>
      )}
    </div>
  );
}

export default App;
