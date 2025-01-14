import { useEffect, useState } from 'react';
import ProductForm from './ProductForm';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Błąd podczas pobierania produktów:', error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`);
      fetchProducts(); // Odświeżenie listy produktów
    } catch (error) {
      console.error('Błąd podczas usuwania produktu:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="admin-container">
      <h1>Panel Administratora</h1>
      <ProductForm
        onProductAdded={fetchProducts}
        product={editingProduct}
        setEditingProduct={setEditingProduct}
      />
      <h2>Lista produktów</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <h3>Nazwa: {product.name}</h3>
            <p>Cena: {product.price} zł</p>
            <button className="btn" onClick={() => handleDelete(product.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
