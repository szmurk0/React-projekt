import PropTypes from 'prop-types';
import './Cart.css';
import axios from 'axios';

const Cart = ({ cartItems, updateQuantity, removeItem, clearCart, placeOrder }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = async () => {
    const orderData = {
      userId: 1,  // Przykładowy ID użytkownika, w rzeczywistości można pobrać z sesji użytkownika
      cartItems: cartItems,
      totalPrice: calculateTotal(),
    };

    try {
      await axios.post('/api/orders', orderData);
      alert('Zamówienie zostało złożone');
      clearCart();  // Wyczyść koszyk po złożeniu zamówienia
    } catch (error) {
      console.error('Błąd podczas składania zamówienia', error);
    }
  };

  return (
    <div className="cart-container">
      <h4 className="cart-title">Koszyk</h4>
      {cartItems.length === 0 ? (
        <p className="cart-empty-message">Koszyk jest pusty</p>
      ) : (
        <ul className="cart-item-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-details">
                <div>
                  <strong className="cart-item-name">{item.name}</strong>
                  <p className="cart-item-price">Cena: {item.price} zł</p>
                  <div>
                    Ilość:
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="cart-item-quantity"
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    />
                  </div>
                </div>
                <button className="cart-item-remove-btn" onClick={() => removeItem(item.id)}>
                  Usuń
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h5 className="cart-total">Łączna cena: {calculateTotal()} zł</h5>
      <div className="cart-buttons">
        <button className="clear-cart-btn" onClick={clearCart}>
          Wyczyść koszyk
        </button>
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Złóż zamówienie
        </button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
  placeOrder: PropTypes.func.isRequired,
};

export default Cart;
