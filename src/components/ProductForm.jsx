import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'

const ProductForm = ({ onProductAdded }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newProduct = {
      name,
      price,
      image,
      description,
    };
  
    try {
      await axios.post('http://localhost:5000/api/products', newProduct);
      onProductAdded();
    } catch (error) {
      console.error('Błąd podczas dodawania produktu:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nazwa produktu:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Cena:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>URL obrazka:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div>
        <label>Opis:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" className='btn btn-primary'>Dodaj produkt</button>
    </form>
  );
};

export default ProductForm;
