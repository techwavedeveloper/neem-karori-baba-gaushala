import express from 'express';
import dotenv from 'dotenv';
import db from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// API Endpoints
app.get('/api/products', (req, res) => {
    try {
        const products = db.prepare('SELECT * FROM products').all();
        res.json(products);
    } catch (error) {
        console.error('Fetch products error:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

app.post('/api/orders', (req, res) => {
    const { name, email, items, total } = req.body;
    try {
        const info = db.prepare('INSERT INTO orders (customer_name, customer_email, total_amount, items) VALUES (?, ?, ?, ?)')
            .run(name, email, total, JSON.stringify(items));
        res.status(201).json({ id: info.lastInsertRowid, message: 'Order placed successfully' });
    } catch (error) {
        console.error('Place order error:', error);
        res.status(500).json({ error: 'Failed to place order' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
