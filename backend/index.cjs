const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sklepik_baza',
});

db.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err);
  } else {
    console.log('Połączono z MySQL');
  }
});


app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;

  const deleteQuery = 'DELETE FROM products WHERE id = ?';
  db.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.error('Błąd podczas usuwania produktu:', err);
      return res.status(500).send('Błąd podczas usuwania produktu');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Produkt nie znaleziony');
    }
    res.status(200).send('Produkt usunięty');
  });
});


app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const updateQuery = 'UPDATE products SET name = ?, price = ? WHERE id = ?';
  db.query(updateQuery, [name, price, id], (err, result) => {
    if (err) {
      console.error('Błąd podczas aktualizacji produktu:', err);
      return res.status(500).send('Błąd podczas aktualizacji produktu');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Produkt nie znaleziony');
    }
    res.status(200).send('Produkt zaktualizowany');
  });
});




app.post('/api/register', (req, res) => {
  const { login, password, role } = req.body;

  const checkQuery = 'SELECT * FROM users WHERE login = ?';
  db.query(checkQuery, [login], (err, results) => {
    if (err) {
      return res.status(500).send('Błąd podczas sprawdzania użytkownika');
    }
    if (results.length > 0) {
      return res.status(400).send('Użytkownik już istnieje');
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).send('Błąd podczas haszowania hasła');
      }

      const insertQuery = 'INSERT INTO users (login, password, role) VALUES (?, ?, ?)';
      db.query(insertQuery, [login, hashedPassword, role], (err) => {
        if (err) {
          return res.status(500).send('Błąd podczas rejestracji użytkownika');
        }
        res.status(201).send('Użytkownik zarejestrowany');
      });
    });
  });
});

app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const updateQuery = 'UPDATE products SET name = ?, price = ? WHERE id = ?';
  db.query(updateQuery, [name, price, id], (err, results) => {
    if (err) {
      return res.status(500).send('Błąd podczas aktualizacji produktu');
    }
    if (results.affectedRows === 0) {
      return res.status(404).send('Produkt nie znaleziony');
    }
    res.status(200).send('Produkt zaktualizowany');
  });
});


app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;

  const deleteQuery = 'DELETE FROM products WHERE id = ?';
  db.query(deleteQuery, [id], (err, results) => {
    if (err) {
      return res.status(500).send('Błąd podczas usuwania produktu');
    }
    if (results.affectedRows === 0) {
      return res.status(404).send('Produkt nie znaleziony');
    }
    res.status(200).send('Produkt usunięty');
  });
});

app.get('/api/orders', async (req, res) => {
  const { userId } = req.query;

  try {
    const orders = await Order.find({ userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Błąd podczas pobierania zamówień', error });
  }
});


app.post('/api/orders', async (req, res) => {
  const { userId, cartItems, totalPrice } = req.body;
  
  const newOrder = {
    userId,
    items: cartItems,
    totalPrice,
    status: 'Złożone',
    date: new Date(),
  };

  try {
    const savedOrder = await Order.create(newOrder);
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Błąd podczas składania zamówienia', error });
  }
});


const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  totalPrice: Number,
  status: String,
  date: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;



app.post('/api/products', (req, res) => {
  const { name, price, image, description } = req.body;

  console.log('Odebrane dane z formularza:', { name, price, image, description });  // Dodaj logowanie

  const insertQuery = 'INSERT INTO products (name, price, image, description) VALUES (?, ?, ?, ?)';
  db.query(insertQuery, [name, price, image, description], (err, results) => {
    if (err) {
      console.error('Błąd podczas dodawania produktu:', err);
      return res.status(500).send('Błąd podczas dodawania produktu');
    }
    res.status(201).send('Produkt dodany');
  });
});




app.get('/api/products', (req, res) => {
  const selectQuery = 'SELECT * FROM products';
  db.query(selectQuery, (err, results) => {
    if (err) {
      console.error('Błąd podczas pobierania produktów:', err);
      return res.status(500).send('Błąd podczas pobierania produktów');
    }
    res.json(results);
  });
});



app.post('/api/login', (req, res) => {
  const { login, password } = req.body;

  const query = 'SELECT * FROM users WHERE login = ?';
  db.query(query, [login], (err, results) => {
    if (err) {
      return res.status(500).send('Błąd podczas logowania');
    }
    if (results.length === 0) {
      return res.status(401).send('Nieprawidłowy login lub hasło');
    }

    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      if (err) {
        return res.status(500).send('Błąd podczas porównywania haseł');
      }
      if (isMatch) {
        res.json({ role: results[0].role });
      } else {
        res.status(401).send('Nieprawidłowy login lub hasło');
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
