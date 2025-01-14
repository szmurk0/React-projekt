import { useState } from 'react';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [userRole, setUserRole] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Funkcja dodająca produkty do koszyka
  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      // Jeśli produkt już jest w koszyku, zwiększ jego ilość
      const updatedCart = [...cartItems];
      updatedCart[existingProductIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      // Jeśli produkt nie jest w koszyku, dodaj go z ilością 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Funkcje do obsługi koszyka
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
    alert('Zamówienie zostało złożone!');
    clearCart();
  };

  return (
    <div>
      {!userRole ? (
        <Login setUserRole={setUserRole} />
      ) : userRole === 'admin' ? (
        <AdminPanel />
      ) : (
        <div>
          <ProductList addToCart={addToCart} />
          <Cart
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            clearCart={clearCart}
            placeOrder={placeOrder}
          />
        </div>
      )}
    </div>
  );
}

export default App;
