import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Products.css';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Błąd podczas pobierania produktów:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Produkty</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Cena: {product.price} zł</p>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>Dodaj do koszyka</button>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
