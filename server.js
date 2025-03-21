const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const port = 3000; // Port mặc định của server
// Import products data
const { products } = require('./products.js');
// Middleware
app.use(express.json());
app.use(methodOverride('_method'));

// API endpoints - Place these BEFORE static file middleware
app.get('/products/featured', (req, res) => {
    // Get 6 random products for featured section
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    res.json(shuffled.slice(0, 6));
});

app.get('/products/list', (req, res) => {
    const { category, query } = req.query;
    
    let filteredProducts = [...products];
    
    // Filter by category if specified
    if (category && category !== 'Tất cả') {
        filteredProducts = filteredProducts.filter(product => {
            switch(category) {
                case 'Thức ăn cho chó':
                    return product.Category === 'Thức ăn cho chó';
                case 'Thức ăn cho mèo':
                    return product.Category === 'Thức ăn cho mèo';
                case 'Phụ kiện':
                    return product.Category.includes('Phụ kiện');
                case 'Vệ sinh':
                    return product.Category.includes('Vệ sinh');
                default:
                    return true;
            }
        });
    }
    
    // Filter by search query if specified
    if (query) {
        const searchQuery = query.toLowerCase();
        filteredProducts = filteredProducts.filter(product => 
            product.Name.toLowerCase().includes(searchQuery) ||
            product.Description.toLowerCase().includes(searchQuery)
        );
    }
    
    res.json(filteredProducts);
});

app.get('/products/categories', (req, res) => {
    const categories = [
        'Tất cả',
        'Thức ăn cho chó',
        'Thức ăn cho mèo',
        'Phụ kiện',
        'Vệ sinh'
    ];
    res.json(categories);
});

// Static file middleware - Place these AFTER API endpoints
app.use(express.static('client'));
app.use(express.static('client/Pages'));
app.use(express.static('client/Images'));

// Page routes - Place these AFTER static middleware
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/Pages/index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/Pages/index.html'));
});

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/Pages/products.html'));
});

app.get('/products/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/Pages/product-details.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/Pages/about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/Pages/contact.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/Pages/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/Pages/register.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
