import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, '../gaushala.db');
const db = new Database(dbPath);

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL,
    image TEXT NOT NULL,
    rating REAL DEFAULT 4.9
  );

  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT,
    customer_email TEXT,
    total_amount REAL,
    items TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed products if empty
const countResult = db.prepare('SELECT COUNT(*) as count FROM products').get() as { count: number };

if (countResult.count === 0) {
    const insert = db.prepare('INSERT INTO products (id, name, price, category, image) VALUES (?, ?, ?, ?, ?)');
    const products = [
        {
            id: '1',
            name: 'Pure A2 Desi Cow Ghee',
            price: 1200,
            category: 'Dairy',
            image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=400&q=80',
        },
        {
            id: '2',
            name: 'Gomaya Incense Sticks',
            price: 150,
            category: 'Spiritual',
            image: 'https://images.unsplash.com/photo-1602848597941-0d3d3a2c1241?auto=format&fit=crop&w=400&q=80',
        },
        {
            id: '3',
            name: 'Panchagavya Herbal Soap',
            price: 85,
            category: 'Personal Care',
            image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=400&q=80',
        },
        {
            id: '4',
            name: 'Organic Cow Dung Fertilizer',
            price: 250,
            category: 'Agriculture',
            image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=400&q=80',
        },
        {
            id: '5',
            name: 'Gomutra Ark (Distilled)',
            price: 180,
            category: 'Health',
            image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=400&q=80',
        },
        {
            id: '6',
            name: 'Handmade Cow Dung Diyas',
            price: 120,
            category: 'Decor',
            image: 'https://images.unsplash.com/photo-1573408302185-9146fe634ad0?auto=format&fit=crop&w=400&q=80',
        },
    ];

    for (const product of products) {
        insert.run(product.id, product.name, product.price, product.category, product.image);
    }
}

export default db;
